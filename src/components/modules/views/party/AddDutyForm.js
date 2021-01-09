import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Button} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    menuItem: {
        textAlign: 'left'
    },
    button: {
        align: 'center',
        marginTop: theme.spacing(2)
    }
}));

export function AddDutyForm(props) {
    const classes = useStyles();

    return (
        <Grid container item spacing={2}>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="currencyId">Кто платил</InputLabel>
                    <Select
                        required
                        labelId="payerLabelId"
                        id="payerSelectId"
                        onChange={props.onPayerChange}
                        className={classes.menuItem}
                        value={props.currentPayer}
                    >
                        {props.participants.map((participant, index) => {
                            return <MenuItem key={index} value={index}>{participant.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField required id="duty" label="За что" fullWidth value={props.paymentSubject}
                           onChange={props.onPaymentSubjectChange}/>
            </Grid>
            <Grid item xs={12}>
                <TextField required
                           id="sum"
                           label="Сколько"
                           // type="number"
                           fullWidth
                           onChange={props.onPaymentAmountChange}
                           value={props.paymentAmount}
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

            <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button variant="contained" color="secondary" onClick={props.onAddDuty}>
                        Добавить расход
                    </Button>
                </Grid>
                {props.selected != null ?
                    (<Grid item>
                        <Button variant="contained" color="primary" onClick={() => props.onDutyRemoved(props.selected)}>
                            Удалить
                        </Button>
                    </Grid>) : (<div/>)
                }
            </Grid>
        </Grid>
    )
}