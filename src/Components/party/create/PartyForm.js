import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    menuItem: {
        textAlign: 'left'
    }
}));

export default function PartyForm(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Пати
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="partyNameId"
                        name="partyName"
                        label="Название пати"
                        fullWidth
                        onChange={props.onPartyNameChange}
                        value={props.partyName}
                        // autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="currencyId">Валюта</InputLabel>
                        <Select
                            required
                            labelId="currencySelectLabel"
                            id="currencySelect"
                            className={classes.menuItem}
                            onChange={props.onCurrencyChange}
                            value={props.currency}>
                            <MenuItem value={1}>Рубли</MenuItem>
                            <MenuItem value={2}>Евро</MenuItem>
                            <MenuItem value={3}>Доллары</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}