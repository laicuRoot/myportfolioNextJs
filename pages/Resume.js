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

  return (
    <>
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