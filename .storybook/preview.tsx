import type { Preview } from '@storybook/react-vite';
import { Decorator } from '@storybook/react-vite';
import { ChopLogicThemeProvider } from '../src/contexts';
import { ChopLogicThemeMode } from '../src/enums';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'dark', value: '#2E1F27' },
        light: { name: 'light', value: '#FFFFFF' },
      },
    },
    initialGlobals: {
      backgrounds: { value: 'light' },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Theming', 'Contributing', 'Changelog', 'Atoms', 'Molecules', 'Organisms', 'Hooks', '*'],
      },
    },
  },

  tags: ['autodocs'],
};

const STORY_WRAPPER_STYLES = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  margin: '1rem 0',
};

const withTheme: Decorator = (StoryFn, context) => {
  const { backgrounds } = context.globals;
  const background = backgrounds?.value ?? 'light';
  const storybookMode = background === 'dark' ? ChopLogicThemeMode.Dark : ChopLogicThemeMode.Light;

  return (
    <ChopLogicThemeProvider injectedMode={storybookMode}>
      <div style={{ ...STORY_WRAPPER_STYLES }}>
        <StoryFn />
      </div>
    </ChopLogicThemeProvider>
  );
};

export const decorators = [withTheme];

export default preview;
