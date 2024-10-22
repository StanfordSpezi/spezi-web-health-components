import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
declare const meta: Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof Switch>;
export declare const Unchecked: Story;
export declare const Checked: Story;
export declare const Functional: () => import("react").JSX.Element;
export declare const Labeled: () => import("react").JSX.Element;
