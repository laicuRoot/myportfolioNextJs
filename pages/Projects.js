import Layout from '../components/Layout/Layout'
import projects from '../projects';
import TailCard from '../components/TailCard/TailCard';



const ProjectList = ({projects}) =>{

  return (
    <div className='container my-12 mx-auto px-4 md:px-12'>
      <div className='block md:flex justify-between md:-mx-2'>
        {projects.map((project, id) =>
          <TailCard
            key={id}
            photo={project.photo}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        )}
      </div>
    </div>
  );
}

export default function Project(){
  return (
    <Layout>
      <ProjectList projects={projects} />
    </Layout>
  );
}