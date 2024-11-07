//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Design System open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { render, screen } from '@testing-library/react'
import { PatientsTable } from '.'
import { Patient } from '@medplum/fhirtypes'

describe('PatientsTable', () => {
  it('renders element', () => {
    const onDelete = vitest.fn()
    const editRoute = '/patients/edit'
    const data: Patient[] = [{ id: '1', name: [{ given: ['Leland'], family: 'Stanford' }] } as Patient]

    render(<PatientsTable onDelete={onDelete} editRoute={editRoute} data={data} />)

    const firstNameHeader = screen.getByText('First Name', { selector: 'button' })
    expect(firstNameHeader).toBeInTheDocument()

    const lastNameHeader = screen.getByText('Last Name', { selector: 'button' })
    expect(lastNameHeader).toBeInTheDocument()

    const firstNameCell = screen.getByText('Leland', { selector: 'td' })
    expect(firstNameCell).toBeInTheDocument()

    const lastNameCell = screen.getByText('Stanford', { selector: 'td' })
    expect(lastNameCell).toBeInTheDocument()
  })
})