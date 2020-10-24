import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout/Layout';
import NavResume from '../src/components/NavResume/NavResume';
import Skills from '../src/components/Skills/Skills';
import Experience from '../src/components/Experience/Experience';
import Education from '../src/components/Education/Education';
import experiences from '../experience';
import education from '../education';



export default function Page() {

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
          <Experience experiences={experiences} />
          <Education titulations={education}/>
        </div>
      </Layout>
      </>
  );
}