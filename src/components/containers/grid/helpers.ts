import { GridColumn, GridItem } from './types';

export function getGridRowValues({
  item,
  columns,
  renderDataItem,
}: {
  item: GridItem;
  columns: GridColumn[];
  renderDataItem?: (item: GridItem) => JSX.Element;
}): (string | JSX.Element)[] {
  const values = [];
  for (const column of columns) {
    let value;

    if (!column?.field || item[column.field] === null || item[column.field] === undefined) {
      value = '';
    } else if (typeof item[column.field] === 'object' && !!renderDataItem) {
      value = renderDataItem(item);
    } else if (typeof item[column.field] === 'object' && !renderDataItem) {
      value = '';
    } else {
      value = (item[column.field] as string).toString();
    }

    values.push(value);
  }

  return values;
}