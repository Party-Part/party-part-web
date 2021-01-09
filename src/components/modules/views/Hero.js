import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './HeroLayout';

const backgroundImage = 'pexels-lucian-petronel-potlog-3566120.jpg';

const styles = (theme) => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
    },
    button: {
        minWidth: 200,
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    },
});

function Hero(props) {
    const {classes} = props;

    return (
        <ProductHeroLayout backgroundClassName={classes.background}>
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{display: 'none'}}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Split your duties
            </Typography>
            <Typography color="inherit" align="center" variant="h6" className={classes.h5}>
                Раздели расходы между друзьями без лишних переводов
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                component="a"
                href="/party"
            >
                Разделить расходы
            </Button>
            <Typography variant="body2" color="inherit" className={classes.more}>
                Попробуй прямо сейчас
            </Typography>
        </ProductHeroLayout>
    );
}

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
