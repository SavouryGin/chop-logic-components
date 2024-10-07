import { useState } from 'react';
import { useElementIds } from 'hooks/use-element-ids';

import ChopLogicGridBody from './elements/Body';
import ChopLogicGridHead from './elements/Head';
import { ChopLogicGridProps } from './types';

const ChopLogicGrid: React.FC<ChopLogicGridProps> = ({ columns, data, id, onSelect, selectable = false }) => {
  const { elementId } = useElementIds(id);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const allIds = data.map((item) => item.id);
  const isAllSelected = allIds.length === selectedIds.length;
  const isAllCheckboxDisabled = data.some((item) => item?.disabled);

  const handleSelect = (ids: string[]) => {
    setSelectedIds(ids);
    onSelect?.(ids);
  };

  const handleSelectAll = () => {
    handleSelect(allIds);
  };

  const handleDeselectAll = () => {
    handleSelect([]);
  };

  const handleSelectRowById = (id: string) => {
    const newIds = [...selectedIds, id];
    handleSelect(newIds);
  };

  const handleDeselectRowById = (id: string) => {
    const newIds = selectedIds.filter((item) => item !== id);
    handleSelect(newIds);
  };

  return (
    <table>
      <ChopLogicGridHead
        gridId={elementId}
        columns={columns}
        selectable={selectable}
        selectAll={handleSelectAll}
        deselectAll={handleDeselectAll}
        isAllSelected={isAllSelected}
        isAllCheckboxDisabled={isAllCheckboxDisabled}
      />
      <ChopLogicGridBody
        columns={columns}
        data={data}
        selectable={selectable}
        selectRowById={handleSelectRowById}
        deselectRowById={handleDeselectRowById}
        selectedIds={selectedIds}
      />
    </table>
  );
};

export default ChopLogicGrid;
