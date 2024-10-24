import type { Meta, StoryObj } from '@storybook/react';

import GridExample from './GridExample';

const meta: Meta<typeof GridExample> = {
  title: 'Containers/Grid',
  component: GridExample,
};

export default meta;

type Story = StoryObj<typeof GridExample>;

export const DefaultGrid: Story = {
  args: {
    selectable: false,
    renderDataItem: (item, field) => <em>{item[field ?? ''] as string}</em>,
    caption: 'Contact List',
    columns: [
      { title: 'Company', field: 'company' },
      { title: 'Contact', field: 'contact' },
      { title: 'Country', field: 'country' },
      { title: 'Phone', field: 'phone' },
    ],
    data: [
      { id: 'row1', company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany', phone: '123-345-7890' },
      { id: 'row2', company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico', phone: '123-345-7890' },
      { id: 'row3', company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria', phone: '123-345-7890' },
      { id: 'row4', company: 'Island Trading', contact: 'Helen Bennett', country: 'UK', phone: '123-345-7890' },
      { id: 'row5', company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada', phone: '123-345-7890' },
      { id: 'row6', company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy', phone: '123-345-7890' },
    ],
  },
};

export const SelectableGrid: Story = {
  args: {
    selectable: true,
    onSelect: (ids: string[]) => console.log(ids),
    columns: [
      { title: 'Company', field: 'company', highlighted: true },
      { title: 'Contact', field: 'contact' },
      { title: 'Country', field: 'country' },
      { title: 'Phone', field: 'phone' },
    ],
    data: [
      { id: 'row1', company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany', phone: '123-345-7890' },
      { id: 'row2', company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico', phone: '123-345-7890' },
      { id: 'row3', company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria', phone: '123-345-7890' },
      { id: 'row4', company: 'Island Trading', contact: 'Helen Bennett', country: 'UK', phone: '123-345-7890' },
      { id: 'row5', company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada', phone: '123-345-7890' },
      { id: 'row6', company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy', phone: '123-345-7890' },
    ],
  },
};
