//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { Link } from '@tanstack/react-router'
import { Pencil, Trash } from 'lucide-react'
import { DropdownMenuItem } from '@stanfordspezi/spezi-web-design-system/components/DropdownMenu';
import { ConfirmDeleteDialog } from '@stanfordspezi/spezi-web-design-system/molecules/ConfirmDeleteDialog';
import { DropdownMenu } from '@stanfordspezi/spezi-web-design-system/components/DropdownMenu';
import { useOpenState } from '@stanfordspezi/spezi-web-design-system/utils/useOpenState'
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
      <DropdownMenu>
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
      </DropdownMenu>
    </>
  )
}
