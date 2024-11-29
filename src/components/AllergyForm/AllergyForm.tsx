//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { useForm } from '@stanfordspezi/spezi-web-design-system/forms';
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@stanfordspezi/spezi-web-design-system/components/Select';
import { Button } from '@stanfordspezi/spezi-web-design-system/components/Button';
import { Field } from '@stanfordspezi/spezi-web-design-system/forms';
import { MedicationSelect } from "./MedicationSelect";
import { Medication, AllergyIntolerance} from '@medplum/fhirtypes'
import {
  ALLERGY_TYPE_OPTIONS,
  CLINICAL_STATUS_CODING_SYSTEM,
  CLINICAL_STATUS_OPTIONS,
  CRITICALITY_OPTIONS,
  FHIR_ALLERGY_INTOLERANCE_RESOURCE_TYPE,
  FHIRAllergyIntoleranceValidationSchema,
  VERIFICATION_STATUS_CODING_SYSTEM
} from "@/modules/fhir/allergy-intolerance";

export const allergyFormSchema = FHIRAllergyIntoleranceValidationSchema;

export type AllergyFormSchema = z.infer<typeof allergyFormSchema>;

interface AllergyFormProps {
  allergy?: AllergyIntolerance;
  medicationClasses: {
    id: string;
    name: string | Record<string, string>;
    medications: Medication[];
  }[];
  onSubmit: (data: AllergyIntolerance) => Promise<void>;
}

export const AllergyForm = ({
  allergy,
  onSubmit,
  medicationClasses,
}: AllergyFormProps) => {
  const isEdit = !!allergy;
  const form = useForm({
    formSchema: allergyFormSchema,
    defaultValues: {
      resourceType: FHIR_ALLERGY_INTOLERANCE_RESOURCE_TYPE,
      category: ['medication'],
    }
  });

  const handleSubmit = form.handleSubmit(async (data: AllergyFormSchema) => {
    try {
      const allergyIntolerance: AllergyIntolerance = {
        resourceType: data.resourceType,
        type: data.type,
        clinicalStatus: data.clinicalStatus,
        verificationStatus: {
          coding: [{
            system: VERIFICATION_STATUS_CODING_SYSTEM,
            display: 'Confirmed',
            code: 'confirmed'
          }]
        },
        category: ['medication'],
        criticality: data.criticality,
        code: {
          coding: [{
            system: data.code.coding[0].system,
            code: data.code.coding[0].code,
            display: data.code.coding[0].display
          }]
        },
        patient: { reference: allergy?.patient?.reference }
      };
      await onSubmit(allergyIntolerance);
    } catch (error) {
      console.error("Form submission error:", error);
      throw error;
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Field
        control={form.control}
        name="type"
        label="Type"
        render={({ field }) => (
          <Select onValueChange={(value) => field.onChange(value)} {...field} >
            <SelectTrigger id="type">
              <SelectValue placeholder="Type" />
            </SelectTrigger >
            <SelectContent>
              {ALLERGY_TYPE_OPTIONS.map((option) => (
                <SelectItem key={option.code} value={option.code}>
                  {option.display}
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
              const medications = medicationClasses.flatMap(medicationClass => medicationClass.medications)
              const coding = medications.find(medication => medication.code?.coding?.[0].code === value)?.code?.coding?.[0]
              return field.onChange({
                coding: [
                  {
                    system: coding?.system,
                    code: coding?.code,
                    display: coding?.display
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
            value={field.value?.coding?.[0]?.code}
            onValueChange={(value) =>
              field.onChange({
                coding: [
                  {
                    system: CLINICAL_STATUS_CODING_SYSTEM,
                    code: value,
                    display: value
                  },
                ],
              })
            }
          >
            <SelectTrigger id="clinicalStatus">
              <SelectValue placeholder="Select clinical status" />
            </SelectTrigger>
            <SelectContent>
              {CLINICAL_STATUS_OPTIONS.map((option) => (
                <SelectItem key={option.code} value={option.code}>
                  {option.display}
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
          <Select
            onValueChange={(value) =>
              field.onChange(value)
            }
            {...field}
          >
            <SelectTrigger id="criticality">
              <SelectValue placeholder="Select criticality" />
            </SelectTrigger>
            <SelectContent position="popper">
              {CRITICALITY_OPTIONS.map((option) => (
                <SelectItem key={option.code} value={option.code}>
                  {option.display}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <Button type="submit" disabled={!form.formState.isValid} isPending={form.formState.isSubmitting}>
        {isEdit ? "Edit" : "Create"} allergy
      </Button>
    </form>
  );
};
