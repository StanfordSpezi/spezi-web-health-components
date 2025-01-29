//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type Medication } from '@medplum/fhirtypes'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@stanfordspezi/spezi-web-design-system/components/Select'
import { type ComponentProps } from 'react'
import { parseLocalizedText, type LocalizedText } from '@/types/localizedText'

interface MedicationSelectProps extends ComponentProps<typeof Select> {
  medicationClasses: Array<{
    id: string
    name: LocalizedText
    medications: Medication[]
  }>
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
          <SelectLabel>{parseLocalizedText(medicationClass.name)}</SelectLabel>
          {medicationClass.medications.map((medication) => {
            const coding = medication.code?.coding?.at(0)
            return (
              <SelectItem value={coding?.code ?? ''} key={coding?.code ?? ''}>
                {coding?.display}
              </SelectItem>
            )
          })}
        </SelectGroup>
      ))}
    </SelectContent>
  </Select>
)
