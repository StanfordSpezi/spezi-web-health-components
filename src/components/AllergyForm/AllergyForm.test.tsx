//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { type Medication } from '@medplum/fhirtypes'
import { render, screen } from '@testing-library/react'
import { AllergyForm } from '.'

describe('AllergyForm', () => {
  it('renders element', () => {
    const onSubmit = vi.fn()
    const medicationClasses = [
      {
        id: '1',
        name: 'ACE Inhibitors',
        medications: [
          {
            resourceType: 'Medication',
            id: '1',
            code: { coding: [{ code: '123', display: 'Lisinopril' }] },
          } as Medication,
        ],
      },
    ]
    render(
      <AllergyForm medicationClasses={medicationClasses} onSubmit={onSubmit} />,
    )

    const allergyTypeInput = screen.getByLabelText('Type')
    expect(allergyTypeInput).toBeInTheDocument()

    const medicationInput = screen.getByRole('combobox', {
      name: 'Medication',
    })
    expect(medicationInput).toBeInTheDocument()

    const clinicalStatusInput = screen.getByLabelText('Clinical Status')
    expect(clinicalStatusInput).toBeInTheDocument()

    const criticalityInput = screen.getByLabelText('Criticality')
    expect(criticalityInput).toBeInTheDocument()

    const submit = screen.getByRole('button', { name: 'Create allergy' })
    expect(submit).toBeInTheDocument()

    medicationInput.click()
    expect(screen.getByText('Lisinopril')).toBeInTheDocument()
  })
})
