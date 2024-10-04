import { getGridRowValues } from '../helpers';
import { GridColumn, GridItem } from '../types';

import GridRow from './Row';

type ChopLogicGridBodyProps = {
  data: GridItem[];
  columns: GridColumn[];
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  selectable: boolean;
};

const ChopLogicGridBody: React.FC<ChopLogicGridBodyProps> = ({ selectRowById, deselectRowById, selectable, data, columns }) => {
  return (
    <tbody>
      {data.map((item) => {
        const values = getGridRowValues({ item, columns });
        return (
          <GridRow
            key={item.id}
            rowId={item.id}
            selectRowById={selectRowById}
            deselectRowById={deselectRowById}
            selectable={selectable}
            values={values}
          />
        );
      })}
    </tbody>
  );
};

export default ChopLogicGridBody;
