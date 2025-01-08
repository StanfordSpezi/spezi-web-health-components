//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type Medication, type AllergyIntolerance } from '@medplum/fhirtypes'
import { Button } from '@stanfordspezi/spezi-web-design-system/components/Button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@stanfordspezi/spezi-web-design-system/components/Select'
import { useForm, Field } from '@stanfordspezi/spezi-web-design-system/forms'
import { type z } from 'zod'
import {
  allergyTypeOptions,
  clinicalStatusCodingSystem,
  clinicalStatusOptions,
  criticalityOptions,
  fhirAllergyIntoleranceSchema,
  verificationStatusCodingSystem,
} from '@/modules/fhir/allergyIntolerance'
import { FHIRResourceType } from '@/modules/fhir/base'
import { type LocalizedText } from '@/types/localizedText'
import { MedicationSelect } from './MedicationSelect'

export const allergyFormSchema = fhirAllergyIntoleranceSchema

export type AllergyFormSchema = z.infer<typeof allergyFormSchema>

interface AllergyFormProps {
  allergy?: AllergyIntolerance
  medicationClasses: Array<{
    id: string
    name: LocalizedText
    medications: Medication[]
  }>
  onSubmit: (allergyIntolerance: AllergyIntolerance) => Promise<void>
}

export const AllergyForm = ({
  allergy,
  onSubmit,
  medicationClasses,
}: AllergyFormProps) => {
  const isEdit = !!allergy
  const form = useForm({
    formSchema: allergyFormSchema,
    defaultValues: {
      resourceType: FHIRResourceType.AllergyIntolerance,
      category: ['medication'],
    },
  })

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const allergyIntolerance: AllergyIntolerance = {
        resourceType: data.resourceType,
        type: data.type,
        clinicalStatus: {
          coding: [
            {
              system: clinicalStatusCodingSystem,
              code: data.clinicalStatus.coding?.at(0)?.code,
              display: data.clinicalStatus.coding?.at(0)?.display,
            },
          ],
        },
        verificationStatus: {
          coding: [
            {
              system: verificationStatusCodingSystem,
              display: 'Confirmed',
              code: 'confirmed',
            },
          ],
        },
        category: ['medication'],
        criticality: data.criticality,
        code: {
          coding: [
            {
              system: data.code.coding?.at(0)?.system,
              code: data.code.coding?.at(0)?.code,
              display: data.code.coding?.at(0)?.display,
            },
          ],
        },
        patient: { reference: allergy?.patient.reference },
      }
      await onSubmit(allergyIntolerance)
    } catch (error) {
      console.error('Form submission error:', error)
      throw error
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <Field
        control={form.control}
        name="type"
        label="Type"
        render={({ field }) => (
          <Select onValueChange={(value) => field.onChange(value)} {...field}>
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {allergyTypeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <Field
        control={form.control}
        name="code"
        label="Medication"
        render={({ field }) => (
          <MedicationSelect
            medicationClasses={medicationClasses}
            onValueChange={(value) => {
              const medications = medicationClasses.flatMap(
                (medicationClass) => medicationClass.medications,
              )
              const coding = medications
                .find(
                  (medication) =>
                    medication.code?.coding?.at(0)?.code === value,
                )
                ?.code?.coding?.at(0)
              field.onChange({
                coding: [
                  {
                    system: coding?.system,
                    code: coding?.code,
                    display: coding?.display,
                  },
                ],
              })
            }}
          />
        )}
      />
      <Field
        control={form.control}
        name="clinicalStatus"
        label="Clinical Status"
        render={({ field }) => (
          <Select
            onValueChange={(value) =>
              field.onChange({
                coding: [
                  {
                    system: clinicalStatusCodingSystem,
                    code: value,
                    display: value,
                  },
                ],
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select clinical status" />
            </SelectTrigger>
            <SelectContent>
              {clinicalStatusOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <Field
        control={form.control}
        name="criticality"
        label="Criticality"
        render={({ field }) => (
          <Select onValueChange={(value) => field.onChange(value)} {...field}>
            <SelectTrigger>
              <SelectValue placeholder="Select criticality" />
            </SelectTrigger>
            <SelectContent>
              {criticalityOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <Button type="submit" isPending={form.formState.isSubmitting}>
        {isEdit ? 'Edit' : 'Create'} allergy
      </Button>
    </form>
  )
}
