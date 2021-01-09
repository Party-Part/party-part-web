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

const amounts = (dict) => {
    let values = [];
    for (var key in dict) {
        values.push(dict[key].amount);
    }
    return values;
}

const aggregate = (duties) => {
    const aggregated = new Map();
    for (var key in duties) {
        const duty = duties[key];
        if (aggregated.has(duty.whoPaid)) {
            let prevAmount = parseFloat(aggregated.get(duty.whoPaid));
            let newAmount = prevAmount + parseFloat(duty.amount);
            aggregated.set(duty.whoPaid, newAmount);
        } else {
            aggregated.set(duty.whoPaid, duty.amount);
        }
    }
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
                    return <ListItem key={i} className={classes.listItem}>
                        <ListItemText primary={info.name}/>
                        <Typography variant="body1">потратил(а) {info.amount}</Typography>
                    </ListItem>
                })}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Всего"/>
                    <Typography variant="subtitle1" className={classes.total}>
                        {amounts(props.duties).map((amount) => parseFloat(amount)).reduce((a, b) => a + b)}
                    </Typography>
                </ListItem>
            </List>
        </React.Fragment>
    );
}