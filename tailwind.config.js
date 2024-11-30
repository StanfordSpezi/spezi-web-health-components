//
// This source file is part of the Stanford Biodesign Digital Health Spezi Web Health Components open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//
import tailwindCssAnimate from 'tailwindcss-animate'
import { tailwindColors } from '@stanfordspezi/spezi-web-design-system/utils/tailwind'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@stanfordspezi/spezi-web-design-system/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: tailwindColors,
    },
  },
  plugins: [tailwindCssAnimate],
}
