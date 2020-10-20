import TailCard from '../TailCard/TailCard';

const ProjectList = ({ projects }) => {
  return (
    <div className='container my-12 mx-auto px-4 md:px-12'>
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