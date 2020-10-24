import Head from 'next/head';
import Layout from '../src/components/Layout/Layout';


function Page() {
  return (
    <Layout home>
      <Head>
        <meta name="og:title" content='Jose Blanco' />
      </Head>
    </Layout>
  );
}


export default Page;
