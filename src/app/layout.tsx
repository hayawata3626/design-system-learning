'use client';
import theme from '@/tokens/tokens';
import './globals.css';
import { ThemeProvider } from 'styled-components';

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
