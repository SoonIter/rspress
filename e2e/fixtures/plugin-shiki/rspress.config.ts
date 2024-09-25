import path from 'node:path';
import { defineConfig } from 'rspress/config';
import {
  createTransformerDiff,
  createTransformerErrorLevel,
  createTransformerFocus,
  createTransformerHighlight,
  createTransformerLineNumber,
  pluginShiki,
} from '@rspress/plugin-shiki';

export default defineConfig({
  root: path.join(__dirname, 'doc'),
  plugins: [
    pluginShiki({
      transformers: [
        createTransformerDiff(),
        createTransformerLineNumber(),
        createTransformerErrorLevel(),
        createTransformerHighlight(),
        createTransformerFocus(),
      ],
    }),
  ],
});
