'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const deepLink = searchParams?.get('deepLink');

  useEffect(() => {
    if (deepLink) {
      window.location.href = deepLink;
    }
  }, [deepLink]);

  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>Redirecting...</h1>
      <p>If you are not redirected, <a href={deepLink as string}>click here</a>.</p>
    </div>
  );
};

const SuspensePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
};

export default SuspensePage;