import Layout from '../components/Layout/Layout'
import projects from '../projects';
import Card from '../components/Card/Card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '1rem',
    backgroundColor: theme.palette.background.paper,
    padding:'3rem'
  },
}));


const ProjectList = ({projects}) =>{
  const classes = useStyles();

  return (
    <div className='container mx-auto'>
      <Grid 
        container 
        spacing={5}
        className={`${classes.root} shadow-lg`}
      >
        {projects.map((project,id) =>
          <Grid key={id} item
            xs={12} sm={6} md={4} lg={4} xl={3}
          >
            <Card
              key={id}
              photo={project.photo}
              description={project.description}
              title={project.title}
            />
          </Grid>)}
      </Grid>
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