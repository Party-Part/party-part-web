import React, {useCallback} from 'react';
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import {makeStyles} from "@material-ui/core/styles";
import DutiesTable from "../DutiesTable";
import {AddDutyForm} from "../AddDutyForm";


const useStyles = makeStyles((theme) => ({
    menuItem: {
        textAlign: 'left'
    },
    button: {
        align: 'center',
        marginTop: theme.spacing(2)
    }
}));

export default function DutiesForm(props) {
    const classes = useStyles();

    const [currentPayer, setCurrentPayer] = React.useState("");
    const [paymentSubject, setPaymentSubject] = React.useState("")
    const [paymentAmount, setPaymentAmount] = React.useState(null);
    const [selected, setSelected] = React.useState(null);

    function onRowSelected(id) {
        setSelected(id);
    }

    const onPayerChange = (e: React.FormEvent) => {
        console.log('Payer changed')
        console.log(e.target.value)
        setCurrentPayer(e.target.value)
    }

    const onPaymentSubjectChange = (e: React.FormEvent) => {
        setPaymentSubject(e.target.value)
    }

    const onPaymentAmountChange = (e: React.FormEvent) => {
        setPaymentAmount(e.target.value)
    }

    const onAddDuty = (e: React.FormEvent) => {
        props.onAddDuty(props.nextDutyId, currentPayer, paymentSubject, paymentAmount)
        setPaymentSubject("");
        setPaymentAmount(0);
    }

    function isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    const onRowChanged = useCallback(({value, columnId, rowIndex}) => {
        const data = [...props.duties];
        data[rowIndex][columnId] = value;
        props.onChangeDuty(data[rowIndex].id, data[rowIndex].whoPaid, data[rowIndex].forWhat, data[rowIndex].amount)
    }, [props.duties])

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                {isEmpty(props.duties) ?
                    <div/> :
                    <Grid item xs={12}>
                        <DutiesTable editable={props.editable}
                                     source={props.duties}
                                     onEditComplete={onRowChanged}
                                     onRowSelected={onRowSelected}/>
                    </Grid>
                }
                <AddDutyForm onPayerChange={onPayerChange}
                             classes={classes}
                             currentPayer={currentPayer}
                             participants={props.participants}
                             paymentSubject={paymentSubject}
                             onPaymentSubjectChange={onPaymentSubjectChange}
                             onPaymentAmountChange={onPaymentAmountChange}
                             paymentAmount={paymentAmount}
                             onSplitMethodChange={props.onSplitMethodChange}
                             splitMethod={props.splitMethod}
                             selectedDate={props.selectedDate}
                             onDateChange={props.onDateChange}
                             onAddDuty={onAddDuty}
                             selected={selected}
                             onDutyRemoved={props.onDutyRemoved}
                />
            </Grid>
        </React.Fragment>
    );
}