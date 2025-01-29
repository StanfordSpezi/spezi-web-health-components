//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type Patient } from '@medplum/fhirtypes'
import { render, screen } from '@testing-library/react'
import { PatientsTable } from '.'

describe('PatientsTable', () => {
  it('renders element', () => {
    const onDelete = vitest.fn()

    render(
      <PatientsTable
        onDelete={onDelete}
        editRoute={(patientId) => `/patients/edit/${patientId}`}
        data={[
          {
            id: '1',
            name: [{ given: ['Leland'], family: 'Stanford' }],
          } as Patient,
        ]}
      />,
    )

    expect(screen.getByText('First Name')).toBeInTheDocument()
    expect(screen.getByText('Last Name')).toBeInTheDocument()

    expect(screen.getByText('Leland')).toBeInTheDocument()
    expect(screen.getByText('Stanford')).toBeInTheDocument()
  })
})
