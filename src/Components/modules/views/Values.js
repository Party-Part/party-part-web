import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import DoneIcon from '@material-ui/icons/Done';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TelegramIcon from '@material-ui/icons/Telegram';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
});

function Values(props) {
  const {classes} = props;

  return (
      <section className={classes.root}>
        <Container className={classes.container}>
          {/*<DoneIcon*/}
          {/*  src="/static/themes/onepirate/productCurvyLines.png"*/}
          {/*  className={classes.curvyLines}*/}
          {/*  alt="curvy lines"*/}
          {/*/>*/}
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <DoneIcon fontSize='Large'/>
                <Typography variant="h6" className={classes.title}>
                  Простота
                </Typography>
                <Typography variant="h5">
                  Делите расходы между друзьями в несколько шагов
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <MonetizationOnIcon fontSize='Large'/>
                <Typography variant="h6" className={classes.title}>
                  Экономия
                </Typography>
                <Typography variant="h5">
                  Учитывайте только остатки по расходам и не платите коммиссию за переводы
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <TelegramIcon fontSize='Large'/>
                <Typography variant="h6" className={classes.title}>
                  Доступность
                </Typography>
                <Typography variant="h5">
                  Фиксируйте каждую затрату через телеграм бота
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
  );
}

Values.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Values);
