import tokens from '../tokens/tokens';
import styleTheme from '../tokens/tokens';

export type MyTheme = typeof tokens;

export const theme: typeof tokens = styleTheme;
