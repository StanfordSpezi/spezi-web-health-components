//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { type Patient } from '@medplum/fhirtypes'
import {
  DataTable,
  type DataTableProps,
} from '@stanfordspezi/spezi-web-design-system/components/DataTable'
import { createColumnHelper } from '@tanstack/react-table'
import { PatientMenu } from './PatientMenu'

interface PatientsTableProps extends Omit<DataTableProps<Patient>, 'columns'> {
  onDelete: (patient: Patient) => void
  editRoute: (patientId: string) => string
}

const columnHelper = createColumnHelper<Patient>()

export const PatientsTable = ({
  data,
  onDelete,
  editRoute,
  ...props
}: PatientsTableProps) => (
  <DataTable
    columns={[
      {
        header: 'First Name',
        accessorFn: (patient) => patient.name?.at(0)?.given,
      },
      {
        header: 'Last Name',
        accessorFn: (patient) => patient.name?.at(0)?.family,
      },
      {
        header: 'Contact',
        accessorFn: (patient) => patient.telecom?.at(0)?.value,
      },
      columnHelper.display({
        id: 'actions',
        cell: (props) => (
          <PatientMenu
            onDelete={onDelete}
            editRoute={editRoute(props.row.original.id ?? '')}
            patient={props.row.original}
          />
        ),
      }),
    ]}
    data={data}
    entityName="patients"
    {...props}
  />
)
