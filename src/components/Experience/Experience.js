import LifeCard from '../LifeCard/LifeCard';

const Experience = ({experiences}) => {
  return(
    <>
      <div id='experience' className='text-lg text-gray-700 uppercase ml-24 m-10'>
        WORK EXPERIENCE
      </div>
        {experiences.map((experience, id) =>
          <LifeCard key={id} {...experience} />)}
    </>
  )
}

export default Experience;