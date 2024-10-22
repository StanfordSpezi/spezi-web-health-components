export declare const colorNameToTailwindVar: (colorName: string, alpha?: boolean) => string;
/**
 * Tailwind's theme colors
 * Uses light theme to get keys, but these are just CSS variable references
 * */
export declare const tailwindColors: {
    [k: string]: string;
};
/**
 * Converts theme object to CSS variables
 * @example themeToCSSVariables({ black: '0 0 0' }) => `--black: 0 0 0;`
 * */
export declare const themeToCSSVariables: (theme: Record<string, unknown>) => string;
