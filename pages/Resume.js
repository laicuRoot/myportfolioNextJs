import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import React from 'react';
import {useState} from 'react';
import ProgressBar from '../components/Progressbar/ProgressBar';


export default function FirstPost() {
  const [isVisible, setVisible] = useState(false);

  const testData = [
    { bgcolor: "#6a1b9a", completed: 100, icon:'fab fa-html5 fa-2x' },
    { bgcolor: "#00695c", completed: 85, icon: 'fab fa-css3-alt fa-2x'},
    { bgcolor: "#ef6c00", completed: 80, icon: 'fab fa-js-square fa-2x' },
    { bgcolor: "#ef6c00", completed: 70, icon: 'fab fa-react fa-2x'}
  ];

  return (
    <>
      <Head>
        <title>Jose Blanco CV</title>
      </Head>

      <Layout>
        <div className='container mx-auto'>


              {isVisible ? (

                <div className='flex flex-wrap flex-row mt-5 mx-3'>

                  <div className='flex flex-row w-full justify-start'>
                    <div className='w-1/2 m-5'>
                      <h1> Jose Blanco </h1>
                      <h4> Front End Developer </h4>
                      <p>I am a motivated, ambitious, dedicated and enthusiastic individual who can work alone or as part of a team with more than 8 years of account management and business development experience. Able to take initiative, plan efficiently, and think out of the box in order to meet deadlines, and reach company targets. Willing to collaborate on projects to achieve common goals.</p>
                    </div>

                    <div className='w-1/2 m-5'>
                      <h1>My skills: </h1>
                      <div className='flex flex-col'>
                        {testData.map((item, idx) => (
                          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} icon={item.icon} style={item.style} />
                        ))}
                      </div>
                    </div>

                  </div>
                  
                </div>
              ) : (
                <>
                <div className='flex flex-row'>
                  <div className='w-1/2 mx-3 flex flex-col h-screen justify-center items-center'>
                    <h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'> Front End Developer </h1>
                    <button
                      className='rounded-full bg-gray-600 text-xl p-4'
                      onClick={() => setVisible(true)}
                    >Click here to see my journey</button>
                  </div>

                  <div className='flex h-screen justify-center items-center w-1/2 mx-3'>
                    <h3 className='text-3xl'>My Learning Journey</h3>
                  </div>
                </div>
                </>
                )

              }

        </div>
      </Layout>
      </>
  );
}