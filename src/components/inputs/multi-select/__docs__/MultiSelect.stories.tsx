import type { Meta, StoryObj } from '@storybook/react';

import { MultiSelectValue } from '../MultiSelect';

import MultiSelectExample from './MultiSelectExample';

const MULTI_SELECT_VALUES: MultiSelectValue[] = [
  { id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7', label: 'English', selected: false },
  { id: '583e8b60-0177-4e38-a423-4b1d5d0a2236', label: 'Spanish', selected: false },
  { id: 'b20bea7b-8172-4d12-b172-d5feac02d863', label: 'French', selected: false },
  { id: '641fc722-af5a-4426-8f8a-1566cc492b91', label: 'German', selected: false },
];

const meta: Meta<typeof MultiSelectExample> = {
  title: 'Inputs/MultiSelect',
  component: MultiSelectExample,
};

export default meta;
type Story = StoryObj<typeof MultiSelectExample>;

export const Default: Story = {
  args: {
    id: 'example-multiselect',
    name: 'languages',
    label: 'Select Languages',
    values: MULTI_SELECT_VALUES,
    placeholder: 'Select languages',
    onSelectChange: (values) =>
      console.log(
        `Selected ${values
          ?.filter((item) => item.selected)
          .map((value) => value.label)
          .join(', ')}`,
      ),
    required: true,
    disabled: false,
  },
};
