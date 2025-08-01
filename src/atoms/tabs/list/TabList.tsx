import { TabButton } from '@atoms/tabs/button/TabButton';
import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicTabItem } from '@models';
import { getClassName, moveFocusOnElementById } from '@utils';
import React, { KeyboardEvent } from 'react';

import styles from './TabList.module.scss';

type ChopLogicTabListProps = {
  tabs: ChopLogicTabItem[];
  tabIds: string[];
  onTabSelect: (id: string) => void;
  selectedTabId: string;
  tabPanelIds: string[];
  mode: ChopLogicOrientationMode;
};

export const TabList: React.FC<ChopLogicTabListProps> = ({ tabs, onTabSelect, selectedTabId, tabPanelIds, mode, tabIds }) => {
  const listClass = getClassName([styles.tabList, { [styles.tabList__vertical]: mode === ChopLogicOrientationMode.Vertical }]);

  const handleListKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const currentFocusedTabIndex = tabIds.findIndex((id) => id === selectedTabId);

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp': {
        e.preventDefault();
        if (e.key === 'ArrowUp' && mode === ChopLogicOrientationMode.Horizontal) break;
        if (e.key === 'ArrowLeft' && mode === ChopLogicOrientationMode.Vertical) break;

        const previousTabIndex = currentFocusedTabIndex - 1 >= 0 ? currentFocusedTabIndex - 1 : tabIds.length - 1;
        const previousTabId = tabIds[previousTabIndex];
        if (previousTabId) {
          moveFocusOnElementById(previousTabId);
          onTabSelect(previousTabId);
        }
        break;
      }
      case 'ArrowRight':
      case 'ArrowDown': {
        e.preventDefault();
        if (e.key === 'ArrowDown' && mode === ChopLogicOrientationMode.Horizontal) break;
        if (e.key === 'ArrowRight' && mode === ChopLogicOrientationMode.Vertical) break;

        const nextTabIndex = currentFocusedTabIndex === tabIds.length - 1 ? 0 : currentFocusedTabIndex + 1;
        const nextTabId = tabIds[nextTabIndex];
        if (nextTabId) {
          moveFocusOnElementById(nextTabId);
          onTabSelect(nextTabId);
        }
        break;
      }
      default:
        break;
    }
  };

  return (
    <div role='tablist' onKeyDown={handleListKeyDown} className={listClass}>
      {tabs.map(({ id, title, disabled }, index) => {
        return (
          <TabButton
            key={id}
            title={title}
            onTabSelect={onTabSelect}
            tabId={id}
            isSelected={id === selectedTabId}
            isDisabled={disabled}
            tabPanelId={tabPanelIds[index]}
            mode={mode}
          />
        );
      })}
    </div>
  );
};
