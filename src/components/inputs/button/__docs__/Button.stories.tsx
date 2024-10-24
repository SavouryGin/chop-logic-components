import type { Meta, StoryObj } from '@storybook/react';

import { ChopLogicIconName } from 'components/misc/icon/Icon';

import ButtonExample from './ButtonExample';

const meta: Meta<typeof ButtonExample> = {
  title: 'Inputs/Button',
  component: ButtonExample,
  args: {
    text: 'Button',
    type: 'button',
    icon: ChopLogicIconName.Copy,
    view: 'primary',
    disabled: false,
  },
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    icon: {
      control: 'select',
      options: Object.values(ChopLogicIconName),
    },
    view: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonExample>;

export const PrimaryButton: Story = {
  args: {
    text: 'Copy',
    view: 'primary',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false,
  },
};

export const SecondaryButton: Story = {
  args: {
    text: 'Learn more...',
    view: 'secondary',
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false,
  },
};

export const DangerButton: Story = {
  args: {
    text: 'Delete',
    view: 'danger',
    icon: ChopLogicIconName.Delete,
    type: 'button',
    disabled: false,
  },
};

export const IconButton: Story = {
  args: {
    view: 'icon',
    type: 'button',
    icon: ChopLogicIconName.Cancel,
    label: 'Cancel',
    disabled: false,
  },
};

export const DisabledButton: Story = {
  args: {
    text: 'Copy',
    view: 'primary',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: true,
  },
};
