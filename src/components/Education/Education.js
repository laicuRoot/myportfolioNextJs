import LifeCard from '../LifeCard/LifeCard';


const Education = ({ titulations }) => {
  return (
    <div id='education' className='mx-auto'>
      <div className='text-lg text-gray-700 uppercase ml-24 m-1'>
        EDUCATION
      </div>
      {titulations.map((title, id) =>
        <LifeCard key={id} {...title} />
        )}
    </div>
  )
}

export default Education;