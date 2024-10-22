import { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';
import { Person } from './DataTable.mocks';
declare const meta: Meta<typeof DataTable>;
export default meta;
type Story = StoryObj<typeof DataTable<Person>>;
export declare const Default: Story;
export declare const Paginated: Story;
export declare const HeaderAction: Story;
/**
 * Click on row
 * */
export declare const RowAction: Story;
export declare const PremadeColumns: Story;
/**
 * Custom view that replaces standard table view
 * */
export declare const CustomView: () => import("react").JSX.Element;
export declare const Minimal: Story;
export declare const NoBorder: Story;
