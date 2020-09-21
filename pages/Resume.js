import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import React from 'react';
import {useState} from 'react'

export default function FirstPost() {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Jose Blanco CV</title>
      </Head>

      <Layout>
        <div class='container mx-auto'>
          <div class='flex flex-row'>
            <div className='w-1/2 mx-3 mt-3 text-center'>
              <h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'> Front End Developer </h1>
              <button 
              className='rounded-full bg-gray-600 text-xl p-4'
              onClick={() => setVisible(true)}
              >Click here to see my journey</button>
            </div>
            
              {isVisible ? (

                <div className='w-1/2 mx-3 text-center mt-3'>
                  <i className="fab fa-npm fa-5x"></i>
                  <i className="fab fa-react fa-5x"></i>
                  <i className="fab fa-node fa-5x"></i>
                  <i className="fab fa-js fa-5x"></i>
                </div>

              ) : (
                <div className='w-1/2 mx-3 text-center mt-3'>
                  Nothing to show
                </div>
                )

              }
            </div>
        </div>
      </Layout>
      </>
  );
}