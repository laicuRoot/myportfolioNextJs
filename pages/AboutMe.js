import React from 'react';
import Layout from '../src/components/Layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Page() {

    return (
        <Layout>
            <div className='lg:container lg:mx-auto'>
                <div className='flex m-10 shadow-lg'>
                    <div className='w-full lg:w-1/3'>
                        <h1 className='text-xl g:text-4xl font-bold text-gray-800 m-1 mb-10 p-1'>Jose Blanco</h1>
                        <p className=' text-sm lg:text-lg text-gray-800 m-1 mb-10 p-1'> Jose Blanco has 2 years of experience as Frontend Developer. He has extensive knowledge of HTML5, CSS, JavaScript ES6, and browser APIs as well as significant experience with popular frameworks and librarys like React, NextJS, or Framer </p>
                        <ul className='inline-flex mt-10 m-1 p-1'>
                            <a href='https://github.com/laicuRoot'><FontAwesomeIcon className='m-1 p-1' icon={['fab', 'github']} size='3x' /></a>
                            <a href='https://www.linkedin.com/in/josedanielblanco/'><FontAwesomeIcon className='p-1 m-1' icon={['fab', 'linkedin']} size='3x' /></a>
                            <a href='mailto:jdblancoes@gmail.com'><FontAwesomeIcon className='p-1 m-1' icon={['fa', 'envelope']} size='3x' /></a>
                            <FontAwesomeIcon className='p-1 m-1' icon={['fa', 'globe']} size='3x' />
                        </ul>
                        <p><span className='text-lg lg:text-xl font-bold text-gray-800 m-1 p-1'>Frontend Developer</span></p>
                        <p><span className='lg:text-xl font-bold text-gray-800 m-1 p-1'> London, United Kingdom</span></p>
                        <a href='mailto:jdblancoes@gmail.com'><span className='lg:text-lg font-bold text-green-400 m-1 p-1'>jdblancoes@gmail.com</span></a>
                    </div>
                    <div className='w-full lg:w-2/3 p-4'>
                        <img src='images/japanprofile.jpeg' />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Page;

