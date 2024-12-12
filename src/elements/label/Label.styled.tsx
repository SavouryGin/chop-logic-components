import styled from 'styled-components';

import { ChopLogicTheme } from '@/types';

export const StyledLabel = styled.label<{ $theme: ChopLogicTheme }>`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.$theme.fontSizeSmall};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  gap: ${(props) => props.$theme.gapMedium};
  color: ${(props) => props.$theme.fontColorBase};

  & + span {
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & abbr {
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.$theme.fontColorAccent};
  }
`;
