import Layout from '../components/Layout/Layout'
import projects from '../projects';
import Card from '../components/Card/Card';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { GridListTileBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: '-4rem',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
}));


const ProjectList = (props) =>{
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} spacing={20} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {props.projects.map((project, id) => {
          return (
              <GridListTile key={id}>
                <img src={project.photo}/>
                <GridListTileBar 
                  title={project.title}
                />
              </GridListTile>
          );
        })}
      </GridList>
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