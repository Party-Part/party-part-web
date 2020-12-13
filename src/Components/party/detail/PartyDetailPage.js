import Container from "@material-ui/core/Container";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "../../modules/components/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import DutiesTable from "./DutiesTable";

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

// todo: mock data, calc real date in backend
const calculatedDuties = {};
// todo: mock data, calc real date in backend
const source = [
    {name_source: "Дима", name_target: "Таня", amount: 100},
    {name_source: "Таня", name_target: "Коля", amount: 200},
    {name_source: "Саша", name_target: "Вася", amount: 999},
    {name_source: "Володя", name_target: "Дима", amount: 0},
];


function PartyDetailPage(props) {
    const classes = useStyles();

    return (
        <Container className={classes.layout}>
            <Paper className={classes.paper}>
                <Grid className={classes.grid}
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={4}>

                    <Grid item xs={12}>
                        <Typography variant="h5" marked="center">Затраты</Typography>
                    </Grid>

                    <Grid container
                          item
                          direction="column"
                          justify="center"
                          alignItems="flex-start"
                          spacing={3}>

                        {/*<Grid item xs={12}>*/}
                        {/*    <Typography variant="body1"> Айди {props.partyId}</Typography>*/}
                        {/*</Grid>*/}

                        <Grid item xs={12}>
                            <Typography variant="h6"> Название пати</Typography>
                        </Grid>
                        <Grid container
                              item
                              direction="raw"
                              justify="center"
                              alignItems="flex-start"
                              spacing={2}>
                            <Grid item xs={4}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Вы потратили
                                        </Typography>
                                        <Typography variant="h4">
                                            100
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            рублей
                                        </Typography>
                                    </CardContent>
                                    {/*<CardActions>*/}
                                    {/*    <Button size="small">Посмотеть затраты</Button>*/}
                                    {/*</CardActions>*/}
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Вам должны
                                        </Typography>
                                        <Typography variant="h4">
                                            50
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            рублей
                                        </Typography>
                                    </CardContent>
                                    {/*<CardActions>*/}
                                    {/*    <Button size="small">Посмотеть затраты</Button>*/}
                                    {/*</CardActions>*/}
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Вы задолжали
                                        </Typography>
                                        <Typography variant="h4">
                                            49
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            рублей
                                        </Typography>
                                    </CardContent>
                                    {/*<CardActions>*/}
                                    {/*    <Button size="small">Посмотеть затраты</Button>*/}
                                    {/*</CardActions>*/}
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container
                              item
                              direction="column"
                              justify="center">
                            <Grid item xs={12}>
                                <div className={classes.table}>
                                    <DutiesTable source={source}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default PartyDetailPage;