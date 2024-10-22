import { Meta, StoryObj } from '@storybook/react';
import { Error } from './Error';
declare const meta: Meta<typeof Error>;
export default meta;
type Story = StoryObj<typeof Error>;
export declare const Default: Story;
export declare const NoError: Story;
export declare const NoErrorHidden: Story;
