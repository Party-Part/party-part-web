import React from 'react';
import Typography from '@material-ui/core/Typography';
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
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";


const useStyles = makeStyles((theme) => ({
    menuItem: {
        textAlign: 'left'
    },
    button: {
        align: 'center'
    }
}));

export default function DutiesForm(props) {
    const classes = useStyles();

    const [currentPayer, setCurrentPayer] = React.useState(props.participants[0]);
    const [paymentSubject, setPaymentSubject] = React.useState("")
    const [paymentAmount, setPaymentAmount] = React.useState(0);

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
        props.onAddDuty(currentPayer, paymentSubject, paymentAmount)
        setPaymentSubject("");
        setPaymentAmount(0);
    }

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Добавьте расходы
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List>
                        {
                            props.duties.map((duty, index) =>
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={
                                            props.participants[duty.payerName] + ' заплатил(а) за ' +
                                            duty.paymentSubject + ' ' +
                                            duty.paymentAmount + ' рублей'
                                        }
                                    />
                                </ListItem>
                            )
                        }
                    </List>
                </Grid>
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