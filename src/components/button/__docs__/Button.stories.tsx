import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: 'Submit',
    disabled: false,
    mode: 'primary',
    type: 'submit',
    onClick: () => console.log('Submit'),
  },
};

export const Secondary: Story = {
  args: {
    text: 'Cancel',
    mode: 'secondary',
    disabled: false,
    onClick: () => console.log('Cancel'),
  },
};
