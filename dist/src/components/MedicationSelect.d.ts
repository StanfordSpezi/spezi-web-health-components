import { ComponentProps } from 'react';
import { Select } from '@stanfordbdhg/spezi-web-design-system';
import { Medication } from '@medplum/fhirtypes';
interface MedicationSelectProps extends ComponentProps<typeof Select> {
    medicationClasses: {
        id: string;
        name: string | Record<string, string>;
        medications: Medication[];
    }[];
}
export declare const MedicationSelect: ({ medicationClasses, ...props }: MedicationSelectProps) => import("react").JSX.Element;
export {};
