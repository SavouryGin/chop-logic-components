import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledDotsLoader = styled.span<{ $theme: ChopLogicTheme }>`
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: dotsFadeOutAnimation 1.8s infinite ease-in-out;
  color: ${(props) => props.$theme.fontColorLight};
  font-size: 7px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: dotsFadeOutAnimation 1.8s infinite ease-in-out;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }

  &:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }

  &:after {
    left: 3.5em;
  }

  @keyframes dotsFadeOutAnimation {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;
