//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2025 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import type {
  fhirCodingConverter,
  fhirElementConverter,
  InferEncoded,
} from '@stanfordbdhg/engagehf-models'

export type FHIRElement = InferEncoded<typeof fhirElementConverter>
export const basicFhirElement: FHIRElement = {
  id: null,
  extension: null,
}

export type FHIRCoding = InferEncoded<typeof fhirCodingConverter>
export const basicFhirCoding: FHIRCoding = {
  ...basicFhirElement,
  system: null,
  version: null,
  code: null,
  display: null,
  userSelected: null,
}
