//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
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
} from "@stanfordbdhg/spezi-web-design-system";
import { Medication } from "@/models/medication";

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
    <SelectTrigger>
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
            <SelectItem value={medication.id} key={medication.id}>
              {medication.name}
            </SelectItem>
          ))}
        </SelectGroup>
      ))}
    </SelectContent>
  </Select>
);
