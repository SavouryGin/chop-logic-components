import React, { KeyboardEvent } from 'react';
import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicTabItem, ChopLogicTheme } from '@models';
import { moveFocusOnElementById } from '@utils';

import { StyledTabList } from '../Tabs.styled';

import ChopLogicTabButton from './TabButton';

type ChopLogicTabListProps = {
  tabs: ChopLogicTabItem[];
  tabIds: string[];
  onTabSelect: (id: string) => void;
  selectedTabId: string;
  tabPanelIds: string[];
  mode: ChopLogicOrientationMode;
  theme: ChopLogicTheme;
};

const ChopLogicTabList: React.FC<ChopLogicTabListProps> = ({ tabs, onTabSelect, selectedTabId, tabPanelIds, mode, tabIds, theme }) => {
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
    <StyledTabList role='tablist' $mode={mode} onKeyDown={handleListKeyDown} $theme={theme}>
      {tabs.map(({ id, title, disabled }, index) => {
        return (
          <ChopLogicTabButton
            key={id}
            title={title}
            onTabSelect={onTabSelect}
            tabId={id}
            isSelected={id === selectedTabId}
            isDisabled={disabled}
            tabPanelId={tabPanelIds[index]}
            mode={mode}
            theme={theme}
          />
        );
      })}
    </StyledTabList>
  );
};

export default ChopLogicTabList;
