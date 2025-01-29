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

    const statusInput = screen.getByLabelText('Status')
    expect(statusInput).toBeInTheDocument()
    statusInput.click()
    expect(screen.getByText('Registered')).toBeInTheDocument()

    const typeInput = screen.getByLabelText('Type')
    expect(typeInput).toBeInTheDocument()
    typeInput.click()
    expect(screen.getByText('Blood Pressure')).toBeInTheDocument()

    const unitInput = screen.getByLabelText('Unit')
    expect(unitInput).toBeInTheDocument()

    const valueInput = screen.getByRole('spinbutton', { name: 'Value' })
    expect(valueInput).toBeInTheDocument()

    const dateInput = screen.getByText('Date', { selector: 'label' })
    expect(dateInput).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'Create observation' })
    expect(button).toBeInTheDocument()
  })
})
