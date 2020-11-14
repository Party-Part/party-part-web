import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Button} from "@material-ui/core";

export default function DutiesForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Расходы
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <TextField required id="whoPaid" label="Кто платил" fullWidth/>
                </Grid>
                <Grid item xs={12} >
                    <TextField required id="duty" label="За что" fullWidth/>
                </Grid>
                <Grid item xs={12} >
                    <TextField required id="sum" label="Сколько" fullWidth/>
                </Grid>
                <Grid item xs={12} >
                    <TextField required id="splitMethod" label="Как делить" fullWidth/>
                </Grid>
                <Grid item xs={12} >
                    <TextField required id="splitMethod" label="Когда" fullWidth/>
                </Grid>
                <Grid item xs={12} >
                    <Button variant="contained" color="secondary">
                        Добавить расход
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}