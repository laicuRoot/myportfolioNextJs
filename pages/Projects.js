import Head from 'next/head';
import Link from 'next/link'
import projects from '../projects';
import { motion } from 'framer-motion';
import styles from '../styles/utils.module.css';

const Card = (props) =>{
  return (
    <Link href={props.link}>
      <motion.div
        className={`rounded-lg text-center ${styles.card} bg-no-repeat bg-cover bg-center cursor-pointer`}
        style={{ backgroundImage: `url(${props.photo})` }}
        whileHover={{
          position: "relative",
          top: 0,
          scale: 1.1,
          zIndex: 10,
          transition: {
            duration: 0.7,
          },
        }}
      >
        <h1 className="text-white text-center text-4xl bg-black bg-opacity-50 bg-fixed rounded w-full m-0">
          {props.title}
        </h1>
        <p className="text-white text-center text-2xl bg-black bg-opacity-50">
          {props.description}
        </p>
      </motion.div>
    </Link>
  );
}

const ProjectList = () =>{
  return (
    <div className="flex p-4 flex-wrap w-full h-auto justify-center mx-auto space-x-1 space-y-2">
      {projects.map((project, id) => {
        return (
          <Card
            key={id}
            title={project.title}
            description={project.description}
            photo={project.photo}
            link={project.link}
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