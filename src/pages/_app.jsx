// pages/_app.js
import { appWithTranslation } from 'next-i18next';
import '../App.css'; // Import global CSS here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
