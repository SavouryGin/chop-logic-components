import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import GridColumnGroup from '../elements/ColumnGroup';
import { ChopLogicGridColumn } from '../types';

const columns: ChopLogicGridColumn[] = [
  { title: 'Col 1', field: 'field1', highlighted: true },
  { title: 'Col 2', field: 'field2', className: 'column-class' },
  { title: 'Col 3', field: 'field3' },
];

describe('ChopLogicGridBody', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <table>
        <GridColumnGroup columns={columns} selectable />
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
