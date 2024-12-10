import { default as React } from '../../../../../node_modules/react';
import { ChopLogicTabItem, ChopLogicTheme } from '../../../../types';

declare const ChopLogicTabContent: React.FC<{
    tabs: ChopLogicTabItem[];
    selectedTabId: string;
    theme: ChopLogicTheme;
}>;
export default ChopLogicTabContent;