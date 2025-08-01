/// <reference types="vitest" />
import * as path from 'node:path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { coverageConfigDefaults } from 'vitest/config';

import { peerDependencies } from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts', // Specifies the entry point for building the library.
      name: 'chop-logic-components', // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@elements', replacement: path.resolve(__dirname, 'src/elements') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@enums', replacement: path.resolve(__dirname, 'src/enums') },
      { find: '@models', replacement: path.resolve(__dirname, 'src/models') },
      { find: '@contexts', replacement: path.resolve(__dirname, 'src/contexts') },
      { find: '@icons', replacement: path.resolve(__dirname, 'src/icons') },
      { find: '@hocs', replacement: path.resolve(__dirname, 'src/hocs') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@atoms', replacement: path.resolve(__dirname, 'src/atoms') },
      { find: '@molecules', replacement: path.resolve(__dirname, 'src/molecules') },
      { find: '@organisms', replacement: path.resolve(__dirname, 'src/organisms') },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup-tests.ts',
    coverage: {
      exclude: [
        '**/docs/**',
        '**/__docs__/**',
        '**/models/**',
        '**.config.js',
        '**/storybook-static/**',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
