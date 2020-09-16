import Head from 'next/head';
import Layout from '../components/Layout/Layout';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Jose Blanco CV</title>
      </Head>
        <header className='flex-col md:flex-row flex items-center md:justify-between mt-5 mb-5 md:mb-3'>
          <h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'> Front End Developer </h1>
        </header>
        <section className='container mx-auto'>

          <div className='flex flex-row text-center flex-wrap p-2 space-x-2 w-full justify-center'>
            <div className='mb-4 text-lg leading-tight'><span>HTML & CSS /</span></div>
            <div className='mb-4 text-lg leading-tight'><span>JAVASCRIPT /</span></div>
            <div className='mb-4 text-lg leading-tight'><span>REACT /</span></div>
            <div className='mb-4 text-lg leading-tight'><span>NEXT.JS/</span></div>
            <div className='mb-4 text-lg leading-tight'><span>NPM </span></div>
          </div>

          <div className='flex flex-row text-center flex-wrap justify-items-center p-2 space-x-2 w-full justify-center'>
            <div className='mb-4 text-lg leading-tight'><i className="fab fa-github fa-5x"></i></div>
            <div className='mb-4 text-lg leading-tight'><i className="fab fa-js fa-5x"></i></div>
            <div className='mb-4 text-lg leading-tight'><i className="fab fa-npm fa-5x"></i></div>
            <div className='mb-4 text-lg leading-tight'><i className="fab fa-react fa-5x"></i></div>
            <div className='mb-4 text-lg leading-tight'><i className="fab fa-node fa-5x"></i></div>
          </div>
        </section>
      </>
  );
}