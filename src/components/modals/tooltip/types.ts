import { PropsWithChildren } from 'react';
import { CommonComponentProps } from 'utils/types';

export type ChopLogicTooltipProps = PropsWithChildren &
  CommonComponentProps & {
    tooltipContent: string | React.ReactElement;
    containerTag?: TooltipContainerTag;
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
  };

export type TooltipContainerTag = 'span' | 'div' | 'p' | 'strong' | 'em';
