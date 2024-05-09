import type { Meta, StoryObj } from '@storybook/react';
import ExampleButton from './Example';

const meta: Meta<typeof ExampleButton> = {
  title: 'Button',
  component: ExampleButton,
};

export default meta;
type Story = StoryObj<typeof ExampleButton>;

export const Primary: Story = {
  args: {
    text: 'Submit',
    view: 'primary',
    disabled: false,
    onClick: () => console.log('Submit'),
  },
};

export const Secondary: Story = {
  args: {
    text: 'Cancel',
    view: 'secondary',
    disabled: false,
    onClick: () => console.log('Cancel'),
  },
};
