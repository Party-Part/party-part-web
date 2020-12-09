import Container from "@material-ui/core/Container";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "../../modules/components/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
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
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    }
}));

// todo: mock data, calc real date in backend
const calculatedDuties = {};

function PartyDetailPage(props) {
    const classes = useStyles();

    return (
        <Container className={classes.layout}>
            <Paper className={classes.paper}>
                <Grid container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={3}>

                    <Grid item xs={12}>
                        <Typography variant="h4" marked="center">Затраты</Typography>
                    </Grid>

                    <Grid container
                          direction="column"
                          justify="center"
                          alignItems="flex-start"
                          spacing={1}>

                        <Grid item xs={12}>
                            <Typography variant="body1"> Айди {props.partyId}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1"> Название пати</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1"> Вам обошлось: 100 рублей</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1"> Вам должны: 50 рублей</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1"> Вы задолжали: 10 рублей</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1"> --РАСХОДЫ--</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1"> --РАСЧЕТЫ--</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default PartyDetailPage;