import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import React from 'react';
// import ProgressBar from '../components/Progressbar/ProgressBar';
import styles from '../styles/utils.module.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



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
            <div className='inline-flex m-1 justify-evenly w-full'>
              <span className='m-1'>React</span>
              <span className='m-1'>NextJS</span>
              <span className='m-1'>HTML</span>
              <span className='m-1'>CSS</span>
              <span className='m-1'>TailWind CSS</span>
            </div>
          </div>
      </Layout>
      </>
  );
}