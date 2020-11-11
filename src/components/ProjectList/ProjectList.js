import TailCard from '../TailCard/TailCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectList = ({ projects }) => {
  return (
    <div className='container my-12 mx-auto px-4 md:px-12'>
      <div class=" mx-auto flex flex-wrap my-5">
        <img alt="ecommerce" class="lg:w-2/3 w-full lg:h-auto h-64 object-cover object-center rounded" src="/images/villasoleascreen.png" />
        <div class="lg:w-1/3 w-full lg:py-6 mb-6 lg:mb-0 lg:pl-3">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">VILLA SOLEA</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Vacation Rental Website</h1>
          <div class="flex mb-4">
            <a class="flex-grow text-green-900 border-b-2 border-green-400 py-2 text-lg px-1">Description</a>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">Developed dynamic and interactive vacation rental website that ensured high traffic, increased page views and user retention with a modern and mobile friendly design.</p>
          <div class="flex m-1">
            <a className='m-1' href='https://github.com/laicuRoot'>
              <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
            </a>
            <a className='m-1' href='https://github.com/laicuRoot'>
              <FontAwesomeIcon icon={['fas', 'globe']} size='2x' />
            </a>
          </div>
        </div>
      </div>
      <div className='block md:flex justify-between md:-mx-2'>
        {projects.map((project, id) =>
          <TailCard
            key={id}
            {...project}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectList; 