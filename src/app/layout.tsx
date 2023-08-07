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
