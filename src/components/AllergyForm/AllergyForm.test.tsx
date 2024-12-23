//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type Medication } from '@medplum/fhirtypes'
import { render, screen } from '@testing-library/react'
import { AllergyForm } from '.'

describe('AllergyForm', () => {
  it('renders element', () => {
    const onSubmit = vitest.fn()
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

    const medicationSelector = screen.getByRole('combobox', {
      name: 'Medication',
    })
    expect(medicationSelector).toBeInTheDocument()

    const clinicalStatusSelector = screen.getByText('Clinical Status', {
      selector: 'label',
    })
    expect(clinicalStatusSelector).toBeInTheDocument()

    const criticalitySelector = screen.getByText('Criticality', {
      selector: 'label',
    })
    expect(criticalitySelector).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'Create allergy' })
    expect(button).toBeInTheDocument()

    medicationSelector.click()
    expect(screen.getByText('Lisinopril')).toBeInTheDocument()
  })
})
