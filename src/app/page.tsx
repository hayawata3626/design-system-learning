'use client';
import styles from './page.module.css';
import { Title, Wrapper } from '@/styles/style';

export default function Home() {
  return (
    <main className={styles.main}>
      <Title>test title</Title>
      <Wrapper>test</Wrapper>
    </main>
  );
}
