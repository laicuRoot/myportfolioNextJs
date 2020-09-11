import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/Layout/Layout';
import utilStyles from '../styles/utils.module.css';


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
