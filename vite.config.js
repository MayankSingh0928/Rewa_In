import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    {
      name: 'transform-js-as-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (!/src[\\/].*\.js$/.test(id)) {
          return null;
        }

        return transformWithEsbuild(code, id, {
          jsx: 'automatic',
          loader: 'jsx',
        });
      },
    },
    react({ include: /\.(js|jsx)$/ }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
