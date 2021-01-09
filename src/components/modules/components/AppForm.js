import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {withStyles} from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundImage: 'url(/static/onepirate/appCurvyLines.png)',
    backgroundRepeat: 'no-repeat',
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  }
});

function AppForm(props) {
  const {children, classes} = props;

  return (
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Box sx={{mt: 7, mb: 12}}>
            <Paper className={classes.paper}>
              {children}
            </Paper>
          </Box>
        </Container>
      </div>
  );
}

AppForm.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);
