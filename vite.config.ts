//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

/// <reference types="vitest" />
/// <reference types="vite/client" />
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  root: '.',
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@stanfordspezi/spezi-web-health-components',
      fileName: (format) => `web-health-components.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./testSetup.ts'],
    server: {
      deps: {
        inline: ['@stanfordspezi/spezi-web-design-system'],
      },
    },
  },
})
