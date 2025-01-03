//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type CodeableConcept } from '@medplum/fhirtypes'
import { fhirCodeableConceptConverter } from '@stanfordbdhg/engagehf-models'
import { z } from 'zod'
import { FHIRResourceType } from './base'

export const snomedCodingSystem = 'http://snomed.info/sct'
export const rxnormMedicationCodingSystem =
  'http://www.nlm.nih.gov/research/umls/rxnorm'
export const clinicalStatusCodingSystem =
  'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical'
export const verificationStatusCodingSystem =
  'http://terminology.hl7.org/CodeSystem/allergyintolerance-verification'

export enum FHIRAllergyIntoleranceType {
  allergy = 'allergy',
  intolerance = 'intolerance',
}

export enum FHIRAllergyCriticality {
  low = 'low',
  high = 'high',
  unableToAssess = 'unable-to-assess',
}

export enum FHIRAllergyReactionSeverity {
  mild = 'mild',
  moderate = 'moderate',
  severe = 'severe',
}

export enum FHIRAllergyClinicalStatus {
  active = 'active',
  inactive = 'inactive',
  resolved = 'resolved',
}

export enum FHIRAllergyVerificationStatus {
  confirmed = 'confirmed',
  unconfirmed = 'unconfirmed',
  refuted = 'refuted',
  enteredInError = 'entered-in-error',
}

export enum FHIRAllergyManifestationCode {
  Angioedema = '41291007',
  Rash = '271807003',
  Cough = '49727002',
  Other = '74964007',
}

export interface FHIRAllergyIntoleranceReaction {
  manifestation: CodeableConcept[]
  severity: FHIRAllergyReactionSeverity
}

export const fhirAllergyIntoleranceSchema = z.object({
  resourceType: z.literal(FHIRResourceType.AllergyIntolerance),
  type: z.nativeEnum(FHIRAllergyIntoleranceType),
  clinicalStatus: fhirCodeableConceptConverter.value.schema,
  category: z.array(z.literal('medication')),
  code: fhirCodeableConceptConverter.value.schema,
  criticality: z.nativeEnum(FHIRAllergyCriticality),
})

export const allergyTypeOptions = [
  { value: FHIRAllergyIntoleranceType.allergy, label: 'Allergy' },
  { value: FHIRAllergyIntoleranceType.intolerance, label: 'Intolerance' },
]

export const criticalityOptions = [
  { value: FHIRAllergyCriticality.low, label: 'Low' },
  { value: FHIRAllergyCriticality.high, label: 'High' },
  { value: FHIRAllergyCriticality.unableToAssess, label: 'Unable to assess' },
]

export const manifestationOptions = [
  { value: FHIRAllergyManifestationCode.Angioedema, label: 'Angioedema' },
  { value: FHIRAllergyManifestationCode.Rash, label: 'Rash' },
  { value: FHIRAllergyManifestationCode.Cough, label: 'Cough' },
  { value: FHIRAllergyManifestationCode.Other, label: 'Other' },
]

export const severityOptions = [
  { value: FHIRAllergyReactionSeverity.mild, label: 'Mild' },
  { value: FHIRAllergyReactionSeverity.moderate, label: 'Moderate' },
  { value: FHIRAllergyReactionSeverity.severe, label: 'Severe' },
]

export const clinicalStatusOptions = [
  { value: FHIRAllergyClinicalStatus.active, label: 'Active' },
  { value: FHIRAllergyClinicalStatus.inactive, label: 'Inactive' },
  { value: FHIRAllergyClinicalStatus.resolved, label: 'Resolved' },
]

export const verificationStatusOptions = [
  { value: FHIRAllergyVerificationStatus.confirmed, label: 'Confirmed' },
  { value: FHIRAllergyVerificationStatus.unconfirmed, label: 'Unconfirmed' },
  { value: FHIRAllergyVerificationStatus.refuted, label: 'Refuted' },
  {
    value: FHIRAllergyVerificationStatus.enteredInError,
    label: 'Entered in Error',
  },
]
