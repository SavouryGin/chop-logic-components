import styled from 'styled-components';

import { ChopLogicTheme } from '@/types';

export const Styled3DButton = styled.button<{ $extended: boolean; $theme: ChopLogicTheme }>`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;
  transition: filter 250ms;
  width: ${(props) => (props.$extended ? '100%' : 'inherit')};

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  .chop-logic-button_shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.$theme.blockBorderRadius};
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .chop-logic-button_edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.$theme.blockBorderRadius};
    background: ${(props) => props.$theme.primaryGradient};
  }

  .chop-logic-button_front {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.$theme.smallGap};
    position: relative;
    padding: ${(props) => `${props.$theme.mediumGap} ${props.$theme.bigGap}`};
    border-radius: ${(props) => props.$theme.blockBorderRadius};
    font-size: ${(props) => props.$theme.baseFontSize};
    color: ${(props) => props.$theme.backgroundColor};
    background: ${(props) => props.$theme.secondaryColor};
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  &:hover {
    filter: brightness(110%);
  }

  &:hover .chop-logic-button_front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .chop-logic-button_front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:hover .chop-logic-button_shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .chop-logic-button_shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  &:focus-visible {
    outline: revert;
    outline: ${(props) => props.$theme.outlineBorder};
    outline-offset: 4px;
  }
`;

export const StyledFlatButton = styled.button<{ $extended: boolean; $theme: ChopLogicTheme }>`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.$theme.smallGap};
  padding: ${(props) => `${props.$theme.mediumGap} ${props.$theme.bigGap}`};
  border-radius: ${(props) => props.$theme.blockBorderRadius};
  font-size: ${(props) => props.$theme.baseFontSize};
  color: ${(props) => props.$theme.secondaryColor};
  background: transparent;
  width: ${(props) => (props.$extended ? '100%' : 'inherit')};

  &:hover,
  &:active {
    filter: brightness(110%);
    color: ${(props) => props.$theme.backgroundColor};
    background: ${(props) => props.$theme.secondaryColor};
    transition: all 0.3s ease 0s;
  }

  &:focus-visible {
    outline: ${(props) => props.$theme.outlineBorder};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const StyledIconButton = styled.button<{ $theme: ChopLogicTheme }>`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.$theme.mediumGap};
  border-radius: ${(props) => props.$theme.blockBorderRadius};
  font-size: ${(props) => props.$theme.baseFontSize};
  color: ${(props) => props.$theme.primaryColor};
  background: transparent;

  &:hover {
    filter: drop-shadow(${(props) => props.$theme.textShadow});
    color: ${(props) => props.$theme.secondaryColor};
    transition: all 0.3s ease 0s;
  }

  &:focus-visible {
    outline: ${(props) => props.$theme.outlineBorder};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  svg {
    height: ${(props) => props.$theme.iconSize};
    width: ${(props) => props.$theme.iconSize};
  }
`;
