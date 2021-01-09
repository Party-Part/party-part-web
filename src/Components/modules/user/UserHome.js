import Container from "@material-ui/core/Container";
import React, {useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "../components/Typography";
import {UserParties} from "./UsersParties";
import {getPartyCreated} from "../../../service/party";

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        marginBottom: '5%',
        minHeight: "70vh"
    },
    paper: {
        backgroundColor: '#ffffff', // 5d737e
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
        },
    },
    root: {
        // minWidth: 200,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 6,
    },
    table: {
        // padding: 25
    },
    grid: {
        padding: theme.spacing(4)
    }
}));

function UserHome(props) {
    const classes = useStyles();
    const [parties, setParties] = React.useState([])

    useEffect(() => {
        getPartyCreated(props.user.user_id)
            .then(res => res.data)
            .then(parties => setParties(parties))
    }, [])

    return (
        <Container className={classes.layout}>
            <Paper className={classes.paper}>
                <Grid className={classes.grid}
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={4}>

                    <Grid item
                          className={classes.grid}>
                        <Typography> {props.user.name} </Typography>
                    </Grid>
                    <Grid item
                          className={classes.grid}>
                        <Typography> {props.user.login} </Typography>
                    </Grid>
                    <Grid item
                          className={classes.grid}>
                        <Typography> {props.user.email} </Typography>
                    </Grid>
                    <Grid item
                          className={classes.grid}>

                        <UserParties parties={parties}/>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default UserHome;