import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PartyForm from './PartyForm';
import ParticipantsForm from './ParticipantsForm';
import Review from './Review';
import DutiesForm from "./DutiesForm";

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
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
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

function getStepContent(step, info, handlers) {
    switch (step) {
        case 0:
            return <PartyForm
                partyName={info.partyName}
                currency={info.currency}
                onPartyNameChange={handlers.handlePartyNameChange}
                onCurrencyChange={handlers.handleCurrencyChange}
            />;
        case 1:
            return <ParticipantsForm
                participants={info.participants}
                onAddParticipant={handlers.handleAddParticipant}
                onDeleteParticipant={handlers.handleDeleteParticipant}
            />;
        case 2:
            return <DutiesForm
                splitMethod={info.splitMethod}
                selectedDate={info.selectedDate}
                participants={info.participants}
                duties={info.duties}
                onSplitMethodChange={handlers.handleSplitMethodChange}
                onDateChange={handlers.handleDateChange}
                onAddDuty={handlers.handleAddDuty}
            />;
        case 3:
            return <Review
                partyName={info.partyName}
                duties={info.duties}
                participants={info.participants}
            />;
        default:
            throw new Error('Unknown step');
    }
}

export default function CreatePartyForm() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const [partyName, setPartyName] = React.useState("");
    const [currency, setCurrency] = React.useState("");
    const [splitMethod, setSplitMethod] = React.useState("")
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [participants, setParticipants] = React.useState([]);
    const [duties, setDuties] = React.useState([])

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
        setParticipants((prevState => [...prevState, participant]));
    }

    const handleDeleteParticipant = (index) => {
        setParticipants((prevState) => [...prevState.filter((p, i) => i !== index)]);
    }

    const handleAddDuty = (payerName, paymentSubject, paymentAmount) => {
        setDuties(prevState => {
            return [...prevState, {payerName, paymentSubject, paymentAmount}]
        });
    }

    const handlers = {
        handlePartyNameChange, handleCurrencyChange, handleSplitMethodChange,
        handleDateChange, handleDeleteParticipant, handleAddParticipant, handleAddDuty
    }

    const info = {partyName, currency, splitMethod, selectedDate, participants, duties}

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
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
                                <Typography variant="h5" gutterBottom>
                                    Пати созданно!
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep, info, handlers)}
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