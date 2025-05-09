'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Invite() {
  const searchParams = useSearchParams();
  const deepLink = searchParams.get('deepLink');

  useEffect(() => {
    if (!deepLink) return;

    window.location.href = deepLink;

    const timeout = setTimeout(() => {
      window.location.href = 'https://yourapp.page.link/fallback';
    }, 2000);

    return () => clearTimeout(timeout);
  }, [deepLink]);

  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>Opening app ...</h1>
    </div>
  );
}