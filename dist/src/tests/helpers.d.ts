import { RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';
interface TestRouterProviderProps {
    children: ReactNode;
}
export declare const TestRouterProvider: ({ children }: TestRouterProviderProps) => import("react").JSX.Element;
export declare const renderWithProviders: (node: ReactNode, options?: RenderOptions) => import('@testing-library/react').RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
export {};
