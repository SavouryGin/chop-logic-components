import { default as React } from '../../../../../node_modules/react';
import { ChopLogicGridColumn, ChopLogicTheme } from '../../../../types';

type ChopLogicGridHeadProps = {
    columns: ChopLogicGridColumn[];
    gridId: string;
    selectable: boolean;
    isAllSelected: boolean;
    isAllCheckboxDisabled?: boolean;
    selectAll: () => void;
    deselectAll: () => void;
    theme: ChopLogicTheme;
};
declare const ChopLogicGridHead: React.FC<ChopLogicGridHeadProps>;
export default ChopLogicGridHead;