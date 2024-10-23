import { z } from 'zod';
import { Medication, AllergyIntolerance } from '@medplum/fhirtypes';
export declare const stringifyAllergyType: (type: AllergyIntolerance["type"]) => string;
export declare const allergyFormSchema: z.ZodObject<{
    medication: z.ZodString;
    type: z.ZodEnum<["allergy", "intolerance"]>;
}, "strip", z.ZodTypeAny, {
    type: "allergy" | "intolerance";
    medication: string;
}, {
    type: "allergy" | "intolerance";
    medication: string;
}>;
export type AllergyFormSchema = z.infer<typeof allergyFormSchema>;
interface AllergyFormProps {
    allergy?: AllergyIntolerance;
    medicationClasses: {
        id: string;
        name: string | Record<string, string>;
        medications: Medication[];
    }[];
    onSubmit: (data: AllergyFormSchema) => Promise<void>;
}
export declare const AllergyForm: ({ allergy, onSubmit, medicationClasses, }: AllergyFormProps) => import("react").JSX.Element;
export {};
