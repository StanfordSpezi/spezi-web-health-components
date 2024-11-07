//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { render, screen } from '@testing-library/react'
import { ObservationForm } from '.'

describe('ObservationForm', () => {
  it('renders element', () => {
    const onSubmit = vitest.fn()
    
    render(<ObservationForm onSubmit={onSubmit} />)

    const statusSelector = screen.getByText('Status', { selector: 'label' })
    expect(statusSelector).toBeInTheDocument()
    statusSelector.click()
    expect(screen.getByText('Registered')).toBeInTheDocument()

    const typeSelector = screen.getByText('Type', { selector: 'label' })
    expect(typeSelector).toBeInTheDocument()
    typeSelector.click()
    expect(screen.getByText('Blood Pressure')).toBeInTheDocument()

    const unitSelector = screen.getByText('Unit', { selector: 'label' })
    expect(unitSelector).toBeInTheDocument()

    const valueInput = screen.getByRole('spinbutton', { name: 'Value' })
    expect(valueInput).toBeInTheDocument()

    const dateInput = screen.getByText('Date', { selector: 'label' })
    expect(dateInput).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'Create observation' })
    expect(button).toBeInTheDocument()
  })
})