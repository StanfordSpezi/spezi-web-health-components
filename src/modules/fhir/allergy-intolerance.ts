//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type CodeableConcept } from '@medplum/fhirtypes'
import { z } from 'zod'
import { FHIRCodableConceptValidationSchema } from '@/modules/fhir/base'

export const FHIR_ALLERGY_INTOLERANCE_RESOURCE_TYPE = 'AllergyIntolerance'
// noinspection HttpUrlsUsage
export const SNOMED_CODING_SYSTEM = 'http://snomed.info/sct'
export const RXNORM_MEDICATION_CODING_SYSTEM =
  'http://www.nlm.nih.gov/research/umls/rxnorm'
// noinspection HttpUrlsUsage
export const CLINICAL_STATUS_CODING_SYSTEM =
  'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical'
// noinspection HttpUrlsUsage
export const VERIFICATION_STATUS_CODING_SYSTEM =
  'http://terminology.hl7.org/CodeSystem/allergyintolerance-verification'

export enum FHIRAllergyIntoleranceType {
  // FHIR allergy intolerance type
  allergy = 'allergy',
  intolerance = 'intolerance',
}

export enum FHIRAllergyCriticality {
  // FHIR criticality
  low = 'low',
  high = 'high',
  unableToAssess = 'unable-to-assess',
}

export enum FHIRAllergyReactionSeverity {
  // FHIR severity
  mild = 'mild',
  moderate = 'moderate',
  severe = 'severe',
}

export enum FHIRAllergyClinicalStatus {
  // FHIR clinical status following clinical status coding system
  active = 'active',
  inactive = 'inactive',
  resolved = 'resolved',
}

export enum FHIRAllergyVerificationStatus {
  // FHIR verification status following verification status coding system
  confirmed = 'confirmed',
  unconfirmed = 'unconfirmed',
  refuted = 'refuted',
  enteredInError = 'entered-in-error',
}

export interface FHIRAllergyIntoleranceReaction {
  // FHIR allergy intolerance reaction
  manifestation: CodeableConcept[]
  severity: FHIRAllergyReactionSeverity
}

export const FHIRAllergyIntoleranceValidationSchema = z.object({
  resourceType: z.literal(FHIR_ALLERGY_INTOLERANCE_RESOURCE_TYPE),
  type: z.nativeEnum(FHIRAllergyIntoleranceType),
  clinicalStatus: FHIRCodableConceptValidationSchema,
  category: z.array(z.literal('medication')),
  code: FHIRCodableConceptValidationSchema,
  criticality: z.nativeEnum(FHIRAllergyCriticality),
})

export const ALLERGY_TYPE_OPTIONS = [
  { code: FHIRAllergyIntoleranceType.allergy, display: 'Allergy' },
  { code: FHIRAllergyIntoleranceType.intolerance, display: 'Intolerance' },
]

export const CRITICALITY_OPTIONS = [
  { code: FHIRAllergyCriticality.low, display: 'Low' },
  { code: FHIRAllergyCriticality.high, display: 'High' },
  { code: FHIRAllergyCriticality.unableToAssess, display: 'Unable to assess' },
]

export const MANIFESTATION_OPTIONS = [
  { code: '41291007', display: 'Angioedema' },
  { code: '271807003', display: 'Rash' },
  { code: '49727002', display: 'Cough' },
  { code: '74964007', display: 'Other' },
]

export const SEVERITY_OPTIONS = [
  { code: FHIRAllergyReactionSeverity.mild, display: 'Mild' },
  { code: FHIRAllergyReactionSeverity.moderate, display: 'Moderate' },
  { code: FHIRAllergyReactionSeverity.severe, display: 'Severe' },
]

export const CLINICAL_STATUS_OPTIONS = [
  { code: FHIRAllergyClinicalStatus.active, display: 'Active' },
  { code: FHIRAllergyClinicalStatus.inactive, display: 'Inactive' },
  { code: FHIRAllergyClinicalStatus.resolved, display: 'Resolved' },
]

export const VERIFICATION_STATUS_OPTIONS = [
  { code: FHIRAllergyVerificationStatus.confirmed, display: 'Confirmed' },
  { code: FHIRAllergyVerificationStatus.unconfirmed, display: 'Unconfirmed' },
  { code: FHIRAllergyVerificationStatus.refuted, display: 'Refuted' },
  {
    code: FHIRAllergyVerificationStatus.enteredInError,
    display: 'Entered in Error',
  },
]
