//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

export interface Drug {
  id: string;
  medicationId: string;
  medicationClassId: string | undefined;
  name: string;
  ingredients: Array<{
    name: string;
    strength: number;
    unit: string;
  }>;
}

export interface Medication {
  id: string;
  name: string;
  medicationClassId: string | undefined;
  dosage: {
    frequencyPerDay: number;
    quantity: number;
  };
  drugs: Drug[];
}
