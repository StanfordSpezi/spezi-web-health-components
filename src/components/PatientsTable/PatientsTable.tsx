//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { createColumnHelper } from '@tanstack/table-core'
import {
  DataTable,
  type DataTableProps,
} from '@stanfordspezi/spezi-web-design-system/components/DataTable'
import { PatientMenu } from './PatientMenu'
import { Patient } from '@medplum/fhirtypes'

interface PatientsDataTableProps
  extends Omit<DataTableProps<Patient>, 'columns'> {
    onRowClick?: (data: Patient) => void;
    onDelete: (data: Patient) => void;
    editRoute: string;
  }

export const PatientsTable = ({ data, onRowClick, onDelete, editRoute, ...props }: PatientsDataTableProps) => {
    const columnHelper = createColumnHelper<Patient>()
    
    const columns = [
    { header: 'First Name', accessorKey: 'name.0.given' },
    { header: 'Last Name', accessorKey: 'name.0.family' },
      columnHelper.display({
        id: 'actions',
        cell: (props) => <PatientMenu onDelete={onDelete} editRoute={editRoute} data={props.row.original}/>,
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
