// pages/index.js

import App from '.././App'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage = () => {
  return <App />;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default HomePage;
