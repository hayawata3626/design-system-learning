## 概要

github の npm レジストリを利用して配布した[デザイントークン](https://github.com/hayawata3626/design-token-transformer/pkgs/npm/design-token-transformer)を利用

`package.json`
以下利用するデザイントークン

```json
  "dependencies": {
    "@hayawata3626/design-token-transformer": "^0.6.0",
```

## `.npmrc`の作成

package.json と同じ階層に作成

```
//npm.pkg.github.com/:_authToken=xxxxxxxxxxxxxxxxxxxxxxxxx
@hayawata3626:registry=https://npm.pkg.github.com
```

## インストール

```
npm install
```

## 起動

ローカルサーバー起動

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## style から theme を参照している部分

`src/styles/style.ts`

```typescript
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

export const Wrapper = styled.section`
  color: ${(props) => {
    return props.theme.desintokens.primay.value;
  }};
  margin: ${(props) => {
    return `${props.theme.desintokens.spacing.xxl.value}px`;
  }};
  padding: 4em;
`;
```

## theme を設定

```tsx
'use client';
import './globals.css';
import { ThemeProvider } from 'styled-components';
import theme from '@hayawata3626/design-token-transformer/build/js/tokens';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
```
