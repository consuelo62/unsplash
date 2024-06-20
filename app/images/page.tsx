import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import Header from './components/Header';
import { Routes } from '../lib/utils/routes';
import SearchedImages from './components/SearchedImages';

import styles from './page.module.css';
import PageLoader from '../components/loaders/PageLoader';

type Props = {
  searchParams: {
    query?: string;
  };
};

export default function ImagesPage({ searchParams: { query } }: Props) {
  if (!query) return redirect(Routes.home);

  return (
    <main className={styles.main}>
      <Header />
      <Suspense fallback={<PageLoader textContent="Loading images..." />}>
        <SearchedImages query={query} />
      </Suspense>
    </main>
  );
}
