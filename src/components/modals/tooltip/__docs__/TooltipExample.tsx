import React from 'react';
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
        {visibleOn === 'click' && <button>Click me</button>}
        {visibleOn === 'hover' && <span>Hover over me</span>}
        {visibleOn === 'focus' && <p>Focus on me</p>}
        {visibleOn === 'contextmenu' && <strong>Right click on me</strong>}
      </ChopLogicTooltip>
    </div>
  );
};

export default TooltipExample;
