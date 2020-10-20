import Layout from '../components/Layout/Layout'
import projects from '../projects';
import ProjectList from '../components/ProjectList/ProjectList'

export default function Project(){
  return (
    <Layout>
      <ProjectList projects={projects} />
    </Layout>
  );
}