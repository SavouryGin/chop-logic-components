import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormExample } from './Form.example.tsx';

const meta: Meta<typeof FormExample> = {
  args: {
    columns: 2,
    hasReset: true,
    initialValues: {
      firstName: 'John',
      lastName: 'Doe',
      age: 42,
    },
    onClickSubmit: (data) => console.log(data),
  },
  component: FormExample,
  title: 'Organisms/Form',
};

export default meta;

type Story = StoryObj<typeof FormExample>;

export const Example: Story = {};
