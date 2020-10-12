import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import React from 'react';
// import ProgressBar from '../components/Progressbar/ProgressBar';
import styles from '../styles/utils.module.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';



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
            <div className='block mt-5 mx-3'>
              <h1 className='text-5xl font-bold text-center text-gray-800'> About me </h1>
              <p className='text-lg text-left p-5'>I am a motivated, ambitious, dedicated and enthusiastic individual who can work alone or as part of a team with more than 8 years of account management and business development experience. Able to take initiative, plan efficiently, and think out of the box in order to meet deadlines, and reach company targets. Willing to collaborate on projects to achieve common goals.</p>
            </div>
            {/* <div className=' m-5'>
              <h1>My skills: </h1>
              <div className='flex flex-col'>
                {testData.map((item, idx) => (
                  <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} icon={item.icon} style={item.style} />
                ))}
              </div> */}
              <div className='block mt-5 mx-3 text-center'>
                <h1 className='text-5xl font-bold text-center text-gray-800'>Work Experience & Education</h1>
              </div>
              <VerticalTimeline className={`${styles.verticalcustomeline}`}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work text-xl"
                  contentStyle={{ 
                    color: 'black'
                    }}
                  contentArrowStyle={{ borderRight: '15px solid rgba(74, 85, 104)' }}
                  date="March 2018 - present"
                  position={'left'}
                  iconStyle={{ background: 'black', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <h3 className="text-2xl">Market manager</h3>
                  <h4 className="text-xl">London, UK</h4>
                  <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Expedia_Group_logo.svg/1280px-Expedia_Group_logo.svg.png' alt='logo' />
                  <p>Helping Expedia to develop and maintain a high quality portfolio of partners and property products including strategic partnerships with large groups like IHG, Melia or Hilton. Helping partners to maximise the produc&on potential by using data insights, marketing, distribution and revenue management toolset.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{ color: 'black' }}
                  contentArrowStyle={{ borderRight: '15px solid rgba(74, 85, 104)' }}
                  date="Oct 2019 - January 2020"
                  position={'right'}
                  iconStyle={{ background: 'black', color: '#fff' }}
                  icon={<SchoolIcon />}
                >
                  <h3 className="text-2xl m-1">Frontend Development - Udacity</h3>
                  <h4 className="text-xl m-1">Nanodegree</h4>
                  <Chip label={'HTML'} />
                  <Chip label={'CSS'} />
                  <Chip label={'JAVASCRIPT'} />
                  <Chip label={'NODE JS'} />
                  <Chip label={'WEBPACK'} />
                  <Chip label={'EXPRESS JS'} />
                  <img src='https://lh3.googleusercontent.com/proxy/dbjMLg6q8peINZ5IVPp5zjnkPDWC3EPF8yaJ55ubdoKzg_VtypmPCid-811gIzZ68zGSlDkK7W6BtNlM3tm1pzgvF9YZ4ZWEHjbz7mfTtbgussxB3j7UMTI2-Gi_' alt='logo' />
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{ color: 'black' }}
                  contentArrowStyle={{ borderRight: '15px solid rgba(74, 85, 104)' }}
                  date="June 2019 - September 2019"
                  position={'left'}
                  iconStyle={{ background: 'black', color: '#fff' }}
                  icon={<SchoolIcon />}
                >
                  <h3 className="text-2xl m-1">Introduction to Programming - Udacity</h3>
                  <h4 className="text-xl m-1">Nanodegree</h4>
                  <Chip label={'HTML'}/>
                  <Chip label={'CSS'} />
                  <Chip label={'JAVASCRIPT'} />
                  <Chip label={'PYTHON'} />
                  <img src='https://lh3.googleusercontent.com/proxy/dbjMLg6q8peINZ5IVPp5zjnkPDWC3EPF8yaJ55ubdoKzg_VtypmPCid-811gIzZ68zGSlDkK7W6BtNlM3tm1pzgvF9YZ4ZWEHjbz7mfTtbgussxB3j7UMTI2-Gi_' alt='logo' />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                  icon={<StarIcon />}
                />
              </VerticalTimeline>
            
          </div>

      </Layout>
      </>
  );
}