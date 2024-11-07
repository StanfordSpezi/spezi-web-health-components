//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { Input, DatePicker, useForm } from "@stanfordbdhg/spezi-web-design-system";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@stanfordbdhg/spezi-web-design-system";
import { Button } from "@stanfordbdhg/spezi-web-design-system";
import { Field } from "@stanfordbdhg/spezi-web-design-system";
import { Observation} from '@medplum/fhirtypes'
import { getObservationTypeUnits, getUnitOfObservationType } from "@/utils/utils";
import { FHIR_OBSERVATION_RESOURCE_TYPE, 
    FHIRObservationValidationSchema, 
    OBSERVATION_STATUS_OPTIONS, 
    OBSERVATION_TYPE_OPTIONS, 
    UserObservationCollection 
} from "@/modules/fhir/observation";
import { RXNORM_MEDICATION_CODING_SYSTEM } from "@/modules/fhir/allergy-intolerance";

export const observationFormSchema = FHIRObservationValidationSchema;

export type ObservationFormSchema = z.infer<typeof observationFormSchema>;

interface ObservationFormProps {
  observation?: Observation;
  onSubmit: (data: Observation) => Promise<void>;
}

export const ObservationForm = ({
  observation,
  onSubmit,
}: ObservationFormProps) => {
  const isEdit = !!observation;
  const form = useForm({
    formSchema: observationFormSchema,
    defaultValues: {
        resourceType: FHIR_OBSERVATION_RESOURCE_TYPE,
        effectiveDateTime: new Date(),
    }
  })

  const handleSubmit = form.handleSubmit(async (data: ObservationFormSchema) => {
    try {
    const obs: Observation = {
        resourceType: FHIR_OBSERVATION_RESOURCE_TYPE,
        status: data.status,
        subject: { reference: 'Patient/' + observation?.subject?.reference },
        code: {
            coding: [{
              system: RXNORM_MEDICATION_CODING_SYSTEM,
              code: data.type,
              display: OBSERVATION_TYPE_OPTIONS.find(option => option.code === data.type)?.display
            }]
          },
        effectiveDateTime: data.effectiveDateTime.toISOString(),
        valueQuantity: {
            value: data.value,
            unit: data.unit
        } 
    };
    return await onSubmit(obs);
    } catch (error) {
        console.error("Form submission error:", error);
        throw error;
    }
  });

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
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {OBSERVATION_STATUS_OPTIONS.map((status) => (
                <SelectItem key={status.code} value={status.code}>
                  {status.display}
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
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {OBSERVATION_TYPE_OPTIONS.map((type) => (
                <SelectItem key={type.code} value={type.code}>
                  {type.display}
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
            <SelectTrigger>
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
      <Button type="submit" disabled={!form.formState.isValid} isPending={form.formState.isSubmitting}>
        {isEdit ? "Edit" : "Create"} observation
      </Button>
    </form>
  );
};
