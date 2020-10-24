import Layout from '../src/components/Layout/Layout'
import projects from '../projects';
import ProjectList from '../src/components/ProjectList/ProjectList'

export default function Page(){
  return (
    <Layout>
      <ProjectList projects={projects} />
    </Layout>
  );
}