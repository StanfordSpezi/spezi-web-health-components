import { Meta, StoryObj } from '@storybook/react';
import { CopyText } from './CopyText';
declare const meta: Meta<typeof CopyText>;
export default meta;
type Story = StoryObj<typeof CopyText>;
export declare const Default: Story;
export declare const Truncated: Story;
export declare const DifferentTextValue: Story;
