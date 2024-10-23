//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { useForm } from "@stanfordbdhg/spezi-web-design-system";
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
import { startCase } from "es-toolkit";
import { MedicationSelect } from "@/components/MedicationSelect";
import { Medication, AllergyIntolerance} from '@medplum/fhirtypes'

export const stringifyAllergyType = (type: AllergyIntolerance["type"]) => startCase(type ?? "");

export const allergyFormSchema = z.object({
  medication: z.string(),
  type: z.enum(["allergy", "intolerance"]),
});

export type AllergyFormSchema = z.infer<typeof allergyFormSchema>;

interface AllergyFormProps {
  allergy?: AllergyIntolerance;
  medicationClasses: {
    id: string;
    name: string | Record<string, string>;
    medications: Medication[];
  }[];
  onSubmit: (data: AllergyFormSchema) => Promise<void>;
}

export const AllergyForm = ({
  allergy,
  onSubmit,
  medicationClasses,
}: AllergyFormProps) => {
  const isEdit = !!allergy;
  const form = useForm({
    formSchema: allergyFormSchema
  });

  const handleSubmit = form.handleSubmit(async (data: AllergyFormSchema) => {
    await onSubmit(data);
  });

  return (
    <form onSubmit={handleSubmit}>
      <Field
        control={form.control}
        name="type"
        render={({ field }) => (
          <Select onValueChange={field.onChange} {...field}>
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(["allergy", "intolerance"]).map((type) => (
                <SelectItem key={type} value={type}>
                  {stringifyAllergyType(type as AllergyIntolerance["type"])}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <Field
        control={form.control}
        name="medication"
        render={({ field }) => (
          <MedicationSelect
            medicationClasses={medicationClasses}
            onValueChange={field.onChange}
            {...field}
          />
        )}
      />
      <Button type="submit" isPending={form.formState.isSubmitting}>
        {isEdit ? "Edit" : "Create"} allergy
      </Button>
    </form>
  );
};
