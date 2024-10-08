import React from 'react';

import { ChopLogicButton } from 'components/index';

import ChopLogicTooltip, { ChopLogicTooltipProps } from '../Tooltip';

const TooltipExample: React.FC<ChopLogicTooltipProps> = ({ tooltipContent, containerTag, visibleOn, id }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <ChopLogicTooltip tooltipContent={tooltipContent} containerTag={containerTag} visibleOn={visibleOn} id={id}>
        {visibleOn === 'click' && <ChopLogicButton text='Click me' />}
        {visibleOn === 'hover' && <span>Hover over me</span>}
        {visibleOn === 'focus' && <p>Focus on me</p>}
        {visibleOn === 'contextmenu' && <strong>Right click on me</strong>}
      </ChopLogicTooltip>
    </div>
  );
};

export default TooltipExample;
