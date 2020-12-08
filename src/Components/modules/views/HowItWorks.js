import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 28,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  icon: {
    height: 45,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function HowItWorks(props) {
  const {classes} = props;

  return (
      <section className={classes.root}>
        <Container className={classes.container}>
          <Typography
              variant="h4"
              marked="center"
              className={classes.title}
              component="h2"
          >
            Как это работает
          </Typography>
          <div>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <div className={classes.number}>1.</div>
                  <Typography variant="subtitle1" align="center">
                    Маша платит за бар, Дима за такси и за ресторан. Петя ни за что не платит.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <div className={classes.number}>2.</div>
                  <Typography variant="subtitle1" align="center">
                    Маша и Дима заносят свои расходы в PartyPart.
                    Указывают способ разделения: бар пополам между Петей и Димой, такси и ресторан поровну между всеми.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <div className={classes.number}>3.</div>
                  <Typography variant="subtitle1" align="center">
                    PartyPart расчитывает остатки между ребятами и показывает кому и сколько нужно перевести денег,
                    что бы не быть друг у друга в долгу.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <Button
              color="secondary"
              size="large"
              variant="contained"
              className={classes.button}
              component="a"
              href="/party"
          >
            Попробовать
          </Button>
        </Container>
      </section>
  );
}

HowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HowItWorks);
