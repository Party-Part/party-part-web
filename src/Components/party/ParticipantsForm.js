import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

export default function ParticipantsForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Участники
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField required id="participantName" label="Участник" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary">
                        Добавить участника
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}