import React, {useCallback} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {makeStyles} from "@material-ui/core/styles";
import DutiesTable from "./DutiesTable";


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

    const [currentPayer, setCurrentPayer] = React.useState(props.participants[0]);
    const [paymentSubject, setPaymentSubject] = React.useState("")
    const [paymentAmount, setPaymentAmount] = React.useState(0);
    const [dutiesDatasource, setDutiesDatasource] = React.useState([]);

    const onPayerChange = (e: React.FormEvent) => {
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
        setDutiesDatasource(prevState => [...prevState, {
            id: props.nextDutyId,
            whoPaid: props.participants[currentPayer],
            forWhat: paymentSubject,
            amount: paymentAmount,
            currency: 'рублей'
        }]);
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
        const data = [...dutiesDatasource];
        data[rowIndex][columnId] = value;
        setDutiesDatasource(data);
        props.onChangeDuty(data[rowIndex].id, data[rowIndex].whoPaid, data[rowIndex].forWhat, data[rowIndex].amount)
    }, [dutiesDatasource])

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                {isEmpty(props.duties) ?
                    <div/> :
                    <Grid item xs={12}>
                        <DutiesTable source={dutiesDatasource} onEditComplete={onRowChanged}/>
                    </Grid>
                }
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="currencyId">Кто платил</InputLabel>
                        <Select
                            required
                            labelId="payerLabelId"
                            id="payerSelectId"
                            onChange={onPayerChange}
                            className={classes.menuItem}
                            value={currentPayer}
                        >
                            {props.participants.map((participant, index) => {
                                return <MenuItem key={index} value={index}>{participant}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField required id="duty" label="За что" fullWidth value={paymentSubject}
                               onChange={onPaymentSubjectChange}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField required
                               id="sum"
                               label="Сколько"
                               type="number"
                               fullWidth
                               onChange={onPaymentAmountChange}
                               value={paymentAmount}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="splitMethodInputId">Как делить</InputLabel>
                        <Select
                            labelId="splitMethodLabel"
                            id="splitMethodId"
                            onChange={props.onSplitMethodChange}
                            value={props.splitMethod}
                            className={classes.menuItem}>
                            <MenuItem value={1}>Между всеми поровну</MenuItem>
                            <MenuItem value={2}>Между кем-то поровну</MenuItem>
                            <MenuItem value={3}>Другое</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Когда"
                                value={props.selectedDate}
                                onChange={props.onDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl>
                </Grid>

                <Grid container justify="center">
                    <Button variant="contained" color="secondary" onClick={onAddDuty}>
                        Добавить расход
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}