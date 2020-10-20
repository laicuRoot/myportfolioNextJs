import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillCard({title, icon}){
  return(
    <div className='flex-col justify-center items-center m-1 p-3 bg-black rounded-lg shadow-lg'>
      <h4 className='text-center text-white text-lg'>{title}</h4>
      <span className='text-white'><i className={`${icon} text-center`}></i></span>
    </div>
  )
}

function Skills (){
  return(
    <>
      <div className='text-lg text-gray-700 uppercase ml-32'>
        My Skills
      </div>

      <div className='container mx-auto h-full inline-flex justify-evenly'>
       <SkillCard title={'REACT'} icon={'fab fa-react'}/>
      </div>

    </>
  )
}

export default Skills;

