//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { z } from 'zod'

export const FHIR_OBSERVATION_RESOURCE_TYPE =
  'Observation' as const

export enum UserObservationCollection {
    bodyWeight = "bodyWeightObservations",
    bloodPressure = "bloodPressureObservations",
    creatinine = "creatinineObservations",
    dryWeight = "dryWeightObservations",
    eGfr = "eGfrObservations",
    heartRate = "heartRateObservations",
    potassium = "potassiumObservations"
}

export enum FHIRObservationStatus {
    registered = "registered",
    preliminary = "preliminary",
    final = "final",
    amended = "amended",
    corrected = "corrected",
    cancelled = "cancelled",
    entered_in_error = "entered-in-error",
    unknown = "unknown"
}

export const FHIRObservationValidationSchema = z.object({
  resourceType: z.literal(FHIR_OBSERVATION_RESOURCE_TYPE),
  type: z.nativeEnum(UserObservationCollection),
  status: z.nativeEnum(FHIRObservationStatus),
  effectiveDateTime: z.date(),
  unit: z.string(),
  value: z.number(),
})

export const OBSERVATION_STATUS_OPTIONS = [
  { code: FHIRObservationStatus.registered, display: 'Registered' },
  { code: FHIRObservationStatus.preliminary, display: 'Preliminary' },
  { code: FHIRObservationStatus.final, display: 'Final' },
  { code: FHIRObservationStatus.amended, display: 'Amended' },
  { code: FHIRObservationStatus.corrected, display: 'Corrected' },
  { code: FHIRObservationStatus.cancelled, display: 'Cancelled' },
  { code: FHIRObservationStatus.entered_in_error, display: 'Entered in Error' },
  { code: FHIRObservationStatus.unknown, display: 'Unknown' },
]

export const OBSERVATION_TYPE_OPTIONS = [
  { code: UserObservationCollection.bodyWeight, display: 'Body Weight' },
  { code: UserObservationCollection.bloodPressure, display: 'Blood Pressure' },
  { code: UserObservationCollection.creatinine, display: 'Creatinine' },
  { code: UserObservationCollection.dryWeight, display: 'Dry Weight' },
  { code: UserObservationCollection.eGfr, display: 'eGFR' },
  { code: UserObservationCollection.heartRate, display: 'Heart Rate' },
  { code: UserObservationCollection.potassium, display: 'Potassium' },
]
