import { Suspense } from 'react';
import StartTripClient from './start-trip-client';

export default function StartTripPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StartTripClient />
    </Suspense>
  );
}