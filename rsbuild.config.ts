import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    swc: {
      jsc: {
        transform: {
          react: {
            runtime: 'classic',
          },
        },
      },
    },
  },
});
