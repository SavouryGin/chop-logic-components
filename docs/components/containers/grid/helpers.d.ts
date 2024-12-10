import { default as React } from '../../../../node_modules/react';
import { ChopLogicGridColumn, ChopLogicGridItem, RenderDataItemCallback } from '../../../types';

export declare function getGridRowValues({ item, columns, renderDataItem, }: {
    item: ChopLogicGridItem;
    columns: ChopLogicGridColumn[];
    renderDataItem?: RenderDataItemCallback;
}): (string | React.ReactElement)[];