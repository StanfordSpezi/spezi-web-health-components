//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { fhirCodingConverter, fhirElementConverter, InferEncoded, UserObservationCollection } from "@stanfordbdhg/engagehf-models"

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

export const getObservationTypeUnits = (
    observationType: UserObservationCollection,
  ) => {
    if (observationType === UserObservationCollection.eGfr)
      return [
        {
          unit: 'mL/min/1.73m2',
          code: 'mL/min/{1.73_m2}',
          coding: [
            {
              ...basicFhirCoding,
              system: 'http://loinc.org',
              code: '98979-8',
              display:
                'Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum, Plasma or Blood by Creatinine-based formula (CKD-EPI 2021)',
            },
          ],
        },
      ]
    if (observationType === UserObservationCollection.potassium)
      return [
        {
          unit: 'mEq/L',
          code: 'meq/L',
          coding: [
            {
              ...basicFhirCoding,
              system: 'http://loinc.org',
              code: '6298-4',
              display: 'Potassium [Moles/volume] in Blood',
            },
          ],
        },
      ]
    if (observationType === UserObservationCollection.creatinine)
      return [
        {
          unit: 'mg/dL',
          code: 'mg/dL',
          coding: [
            {
              ...basicFhirCoding,
              system: 'http://loinc.org',
              code: '2160-0',
              display: 'Creatinine [Mass/volume] in Serum or Plasma',
            },
          ],
        },
      ]
    if (observationType === UserObservationCollection.bodyWeight)
      return [
        {
          unit: 'kg',
          code: 'kg',
        },
      ]
    if (observationType === UserObservationCollection.dryWeight)
      return [
        {
          unit: 'kg',
          code: 'kg',
        },
      ]
    if (observationType === UserObservationCollection.heartRate)
      return [
        {
          unit: 'bpm',
          code: 'bpm',
        },
      ]
    if (observationType === UserObservationCollection.bloodPressure)
      return [
        {
          unit: 'mm[Hg]',
          code: 'mm[Hg]',
        },
      ]
  }

export const getUnitOfObservationType = (
    type: UserObservationCollection,
    currentUnit?: string,
  ) => {
    const newUnits = getObservationTypeUnits(type)
    const existingUnit =
      currentUnit ?
        newUnits?.find((unit) => unit.unit === currentUnit)
      : undefined
    const newUnit = existingUnit ?? newUnits?.at(0)
    if (!newUnit) throw new Error('Observation units cannot be empty')
    return newUnit
  }
  