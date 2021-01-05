import Container from "@material-ui/core/Container";
import React, {useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "../../modules/components/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PaymentsTable from "./PaymentsTable";
import {getUserInfoById} from "../../../service/user";
import {calculateParty} from "../../../service/party";

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

function PartyDetailPage(props) {
    const classes = useStyles();
    const [payments, setPayments] = React.useState([]);

    useEffect(() => {
        async function findUserNameById(id) {
            let resolve = (await getUserInfoById(id)).json()
            console.log(resolve);
            return resolve
        }

        calculateParty(props.partyId)
            .then(res => res.data)
            .then(payments => {
                return payments.map(p => {
                    return {
                        name_source: p.userSenderId,
                        name_target: p.userReceiverId,
                        amount: p.cost
                    }
                });
            })
            .then(async calculated => {
                return Promise.all(calculated.map(async p => {
                    return {
                        name_source: (await findUserNameById(p.name_source)).name,
                        name_target: (await findUserNameById(p.name_target)).name,
                        amount: p.amount
                    }
                }))
            })
            .then(calculated => {
                console.log(calculated);
                setPayments(calculated)
            })

    }, []);

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
                                    <PaymentsTable source={payments}/>
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