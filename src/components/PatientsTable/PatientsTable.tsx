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
import { createColumnHelper } from '@tanstack/table-core'
import { PatientMenu } from './PatientMenu'

interface PatientsTableProps extends Omit<DataTableProps<Patient>, 'columns'> {
  onRowClick?: (patient: Patient) => void
  onDelete: (patient: Patient) => void
  editRoute: (patientId: string) => string
}

export const PatientsTable = ({
  data,
  onRowClick,
  onDelete,
  editRoute,
  ...props
}: PatientsTableProps) => {
  const columnHelper = createColumnHelper<Patient>()

  const columns = [
    { header: 'First Name', accessorKey: 'name.0.given' },
    { header: 'Last Name', accessorKey: 'name.0.family' },
    { header: 'Contact', accessorKey: 'telecom.0.value' },
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
  ]

  return (
    <DataTable
      columns={columns}
      data={data}
      entityName="patients"
      tableView={{
        onRowClick: onRowClick,
      }}
      {...props}
    />
  )
}
