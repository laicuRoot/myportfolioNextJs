import Head from 'next/head';
import projects from '../projects';
import { motion } from 'framer-motion';

const Card = (props) =>{
  return(
    <motion.div className='relative rounded-lg bg-blue-400 w-1/4 text-gray-700 text-center p-6 m-2 h-auto' whileHover={{
      position: 'relative',
      zIndex: 1,
      background: 'orange',
      scale: 1.1,
      transition: {
        duration: .2
      }
    }}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </motion.div>
  )
}

const ProjectList = () =>{
  return(
    <div className="flex flex-wrap flex-start m-5 p-2 h-full w-auto">
      {projects.map((project, id) => {
        return (
          <Card key={id} title={project.title} description={project.description} />
        )
      })}
    </div>
  )
}

export default function Project(id){
  return (
    <>
      <Head>
        <title>Jose Blanco Projects</title>
      </Head>
      <hr />
      <ProjectList key={id} />
    </>
  );
}