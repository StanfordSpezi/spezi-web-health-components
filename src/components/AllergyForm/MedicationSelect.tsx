//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type ComponentProps } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@stanfordspezi/spezi-web-design-system/components/Select';
import { Medication } from '@medplum/fhirtypes'

interface MedicationSelectProps extends ComponentProps<typeof Select> {
  medicationClasses: {
    id: string;
    name: string | Record<string, string>;
    medications: Medication[];
  }[];
}

export const MedicationSelect = ({
  medicationClasses,
  ...props
}: MedicationSelectProps) => (
  <Select {...props}>
    <SelectTrigger id="code">
      <SelectValue placeholder="Medication" />
    </SelectTrigger>
    <SelectContent>
      {medicationClasses.map((medicationClass) => (
        <SelectGroup key={medicationClass.id}>
          <SelectLabel>
            {typeof medicationClass.name === "string"
              ? medicationClass.name
              : Object.values(medicationClass.name)[0]}
          </SelectLabel>
          {medicationClass.medications.map((medication) => (
            <SelectItem value={medication.code?.coding?.[0].code ?? ""} key={medication.code?.coding?.[0].code ?? ""}>
              {medication.code?.coding?.[0].display}
            </SelectItem>
          ))}
        </SelectGroup>
      ))}
    </SelectContent>
  </Select>
);
