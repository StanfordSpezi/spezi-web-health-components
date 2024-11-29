//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { useForm } from '@stanfordspezi/spezi-web-design-system/forms';
import { Input } from '@stanfordspezi/spezi-web-design-system/components/Input';
import { z } from "zod";
import { Button } from '@stanfordspezi/spezi-web-design-system/components/Button';
import { Field } from '@stanfordspezi/spezi-web-design-system/forms';
import { Patient } from "@medplum/fhirtypes";

export const patientFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export type PatientFormSchema = z.infer<typeof patientFormSchema>;

interface PatientFormProps {
  patient?: Patient;
  onSubmit: (data: Patient) => Promise<void>;
}

export const PatientForm = ({
  patient,
  onSubmit,
}: PatientFormProps) => {
  const isEdit = !!patient;
  const form = useForm({
    formSchema: patientFormSchema
  });
  
  const handleSubmit = form.handleSubmit(async (data: PatientFormSchema) => {
    const patient: Patient = {
      resourceType: 'Patient',
      name: [{
        use: 'official',
        given: [data.firstName],
        family: data.lastName
      }]
      };
    return await onSubmit(patient);
  });

  return (
    <form onSubmit={handleSubmit}>
     <Field
        control={form.control}
        name="firstName"
        label="First Name"
        render={({ field }) => (
          <Input
            {...field}
          />
        )}
      />
      <Field
        control={form.control}
        name="lastName"
        label="Last Name"
        render={({ field }) => (
          <Input
            {...field}
          />
        )}
      />

      <Button type="submit" isPending={form.formState.isSubmitting}>
        {isEdit ? "Edit" : "Create"} patient
      </Button>
    </form>
  );
};
