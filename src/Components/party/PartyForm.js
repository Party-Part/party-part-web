import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PartyForm(props) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Пати
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="partyName"
                        name="partyName"
                        label="Название пати"
                        fullWidth
                        onChange={props.onPartyNameChange}
                        value={props.partyName}
                        // autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="currencyName"
                        name="currencyName"
                        label="Валюта"
                        fullWidth
                        onChange={props.onCurrencyChange}
                        // autoComplete="family-name"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}