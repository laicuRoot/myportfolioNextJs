import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import React from 'react';
import NavResume from '../components/NavResume/NavResume';
import Skills from '../components/Skills/Skills'



export default function FirstPost() {

  // const testData = [
  //   { bgcolor: "#6a1b9a", completed: 100, icon:'fab fa-html5 fa-2x' },
  //   { bgcolor: "#00695c", completed: 100, icon: 'fab fa-css3-alt fa-2x'},
  //   { bgcolor: "#ef6c00", completed: 90, icon: 'fab fa-js-square fa-2x' },
  //   { bgcolor: "#ef6c00", completed: 70, icon: 'fab fa-react fa-2x'}
  // ];

  return (
    <>
      <Head>
        <title>Jose Blanco CV</title>
      </Head>

      <Layout>
        <div className='container mx-auto'>
          <NavResume />
          <Skills/>
        </div>
      </Layout>
      </>
  );
}