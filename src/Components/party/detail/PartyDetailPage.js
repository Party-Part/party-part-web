import Container from "@material-ui/core/Container";
import React, {useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "../../modules/components/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PaymentsTable from "./PaymentsTable";
import {getUserInfoById, registerAnon} from "../../../users/user";
import {
    addPartyEntry,
    addPartyMember,
    calculateParty,
    deletePartyEntry,
    deletePartyMember,
    getParty,
    getPartyEntries,
    getPartyMembers
} from "../../../service/party";
import DutiesForm from "../create/DutiesForm";
import ParticipantsForm from "../create/ParticipantsForm";

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
        paddingTop: 25,
        paddingBottom: 25
    },
    grid: {
        padding: theme.spacing(4)
    }
}));

function PartyDetailPage(props) {
    const classes = useStyles();

    const userIdFromStorage = JSON.parse(localStorage.getItem("userId"));

    const [payments, setPayments] = React.useState([]);
    const [partyInfo, setPartyInfo] = React.useState({
        partyId: "",
        userCreatorId: "",
        name: "Название..."
    });
    const [duties, setDuties] = React.useState({});
    const [splitMethod, setSplitMethod] = React.useState(1)
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [participants, setParticipants] = React.useState([]);
    const [nextDutyId, setNextDutyId] = React.useState(0);

    const handleAddParticipant = (participant) => {
        registerAnon(participant)
            .then(res => res.json())
            .then(registered => {
                setParticipants((prevState) => [...prevState, registered])
                return registered;
            })
            .then(registered => {
                    addPartyMember(props.partyId, parseInt(registered.user_id)).then(res => console.log(res))
                }
            )
    }

    const handleDeleteParticipant = (index) => {
        // todo: call delete user in db
        deletePartyMember(props.partyId, participants[index].userId)
            .then(res => console.log(res))
        setParticipants((prevState) => [...prevState.filter((p, i) => i !== index)]);
    }

    const handleSplitMethodChange = (e: React.FormEvent) => {
        e.preventDefault();
        setSplitMethod(e.target.value)
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleAddDuty = (id, payerId, paymentSubject, paymentAmount) => {
        console.log(payerId, userIdFromStorage, participants[payerId]);
        addPartyEntry(props.partyId, {
            userCreatorId: userIdFromStorage,
            userWhoPaidId: participants[payerId].userId,
            name: paymentSubject,
            cost: paymentAmount,
            currency: "rub",
            split: ""
        }).then(ignore => {
            setDuties(prevState => ([
                ...prevState,
                {
                    id: id,
                    whoPaid: participants[payerId].name,
                    forWhat: paymentSubject,
                    amount: paymentAmount,
                    currency: 'rub'
                }
            ]))
        })
        setNextDutyId(nextDutyId + 1)
    }

    const handleChangeDuty = (id, payerName, paymentSubject, paymentAmount) => {
        // todo: enable changing
    }

    async function findUserNameById(id) {
        let resolve = (await getUserInfoById(id)).json()
        return resolve
    }

    function findUserNameByIdLocal(id) {
        for (let participant of participants) {
            if (participant.userId === id) {
                return participant.name;
            }
        }
    }

    useEffect(() => {
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
                setPayments(calculated)
            })
            .catch(e => console.log(e))

    }, [duties]);

    useEffect(() => {
        getParty(props.partyId)
            .then(res => res.data)
            .then(info => setPartyInfo(info))
    }, [])

    useEffect(() => {
        getPartyEntries(props.partyId)
            .then(res => res.data)
            .then(async entries => {
                return Promise.all(entries.map(async entry => {
                    return {
                        id: entry.entryId,
                        whoPaid: (await findUserNameById(entry.userWhoPaidId)).name,
                        forWhat: entry.name,
                        amount: entry.cost,
                        currency: entry.currency
                    }
                }))
            })
            .then(p => setDuties(p))
    }, [])

    useEffect(() => {
        getPartyMembers(props.partyId)
            .then(res => res.data)
            .then(p => setParticipants(p))
    }, [])

    function removeDuty(id) {
        deletePartyEntry(props.partyId, id).then(res =>
            setDuties(prevState => [...prevState.filter(d => d.id !== id)])
        )
    }

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
                            <Typography variant="h6">{partyInfo.name}</Typography>
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
                                <Typography variant="h6">Долги: </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.table}>
                                    <PaymentsTable source={payments}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} spacing={2}>
                                <Typography variant="h6">Участники: </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.table}>
                                    <ParticipantsForm
                                        participants={participants}
                                        onAddParticipant={handleAddParticipant}
                                        onDeleteParticipant={handleDeleteParticipant}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Затраты: </Typography>
                            </Grid>
                            <Grid item xs={12} spacing={2}>
                                <div className={classes.table}>
                                    <DutiesForm
                                        splitMethod={splitMethod}
                                        selectedDate={selectedDate}
                                        participants={participants}
                                        duties={duties}
                                        nextDutyId={nextDutyId}
                                        onSplitMethodChange={handleSplitMethodChange}
                                        onDateChange={handleDateChange}
                                        onAddDuty={handleAddDuty}
                                        onChangeDuty={handleChangeDuty}
                                        onDutyRemoved={removeDuty}
                                    />
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