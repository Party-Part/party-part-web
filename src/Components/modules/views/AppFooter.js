import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://pakhomovalexander.github.io/ru/">
                Aleksander Pakhomov
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // minHeight: '100vh',
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        display: 'flex',
    },
    iconsWrapper: {
        height: 120,
    },
    icons: {
        display: 'flex'
    },
    icon: {
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.main,
        marginRight: theme.spacing(1),
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
    list: {
        margin: 0,
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
    },
    language: {
        marginTop: theme.spacing(1),
        width: 150,
    },
    footer: {
        marginTop: 'auto',
        // position: 'fixed',
        // bottom: '0',
        // left: '0'
    }
}));

export default function AppFooter() {
    const classes = useStyles();

    return (
        <Typography component="footer" className={classes.root}>
            <footer className={classes.footer}>
                <Container className={classes.container}>
                    <Grid container spacing={2}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                            className={classes.iconsWrapper}
                            spacing={2}
                            alignContent="center"
                        >
                            <Grid container justify="center" xs={4}>
                                <a href="https://telegram.org" className={classes.icon}>
                                    <TelegramIcon alt="Telegram"/>
                                </a>
                                <a href="https://twitter.com" className={classes.icon}>
                                    <TwitterIcon alt="Twitter"/>
                                </a>
                            </Grid>
                            <Grid item>
                                <Copyright/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </Typography>
    );
}
