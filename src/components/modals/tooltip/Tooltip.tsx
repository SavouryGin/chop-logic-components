import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import { PropsWithChildren, useRef, useState } from 'react';
import ChopLogicPortal from 'components/elements/portal/Portal';
import { useTooltipPosition } from 'hooks/use-tooltip-position';
import { useKeyPress } from 'hooks/use-key-press';
import { useClickOutside } from 'hooks/use-click-outside';

export type ChopLogicTooltipProps = PropsWithChildren &
  React.HTMLAttributes<HTMLElement> & {
    tooltipContent: string | React.ReactElement;
    id: string;
    containerTag?: 'span' | 'div' | 'p' | 'strong' | 'em';
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
  };

const ChopLogicTooltip: React.FC<ChopLogicTooltipProps> = ({
  className,
  children,
  tooltipContent,
  containerTag = 'span',
  visibleOn = 'hover',
  id,
  ...rest
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { top, left } = useTooltipPosition({ wrapperRef, tooltipRef, isOpened });
  const ContainerComponent = containerTag;
  const tooltipClass = createClassName([className, styles.tooltip]);

  const closeTooltip = () => setIsOpened(false);
  const openTooltip = () => setIsOpened(true);
  const toggleTooltip = () => setIsOpened(!isOpened);
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleTooltip();
  };

  useKeyPress({ keyCode: 'Escape', ref: tooltipRef, onKeyPress: closeTooltip });
  useClickOutside({ ref: tooltipRef, onClickOutsideHandler: closeTooltip, dependentRef: wrapperRef });

  return (
    <ContainerComponent
      className={styles.container}
      onClick={visibleOn === 'click' ? toggleTooltip : undefined}
      onMouseOver={visibleOn === 'hover' ? openTooltip : undefined}
      onMouseLeave={visibleOn === 'hover' ? closeTooltip : undefined}
      onFocus={visibleOn === 'focus' ? openTooltip : undefined}
      onBlur={visibleOn === 'focus' ? closeTooltip : undefined}
      onContextMenu={visibleOn === 'contextmenu' ? (e) => handleContextMenu(e) : undefined}
      tabIndex={0}
      {...rest}
      ref={wrapperRef}
      aria-describedby={id}
    >
      {children}
      {isOpened && (
        <ChopLogicPortal>
          <div className={tooltipClass} style={{ top: top, left: left }} ref={tooltipRef} role='tooltip' id={id}>
            {tooltipContent}
          </div>
        </ChopLogicPortal>
      )}
    </ContainerComponent>
  );
};

export default ChopLogicTooltip;
