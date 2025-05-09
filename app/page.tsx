import { Suspense } from 'react';
import StartTripPage from './start-trip/page';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StartTripPage />
    </Suspense>
  );
}