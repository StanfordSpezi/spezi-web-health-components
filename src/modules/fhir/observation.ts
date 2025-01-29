//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { z } from 'zod'
import { FHIRResourceType } from './base'

export enum UserObservationCollection {
  bodyWeight = 'bodyWeightObservations',
  bloodPressure = 'bloodPressureObservations',
  creatinine = 'creatinineObservations',
  dryWeight = 'dryWeightObservations',
  eGfr = 'eGfrObservations',
  heartRate = 'heartRateObservations',
  potassium = 'potassiumObservations',
}

export enum FHIRObservationStatus {
  registered = 'registered',
  preliminary = 'preliminary',
  final = 'final',
  amended = 'amended',
  corrected = 'corrected',
  cancelled = 'cancelled',
  enteredInError = 'entered-in-error',
  unknown = 'unknown',
}

export const fhirObservationValidationSchema = z.object({
  resourceType: z.literal(FHIRResourceType.Observation),
  type: z.nativeEnum(UserObservationCollection),
  status: z.nativeEnum(FHIRObservationStatus),
  effectiveDateTime: z.date(),
  unit: z.string(),
  value: z.number(),
})

export const observationStatusOptions = [
  { value: FHIRObservationStatus.registered, label: 'Registered' },
  { value: FHIRObservationStatus.preliminary, label: 'Preliminary' },
  { value: FHIRObservationStatus.final, label: 'Final' },
  { value: FHIRObservationStatus.amended, label: 'Amended' },
  { value: FHIRObservationStatus.corrected, label: 'Corrected' },
  { value: FHIRObservationStatus.cancelled, label: 'Cancelled' },
  { value: FHIRObservationStatus.enteredInError, label: 'Entered in Error' },
  { value: FHIRObservationStatus.unknown, label: 'Unknown' },
]

export const observationTypeOptions = [
  { value: UserObservationCollection.bodyWeight, label: 'Body Weight' },
  { value: UserObservationCollection.bloodPressure, label: 'Blood Pressure' },
  { value: UserObservationCollection.creatinine, label: 'Creatinine' },
  { value: UserObservationCollection.dryWeight, label: 'Dry Weight' },
  { value: UserObservationCollection.eGfr, label: 'eGFR' },
  { value: UserObservationCollection.heartRate, label: 'Heart Rate' },
  { value: UserObservationCollection.potassium, label: 'Potassium' },
]
