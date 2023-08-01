## 概要

[Figma Tokens](https://www.figma.com/community/plugin/843461159747178978/Tokens-Studio-for-Figma-(Figma-Tokens))から生成したデザイントークン(`data/tokens.json`)をstyled-componentsのthemeに反映させたテンプレート。


## 起動

ローカルサーバー起動

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## デザイントークン(json)からエイリアス参照している部分をなくす

```
npx token-transformer data/tokens.json(生成元になるファイル) data/output.json(生成後のファイル)
```

## 上記のoutput.jsonからtheme(型定義を含む)を生成

```
npm run gen:theme
```

## styleからthemeを参照している部分

`src/styles/style.ts`
```typescript
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.pink[300].value};
`;

export const Wrapper = styled.section`
  color: ${(props) => props.theme.colors.green[300].value};
  padding: 4em;
  background: ${(props) => props.theme.colors.gray[100].value};
`;
```