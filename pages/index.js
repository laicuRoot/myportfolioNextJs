import Head from 'next/head';
import Layout, {siteTitle} from '../components/Layout/Layout';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
      </Head>
    </Layout>
  );
}
