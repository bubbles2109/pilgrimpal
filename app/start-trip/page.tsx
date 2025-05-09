'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function StartTripPage() {
  const searchParams = useSearchParams();
  const secretCode = searchParams.get('secretCode');

  useEffect(() => {
    if (!secretCode) return;

    const deepLink = `pilgrimpal://start-trip-jemaah?secretCode=${secretCode}`;

    window.location.href = deepLink;

    const timeout = setTimeout(() => {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.pilgrimpal.dev';
    }, 2000);

    return () => clearTimeout(timeout);
  }, [secretCode]);

  return <div style={{ textAlign: 'center', marginTop: 100 }}>Opening app...</div>;
}