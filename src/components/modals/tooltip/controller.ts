import React, { useRef, useState } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import { useElementIds } from 'hooks/use-element-ids';
import { useKeyPress } from 'hooks/use-key-press';
import { useTooltipPosition } from 'hooks/use-tooltip-position';

export const useChopLogicTooltipController = ({ id }: { id?: string }) => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { top, left } = useTooltipPosition({ wrapperRef, tooltipRef, isOpened });
  const { elementId } = useElementIds(id);

  const closeTooltip = () => setIsOpened(false);
  const openTooltip = () => setIsOpened(true);
  const toggleTooltip = () => setIsOpened(!isOpened);
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleTooltip();
  };

  useKeyPress({ keyCode: 'Escape', ref: tooltipRef, onKeyPress: closeTooltip });
  useClickOutside({ ref: tooltipRef, onClickOutsideHandler: closeTooltip, dependentRef: wrapperRef });

  return {
    elementId,
    openTooltip,
    closeTooltip,
    toggleTooltip,
    handleContextMenu,
    top,
    left,
    isOpened,
    wrapperRef,
    tooltipRef,
  };
};
