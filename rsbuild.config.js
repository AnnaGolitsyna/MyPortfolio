// @ts-check
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  html: {
    favicon: './public/favicon.png',
    title: 'Nik Holitsyn - Portfolio',
  },
  plugins: [pluginReact()],
  tools: {
    postcss: (config) => {
      config.postcssOptions = {
        plugins: ['@tailwindcss/postcss', 'autoprefixer'],
      };
      return config;
    },
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
  },
});
