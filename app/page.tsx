'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentWithSearchParams />
    </Suspense>
  );
}

function ComponentWithSearchParams() {
  const searchParams = useSearchParams();
  const deepLink = searchParams.get('deepLink');

  return <div>Deep Link: {deepLink}</div>;
}