//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { Link } from '@tanstack/react-router'
import { Pencil, Trash } from 'lucide-react'
import { RowDropdownMenu,
    DropdownMenuItem,
    ConfirmDeleteDialog,
    useOpenState
 } from '@stanfordbdhg/spezi-web-design-system'
import { Patient } from '@medplum/fhirtypes'

interface PatientMenuProps {
  onDelete: (data: Patient) => void
  editRoute: string
  data: Patient
}

export const PatientMenu = ({ onDelete, editRoute, data }: PatientMenuProps) => {
const deleteConfirm = useOpenState()

  return (
    <>
      <ConfirmDeleteDialog
        open={deleteConfirm.isOpen}
        onOpenChange={deleteConfirm.setIsOpen}
        entityName="patient"
        onDelete={() => onDelete(data)}
      />
      <RowDropdownMenu>
        <DropdownMenuItem asChild>
          <Link to={editRoute}>
            <Pencil />
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={deleteConfirm.open}>
          <Trash />
          Delete
        </DropdownMenuItem>
      </RowDropdownMenu>
    </>
  )
}
