//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { render, screen } from '@testing-library/react'
import { AllergyForm } from '.'
import { Medication } from '@medplum/fhirtypes'

describe('AllergyForm', () => {
  it('renders element', () => {
    const onSubmit = vitest.fn()
    const medicationClasses = [
      { id: '1', 
        name: 'ACE Inhibitors', 
        medications: [
          { resourceType: 'Medication', 
            id: '1', 
            code: { coding: [{ code: '123', display: 'Lisinopril' }] }
          } as Medication
        ]
      }
    ]
    render(<AllergyForm medicationClasses={medicationClasses} onSubmit={onSubmit} />)

    const allergyTypeSelector = screen.getByText('Type', { selector: 'label' })
    expect(allergyTypeSelector).toBeInTheDocument()

    const medicationSelector = screen.getByRole('combobox', { name: 'Medication' })
    expect(medicationSelector).toBeInTheDocument()

    const clinicalStatusSelector = screen.getByText('Clinical Status', { selector: 'label' })
    expect(clinicalStatusSelector).toBeInTheDocument()

    const criticalitySelector = screen.getByText('Criticality', { selector: 'label' })
    expect(criticalitySelector).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'Create allergy' })
    expect(button).toBeInTheDocument()

    medicationSelector.click()
    expect(screen.getByText('Lisinopril')).toBeInTheDocument()
  })
})