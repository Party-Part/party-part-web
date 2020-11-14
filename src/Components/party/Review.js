import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const participants = [
    { name: 'Саша', spent: '100' },
    { name: 'Дима', spent: '99'},
    { name: 'Вова', spent: '87' },
    { name: 'Люся', spent: '0' },
];

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(0, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {props.partyName}
            </Typography>
            <List disablePadding>
                {participants.map((participant) => (
                    <ListItem className={classes.listItem} key={participant.name}>
                        <ListItemText primary={participant.name} />
                        <Typography variant="body1">Потратил(а) {participant.spent}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Всего" />
                    <Typography variant="subtitle1" className={classes.total}>
                        500
                    </Typography>
                </ListItem>
            </List>
        </React.Fragment>
    );
}