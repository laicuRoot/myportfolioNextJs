import LifeCard from '../LifeCard/LifeCard';

const Experience = ({experiences}) => {
  return(
<>
        {experiences.map((experience, id) =>
          <LifeCard key={id} {...experience} />)}
</>
  )
}

export default Experience;