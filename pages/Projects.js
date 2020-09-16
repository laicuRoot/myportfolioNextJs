import Head from 'next/head';
import projects from '../projects';
import { motion } from 'framer-motion';
import styles from '../styles/utils.module.css'

const Card = (props) =>{
  return (
    <motion.div
      className={`rounded-lg text-center ${styles.card} bg-cover bg-center`}
      style={{ backgroundImage: `url(${props.photo})`}}
      whileHover={{
        position: "relative",
        zIndex: 1,
        background: "orange",
        scale: 1.1,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </motion.div>
  );
}

const ProjectList = () =>{
  return (
    <div className="flex flex-wrap p-4 w-3/4 h-auto justify-items-center mx-auto">
      {projects.map((project, id) => {
        return (
          <Card
            key={id}
            title={project.title}
            description={project.description}
            photo={project.photo}
          />
        );
      })}
    </div>
  );
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