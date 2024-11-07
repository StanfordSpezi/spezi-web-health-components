//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { render, screen } from '@testing-library/react'
import { PatientForm } from '.'

describe('PatientForm', () => {
  it('renders element', () => {
    const onSubmit = vitest.fn()
    
    render(<PatientForm onSubmit={onSubmit} />)

    const firstNameInput = screen.getByRole('textbox', { name: 'First Name' })
    expect(firstNameInput).toBeInTheDocument()

    const lastNameInput = screen.getByRole('textbox', { name: 'Last Name' })
    expect(lastNameInput).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'Create patient' })
    expect(button).toBeInTheDocument()
  })
})  