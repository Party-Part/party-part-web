import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    nested: {
        margin: theme.spacing(0.5)
    }
}));

export default function ParticipantsForm(props) {
    const classes = useStyles();

    const [currentParticipant, setCurrentParticipant] = React.useState("");

    const handleAddParticipant = (e: React.FormEvent) => {
        e.preventDefault();
        props.onAddParticipant(currentParticipant);
        setCurrentParticipant("")
    }

    const handleChaneCurrentParticipant = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentParticipant(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            handleAddParticipant(e)
        }
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Участники
            </Typography>
            <Grid container spacing={2}>
                <div className={classes.root}>
                    <Grid item xs={12}>
                        {props.participants.map((participant, index) => {
                            return <Chip
                                key={index}
                                id={index}
                                avatar={<Avatar>{participant[0]}</Avatar>}
                                label={participant}
                                onDelete={() => props.onDeleteParticipant(index)}
                                variant="outlined"
                                className={classes.nested}
                            />
                        })}
                    </Grid>
                </div>
                <Grid item xs={12}>
                    <TextField required id="participantName"
                               label="Участник" fullWidth
                               onChange={handleChaneCurrentParticipant}
                               onKeyDown={handleKeyPress}
                               value={currentParticipant}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary" onClick={handleAddParticipant}>
                        Добавить участника
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}