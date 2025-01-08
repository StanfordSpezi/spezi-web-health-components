//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type Observation } from '@medplum/fhirtypes'
import { Button } from '@stanfordspezi/spezi-web-design-system/components/Button'
import { DatePicker } from '@stanfordspezi/spezi-web-design-system/components/DatePicker'
import { Input } from '@stanfordspezi/spezi-web-design-system/components/Input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@stanfordspezi/spezi-web-design-system/components/Select'
import { useForm, Field } from '@stanfordspezi/spezi-web-design-system/forms'
import { type z } from 'zod'
import { rxnormMedicationCodingSystem } from '@/modules/fhir/allergyIntolerance'
import { FHIRResourceType } from '@/modules/fhir/base'
import {
  fhirObservationValidationSchema,
  observationStatusOptions,
  observationTypeOptions,
  type UserObservationCollection,
} from '@/modules/fhir/observation'
import {
  getObservationTypeUnits,
  getUnitOfObservationType,
} from '@/utils/utils'

export const observationFormSchema = fhirObservationValidationSchema

export type ObservationFormSchema = z.infer<typeof observationFormSchema>

interface ObservationFormProps {
  observation?: Observation
  onSubmit: (observation: Observation) => Promise<void>
}

export const ObservationForm = ({
  observation,
  onSubmit,
}: ObservationFormProps) => {
  const isEdit = !!observation
  const form = useForm({
    formSchema: observationFormSchema,
    defaultValues: {
      resourceType: FHIRResourceType.Observation,
      effectiveDateTime: new Date(),
    },
  })

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const obs: Observation = {
        resourceType: FHIRResourceType.Observation,
        status: data.status,
        subject: {
          reference: `Patient/${observation?.subject?.reference}`,
        },
        code: {
          coding: [
            {
              system: rxnormMedicationCodingSystem,
              code: data.type,
              display: observationTypeOptions.find(
                (option) => option.value === data.type,
              )?.label,
            },
          ],
        },
        effectiveDateTime: data.effectiveDateTime.toISOString(),
        valueQuantity: {
          value: data.value,
          unit: data.unit,
        },
      }
      await onSubmit(obs)
      return
    } catch (error) {
      console.error('Form submission error:', error)
      throw error
    }
  })

  const [formType, formUnit] = form.watch(['type', 'unit'])
  const units = getObservationTypeUnits(formType)

  return (
    <form onSubmit={handleSubmit}>
      <Field
        control={form.control}
        name="status"
        label="Status"
        render={({ field }) => (
          <Select onValueChange={field.onChange} {...field}>
            <SelectTrigger id="status">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {observationStatusOptions.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <Field
        control={form.control}
        name="type"
        label="Type"
        render={({ field }) => (
          <Select
            onValueChange={(type) => {
              field.onChange(type)
              form.setValue(
                'unit',
                getUnitOfObservationType(
                  type as UserObservationCollection,
                  formUnit,
                ).unit,
              )
            }}
            {...field}
          >
            <SelectTrigger id="type">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {observationTypeOptions.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <Field
        control={form.control}
        name="unit"
        label="Unit"
        render={({ field }) => (
          <Select {...field} key={formType}>
            <SelectTrigger id="unit">
              <SelectValue placeholder="Unit" />
            </SelectTrigger>
            <SelectContent>
              {units?.map((unit) => (
                <SelectItem key={unit.unit} value={unit.unit}>
                  {unit.unit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <Field
        control={form.control}
        name="value"
        label="Value"
        render={({ field }) => (
          <Input
            {...field}
            type="number"
            onChange={(event) =>
              field.onChange(event.currentTarget.valueAsNumber)
            }
          />
        )}
      />
      <Field
        control={form.control}
        name="effectiveDateTime"
        label="Date"
        render={({ field }) => (
          <DatePicker
            mode="single"
            selected={field.value}
            onSelect={(date) => {
              field.onChange(date)
            }}
            defaultMonth={new Date()}
            toYear={new Date().getFullYear()}
          />
        )}
      />
      <Button type="submit" isPending={form.formState.isSubmitting}>
        {isEdit ? 'Edit' : 'Create'} observation
      </Button>
    </form>
  )
}
