import Head from 'next/head';
import Link from 'next/link';

export default function Project(){
  return (
    <>
      <Head>
        <title>Jose Blanco Projects</title>
      </Head>
      <h1>Projects site</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </>
  );
}