import React from 'react';
import App from '../src/App';
import '../src/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <App />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
