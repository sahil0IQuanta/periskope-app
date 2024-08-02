// pages/_app.js

import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css'; // Apne global CSS file ko import karein

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Google Fonts ko dynamically import karein
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Your App Title</title>
        {/* Any other <head> elements */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
