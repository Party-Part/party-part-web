import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "../../modules/components/Typography";

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

const aggregate = (duties) => {
    const aggregated = new Map();
    duties.forEach(duty => {
        if (aggregated.has(duty.payerName)) {
            let prevAmount = parseFloat(aggregated.get(duty.payerName));
            let newAmount = prevAmount + parseFloat(duty.paymentAmount);
            aggregated.set(duty.payerName, newAmount);
        } else {
            aggregated.set(duty.payerName, duty.paymentAmount);
        }
    });

    return Array.from(aggregated, ([name, amount]) => ({name, amount}));
};

export default function Review(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {props.partyName}
            </Typography>
            <List disablePadding>
                {aggregate(props.duties).map((info, i) => {
                    return <ListItem className={classes.listItem}>
                        <ListItemText primary={props.participants[info.name]}/>
                        <Typography variant="body1">потратил(а) {info.amount}</Typography>
                    </ListItem>
                })}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Всего"/>
                    <Typography variant="subtitle1" className={classes.total}>
                        {props.duties.map((duty) => parseFloat(duty.paymentAmount)).reduce((a, b) => a + b)}
                    </Typography>
                </ListItem>
            </List>
        </React.Fragment>
    );
}