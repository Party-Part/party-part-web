import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function Categories(props) {
  const {classes} = props;

  const images = [
    {
      url:
          'pexels-askar-abayev-5638678.jpg',
      title: 'Новоселье',
      width: '40%',
    },
    {
      url:
          'pexels-vishnu-r-nair-1105666.jpg',
      title: 'Концерт',
      width: '60%',
    },
    {
      url:
          'pexels-freestocksorg-312080.jpg',
      title: 'Дегустация',
      width: '40%',
    },
    {
      url:
          'pexels-rachel-claire-4577419.jpg',
      title: 'Путешествие',
      width: '30%',
    },
    {
      url:
          'pexels-andrea-piacquadio-787961.jpg',
      title: 'Вечеринка',
      width: '30%',
    },
    {
      url:
          'pexels-marin-tulard-3639709.jpg',
      title: 'Активный спорт',
      width: '25%',
    },
    {
      url:
          'pexels-tembela-bohle-1089930.jpg',
      title: 'Бар',
      width: '40%',
    },
    {
      url: 'pexels-thiago-miranda-1230397.jpg',
      title: 'Что-то еще',
      width: '35%',
    },
  ];

  return (
      <Container className={classes.root} component="section">
        <Typography variant="h4" marked="center" align="center" component="h2">
          Подойдет для любой вечеринки
        </Typography>
        <div className={classes.images}>
          {images.map((image) => (
              <ButtonBase
                  key={image.title}
                  className={classes.imageWrapper}
                  style={{
                    width: image.width,
                  }}
              >
                <div
                    className={classes.imageSrc}
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                />
                <div className={classes.imageBackdrop}/>
                <div className={classes.imageButton}>
                  <Typography
                      component="h3"
                      variant="h6"
                      color="inherit"
                      className={classes.imageTitle}
                  >
                    {image.title}
                    <div className={classes.imageMarked}/>
                  </Typography>
                </div>
              </ButtonBase>
          ))}
        </div>
      </Container>
  );
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Categories);
