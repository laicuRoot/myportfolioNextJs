import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function  TailCard ({title, photo, description}){

  return(
          <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <img className="h-56 w-full object-cover object-center" src={photo} alt="project photo" />
                <div className="p-4 h-auto md:h-40 lg:h-48">
                  <a href="#" className="block text-green-400 hover:text-green-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
                    {title}
                  </a>
                  <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                    {description}
                  </div>

                    <div className="relative p-1 mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:flex w-full">
                      <a href='https://github.com/laicuRoot'>
                      <FontAwesomeIcon icon={['fab', 'github']} size='3x'/>
                      </a>
                    </div>
                </div>
              </div>
            </div>
  )
}

export default TailCard; 