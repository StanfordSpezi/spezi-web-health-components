//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { z } from 'zod'

export const FHIRCodableConceptValidationSchema = z.object({
  coding: z
    .array(
      z.object({
        system: z.string(),
        code: z.string(),
        display: z.string().optional(),
      }),
    )
    .min(1),
})

export interface FHIRBundleResource {
  resourceType: string
}

export interface FHIRBundleEntry<
  Resource extends FHIRBundleResource = FHIRBundleResource,
> {
  fullUrl?: string
  resource: Resource
}
