import Head from 'next/head';
import Nav from '../components/Nav/Nav';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jose Blanco Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      </>
  )
}
