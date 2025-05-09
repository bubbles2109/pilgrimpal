import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const { deepLink } = router.query;  // lấy deepLink từ query params

  useEffect(() => {
    if (deepLink) {
      // Chuyển hướng đến deep link
      window.location.href = deepLink as string;
    }
  }, [deepLink]);

  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>Redirecting...</h1>
      <p>If you are not redirected, <a href={deepLink as string}>click here</a>.</p>
    </div>
  );
};

export default Page;