import Head from 'next/head';
import Layout from '../src/components/Layout/Layout';


function Home() {
  return (
    <Layout home>
      <Head>
        <meta name="og:title" content={siteTitle} />
      </Head>
    </Layout>
  );
}


export default Home();
