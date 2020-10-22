import LifeCard from '../LifeCard/LifeCard';


const Education = ({ titulations }) => {
  return (
    <div className='min-h-screen flex justify-center'>
      <div className='mx-auto'>
        {titulations.map((title, id) =>
          <LifeCard key={id} {...title} />
          )}
      </div>
    </div>
  )
}

export default Education;