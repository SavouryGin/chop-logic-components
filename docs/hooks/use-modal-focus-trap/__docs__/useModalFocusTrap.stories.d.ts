import { default as React } from '../../../../node_modules/react';
import { Meta, StoryObj } from '@storybook/react';

declare const ExampleModal: React.FC;
declare const meta: Meta<typeof ExampleModal>;
export default meta;
type Story = StoryObj<typeof ExampleModal>;
export declare const Default: Story;
