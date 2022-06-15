import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Container } from '@material-ui/core';

function ProjectList() {
  return (
    <Container maxWidth="md">
    <ImageList sx={{ width: 1000, height: 1000 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Projects</ListSubheader>
      </ImageListItem>
      {projectData.map((project,) => (
        <ImageListItem key={project.img}>
          <img
            src={`${project.img}`}
            srcSet={`${project.img}`}
            alt={project.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={project.title}
            subtitle={project.technoligies}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${project.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>
  );
}

const projectData = [
  {
    img: 'https://source.unsplash.com/gySMaocSdqs/600x300',
    title: 'Budget Tracker',
    technoligies: 'JavaScript, HTML, CSS',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://source.unsplash.com/o8ZesB0MLFo/600x300',
    title: 'Coast2Coast',
    technoligies: 'JavaScript, HTML, CSS',
  },
  {
    img: 'https://source.unsplash.com/hwy3W3qFjgM/600x300',
    title: 'Recipe Repo',
    technoligies: 'JavaScript, HTML, CSS',
  },
  {
    img: 'https://source.unsplash.com/MQUqbmszGGM/600x300',
    title: 'Pizza Hunt',
    technoligies: 'JavaScript, HTML, CSS',
    cols: 2,
  },
//   {
//     img: 'https://source.unsplash.com/o8ZesB0MLFo/600x300',
//     title: 'Hats',
//     technoligies: '@hjrc33',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     technoligies: '@arwinneil',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     technoligies: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     technoligies: 'Node.js',
//   },

];

export default ProjectList