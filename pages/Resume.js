import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import React from 'react';
import {useState} from 'react';
import ProgressBar from '../components/Progressbar/ProgressBar';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';




export default function FirstPost() {
  const [isVisible, setVisible] = useState(false);

  const testData = [
    { bgcolor: "#6a1b9a", completed: 100, icon:'fab fa-html5 fa-2x' },
    { bgcolor: "#00695c", completed: 100, icon: 'fab fa-css3-alt fa-2x'},
    { bgcolor: "#ef6c00", completed: 90, icon: 'fab fa-js-square fa-2x' },
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
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date="2011 - present"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Creative Director</h3>
                  <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2010 - 2011"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Art Director</h3>
                  <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2008 - 2010"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                  <p>
                    User Experience, Visual Design
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2006 - 2008"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                  <p>
                    User Experience, Visual Design
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="April 2013"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                  <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                  <p>
                    Strategy, Social Media
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="November 2012"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                  <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                  <p>
                    Creative Direction, User Experience, Visual Design
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2002 - 2006"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                  <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                  <p>
                    Creative Direction, Visual Design
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                  icon={<StarIcon />}
                />
              </VerticalTimeline>
            
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