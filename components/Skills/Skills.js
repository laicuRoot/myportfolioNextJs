import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillCard({title, icon}){
  return(
    <div className='flex justify-center items-center p-3 bg-black rounded-lg h-auto shadow-lg w-full m-2'>
      <h4 className='text-center text-white text-lg m-1'>{title}</h4>
      <span className='text-white m-1'>{icon}</span>
    </div>
  )
}

function Skills (){
  return(
    <>
      <div className='text-lg text-gray-700 uppercase ml-24'>
        My Skills
      </div>

      <div className='container mx-auto w-full'>
        <div className='inline-flex w-full m-1 justify-evenly'> 
          <SkillCard 
            title={'REACT'} 
            icon={<FontAwesomeIcon icon={['fab', 'react']} 
            size={'3x'}/>} />
          <SkillCard
            title={'JS'}
            icon={<FontAwesomeIcon icon={['fab', 'js']}
            size={'3x'} />} />
          <SkillCard
            title={'CSS'}
            icon={<FontAwesomeIcon icon={['fab', 'css3-alt']}
            size={'3x'} />} />
          <SkillCard
            title={'NEXTJS'}
            icon={''}
            />
          <SkillCard
            title={'TAILWIND CSS'}
            icon={<img src='./images/tailwindicon.png'/>} />
        </div>
      </div>

    </>
  )
}

export default Skills;

