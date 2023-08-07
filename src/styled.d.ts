import 'styled-components';
import theme from '@hayawata3626/design-token-transformer/build/js/tokens';

type MyTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}
