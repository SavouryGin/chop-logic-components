import { ChopLogicTheme } from '@models';

export const LIGHT_THEME: ChopLogicTheme = {
  // Colors
  fontColorBase: 'hsl(0, 0%, 24%)',
  fontColorLight: 'hsl(0, 0%, 62%)',
  fontColorAccent: 'hsl(345, 100%, 47%)',
  backgroundColorBase: 'hsl(0, 0%, 100%)',
  backgroundColorLight: 'hsl(0, 0%, 95%)',
  backgroundColorTransparent: 'hsla(0, 0%, 0%, 0.3)',
  // Gradients
  gradientShadow:
    'linear-gradient(to left, hsl(340deg 100% 16%) 0%, hsl(340deg 100% 32%) 8%, hsl(340deg 100% 32%) 92%, hsl(340deg 100% 16%) 100%)',
  // Fonts
  fontFamilyCore: 'Arial, Helvetica, sans-serif',
  fontFamilyMonospace: `'Courier New', Courier, monospace`,
  fontSizeBase: '1.2rem',
  fontSizeSmall: '0.8rem',
  fontSizeHeader: '2rem',
  // Units
  gapSmall: '0.25rem',
  gapMedium: '0.6rem',
  gapBig: '1rem',
  iconSize: '1.2rem',
  blockBorderRadius: '0.25rem',
  // Shadows
  boxShadow: 'hsla(0, 0%, 0%, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px hsla(0, 0%, 0%, 0.3)',
  // Borders
  borderBase: '1px solid hsl(0, 0%, 84%)',
  borderLight: '1px solid hsl(0, 0%, 89%)',
  borderAccent: '1px solid hsl(345, 100%, 47%)',
  borderOutline: '1px solid hsl(0, 0%, 24%)',
  // Z-indexes
  zIndexBase: '1',
  zIndexPopup: '100',
  zIndexModal: '200',
};

export const DARK_THEME: ChopLogicTheme = {
  // Colors
  fontColorBase: 'hsl(0, 0%, 100%)',
  fontColorLight: 'hsl(0, 0%, 92%)',
  fontColorAccent: 'hsl(16, 82%, 52%)',
  backgroundColorBase: 'hsl(0, 0%, 17%)',
  backgroundColorLight: 'hsl(0, 0%, 24%)',
  backgroundColorTransparent: 'hsla(0, 0%, 92%, 0.3)',
  // Gradients
  gradientShadow: 'linear-gradient(to left, hsl(16, 86%, 26%) 0%, hsl(16, 86%, 30%) 8%, hsl(16, 86%, 30%) 92%, hsl(16, 86%, 26%) 100%)',
  // Fonts
  fontFamilyCore: 'Arial, Helvetica, sans-serif',
  fontFamilyMonospace: `'Courier New', Courier, monospace`,
  fontSizeBase: '1.2rem',
  fontSizeSmall: '0.8rem',
  fontSizeHeader: '2rem',
  // Units
  gapSmall: '0.25rem',
  gapMedium: '0.6rem',
  gapBig: '1rem',
  iconSize: '1.2rem',
  blockBorderRadius: '0.25rem',
  // Shadows
  boxShadow: 'hsla(0, 0%, 92%, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px hsla(0, 0%, 92%, 0.3)',
  // Borders
  borderBase: '1px solid hsl(0, 0%, 11%)',
  borderLight: '1px solid hsl(0, 0%, 29%)',
  borderAccent: '1px solid hsl(16, 82%, 52%)',
  borderOutline: '1px solid hsl(0, 0%, 100%)',
  // Z-indexes
  zIndexBase: '1',
  zIndexPopup: '100',
  zIndexModal: '200',
};
