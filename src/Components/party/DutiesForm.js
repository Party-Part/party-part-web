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

export default function DutiesForm(props) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Расходы
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField required id="whoPaid" label="Кто платил" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField required id="duty" label="За что" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField required
                               id="sum"
                               label="Сколько"
                               type="number"
                               fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="splitMethodInputId">Как делить</InputLabel>
                        <Select
                            labelId="splitMethodLabel"
                            id="splitMethodId"
                            onChange={props.onSplitMethodChange}
                            value={props.splitMethod}>
                            <MenuItem value={1}>Между всеми по ровну</MenuItem>
                            <MenuItem value={2}>Между кем-то по ровну</MenuItem>
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

                <Grid item xs={12}>
                    <Button variant="contained" color="secondary">
                        Добавить расход
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}