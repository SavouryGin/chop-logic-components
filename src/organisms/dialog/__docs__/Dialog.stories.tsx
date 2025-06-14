import type { Meta, StoryObj } from '@storybook/react-vite';

import DialogExample from './Dialog.example';

const meta: Meta<typeof DialogExample> = {
  component: DialogExample,
  title: 'Organisms/Dialog',
};

export default meta;
type Story = StoryObj<typeof DialogExample>;

export const Example: Story = {
  args: {
    isOpened: false,
    onClose: () => console.log('Dialog closed'),
    title: 'Example Dialog',
  },
};
