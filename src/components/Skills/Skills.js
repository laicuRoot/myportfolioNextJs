import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillCard({title, icon}){
  return(
    <div className="sm:w-1/4 p-2">
      <div className=" px-6 py-8 rounded-lg shadow-lg text-center h-40">
        <div className="mb-3 text-green-500">
          {icon}
        </div>
        <h2 className="text-xl font-medium text-black">{title}</h2>
      </div>
    </div>
  )
}

function Skills (){
  return(
    <>
      <div className='text-center text-lg text-gray-700 uppercase mt-5 lg:text-left'>
        My Skills
      </div>
      <div className='container mx-auto w-4/5'>
        <div id='skills' className='flex flex-col sm:flex-row justify-center'> 
          <SkillCard 
            title={'JS'} 
            icon={
            <FontAwesomeIcon 
            icon={['fab', 'js']} 
            size={'4x'}/>} 
            />
          <SkillCard
            title={'REACT'}
            icon={<FontAwesomeIcon icon={['fab', 'react']}
            size={'4x'} />} />
          <SkillCard
            title={'HTML'}
            icon={<FontAwesomeIcon icon={['fab', 'html5']}
              size={'4x'} />} />
          <SkillCard
            title={'CSS'}
            icon={<FontAwesomeIcon icon={['fab', 'css3-alt']}
            size={'4x'} />} />
          <SkillCard
            title={'NEXTJS'}
            icon={<FontAwesomeIcon icon={['fas', 'chevron-circle-right']}
            size={'4x'}
            />}
            
            />
          <SkillCard
            title={'TAILWIND'}
            icon={<FontAwesomeIcon icon={['fas', 'wind']}
            size={'4x'}
            />}
            />
        </div>
      </div>

    </>
  )
}

export default Skills;

