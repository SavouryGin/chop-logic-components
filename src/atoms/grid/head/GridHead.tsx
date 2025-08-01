import { GridHeaderCell } from '@atoms/grid/header-cell/HeaderCell.tsx';
import { SelectAllGridRowsCell } from '@atoms/grid/select-all-grid-rows-cell/SelectAllGridRowsCell.tsx';
import { ChopLogicGridColumn } from '@models';
import React from 'react';

import styles from './GridHead.module.scss';

type ChopLogicGridHeadProps = {
  columns: ChopLogicGridColumn[];
  gridId: string;
  selectable: boolean;
  isAllSelected: boolean;
  isAllCheckboxDisabled?: boolean;
  selectAll: () => void;
  deselectAll: () => void;
};

export const GridHead: React.FC<ChopLogicGridHeadProps> = ({
  columns,
  gridId,
  selectAll,
  deselectAll,
  selectable,
  isAllSelected,
  isAllCheckboxDisabled = false,
}) => {
  return (
    <thead className={styles.head}>
      <tr className={styles.head_row}>
        {selectable && (
          <SelectAllGridRowsCell
            isAllSelected={isAllSelected}
            disabled={isAllCheckboxDisabled}
            gridId={gridId}
            selectAll={selectAll}
            deselectAll={deselectAll}
          />
        )}
        {columns.map((column) => (
          <GridHeaderCell key={`${column.title}_${gridId}`} title={column.title} component={column.component} />
        ))}
      </tr>
    </thead>
  );
};
