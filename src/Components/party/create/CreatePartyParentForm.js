import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import PartyForm from './PartyForm';
import ParticipantsForm from './ParticipantsForm';
import Review from './Review';
import DutiesForm from "./DutiesForm";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "../../modules/components/Typography";
import {addPartyEntry, addPartyMember, createParty, deletePartyEntry, deletePartyMember} from "../../../service/party";
import {registerAnon} from "../../../users/user";

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
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#ffffff', // 5d737e
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['Пати', 'Участники', 'Расходы', 'Проверяем'];

export default function CreatePartyParentForm(props) {
    const userIdFromStorage = JSON.parse(localStorage.getItem("userId"));

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [nextDutyId, setNextDutyId] = React.useState(0);

    const [partyName, setPartyName] = React.useState("");
    const [currency, setCurrency] = React.useState("");
    const [splitMethod, setSplitMethod] = React.useState(1)
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [participants, setParticipants] = React.useState([]);
    const [duties, setDuties] = React.useState([])

    const [registered, setRegistered] = React.useState([]); // todo: remove this
    const [partyId, setPartyId] = React.useState();

    const handlePartyNameChange = (e: React.FormEvent) => {
        e.preventDefault();
        setPartyName(e.target.value)
    }

    const handleCurrencyChange = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrency(e.target.value)
    }

    const handleSplitMethodChange = (e: React.FormEvent) => {
        e.preventDefault();
        setSplitMethod(e.target.value)
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleAddParticipant = (participant) => {
        registerAnon(participant)
            .then(res => res.json())
            .then(registered => {
                setParticipants((prevState) => [...prevState, registered])
                return registered;
            })
            .then(registered => {
                    addPartyMember(partyId, parseInt(registered.user_id)).then(res => console.log(res))
                }
            )
    }

    const handleDeleteParticipant = (index) => {
        // todo: call delete user in db
        deletePartyMember(partyId, participants[index].userId)
            .then(res => console.log(res))
        setParticipants((prevState) => [...prevState.filter((p, i) => i !== index)]);
    }

    const handleAddDuty = (id, payerId, paymentSubject, paymentAmount) => {
        console.log('Adding duty.. ', id, payerId, paymentSubject, paymentAmount)
        addPartyEntry(props.partyId, {
            userCreatorId: userIdFromStorage,
            userWhoPaidId: participants[payerId].userId, // payerId here is an index from MenuItem
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
        let duty = duties[id];
        // duty.whoPaid = payerName;
        duty.forWhat = paymentSubject;
        duty.amount = paymentAmount;
        duty.currency = 'рублей';
        let copied = {...duties};
        copied[id] = duty;
        setDuties(copied);
    }

    const onAddRegistered = (participant) => {
        setRegistered((prevState => [...prevState, participant]));
    }

    const handlers = {
        handlePartyNameChange, handleCurrencyChange, handleSplitMethodChange,
        handleDateChange, handleDeleteParticipant, handleAddParticipant, handleAddDuty, handleChangeDuty
    }

    const handleNext = () => {
        doServiceCall(activeStep);
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const doServiceCall = (step) => {
        switch (step) {
            case 0:
                onPartyCreated();
                break;
            case 1:
                // registerUsersAndAddToParty();
                break;
            case 2:
                break;
            case 3:
                addDuties();
                break;
            default:
                break;
        }
    }

    function registerUsersAndAddToParty() {
        Promise.all(participants.map(p =>
            registerAnon(p)
                .then(r => r.json())
                .then(registerResult => {
                    let {user_id, name} = registerResult;
                    onAddRegistered({id: user_id, name: name});
                    return addPartyMember(partyId, parseInt(user_id)).then((res => console.log(res)))
                })
                .catch(e => console.log(e))
        )).finally(() => console.log('ok'))
    }

    const onPartyCreated = () => {
        createParty({
            userId: props.user.user_id,
            name: partyName
        }).then(result => {
            setPartyId(result.data.partyId);
        })
    }

    function addDuties() {
        for (const duty of duties) {
            let {whoPaid, forWhat, amount, currency} = duty;
            let userId = findUserIdByName(whoPaid);
            let requestObj = {
                userCreatorId: userIdFromStorage.toString(),
                userWhoPaidId: userId.toString(),
                name: forWhat,
                cost: amount,
                currency: "rub",
                split: ""
            };
            console.log(requestObj)
            addPartyEntry(partyId, requestObj).then(res => console.log(res))
                .catch(e => console.log(e));
        }
    }

    function removeDuty(id) {
        deletePartyEntry(props.partyId, id).then(res =>
            setDuties(prevState => [...prevState.filter(d => d.id !== id)])
        )
    }

    function findUserIdByName(name) {
        console.log('Finding ' + name + 'in...', participants)
        for (let user of participants) {
            console.log(user)
            if (user.name === name) {
                return user.user_id;
            }
        }
    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <PartyForm
                    partyName={partyName}
                    currency={currency}
                    onPartyNameChange={handlers.handlePartyNameChange}
                    onCurrencyChange={handlers.handleCurrencyChange}
                />;
            case 1:
                return <ParticipantsForm
                    participants={participants}
                    onAddParticipant={handlers.handleAddParticipant}
                    onDeleteParticipant={handlers.handleDeleteParticipant}
                />;
            case 2:
                return <DutiesForm
                    splitMethod={splitMethod}
                    selectedDate={selectedDate}
                    participants={participants}
                    duties={duties}
                    nextDutyId={nextDutyId}
                    onSplitMethodChange={handlers.handleSplitMethodChange}
                    onDateChange={handlers.handleDateChange}
                    onAddDuty={handlers.handleAddDuty}
                    onChangeDuty={handlers.handleChangeDuty}
                    onDutyRemoved={removeDuty}
                />;
            case 3:
                return <Review
                    partyName={partyName}
                    duties={duties}
                    participants={participants}
                />;
            default:
                throw new Error('Unknown step');
        }
    }

    return (
        <React.Fragment>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" align="center" marked="center">
                        Новое пати
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Grid container>
                                    <Grid container justify="center">
                                        <Typography variant="h5" gutterBottom>
                                            Готово!
                                        </Typography>
                                    </Grid>
                                    <Grid container justify="center">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component={Link}
                                            to={"/party/" + partyId}
                                            // onClick={handleCalc}
                                            className={classes.button}
                                        >
                                            Расчитать долги
                                        </Button>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep, handlers)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button}>
                                            Назад
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Готово' : 'Далее'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}