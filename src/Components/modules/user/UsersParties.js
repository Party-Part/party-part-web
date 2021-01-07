import Grid from "@material-ui/core/Grid";
import Typography from "../components/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        marginBottom: '5%',
        minHeight: "70vh"
    },
    paper: {
        backgroundColor: '#ffffff', // 5d737e
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
        },
    },
    root: {},
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 6,
    },
    table: {
        paddingTop: 25
    },
    grid: {
        padding: theme.spacing(4)
    }
}));

export function UserParties(props) {
    const classes = useStyles();

    return (
        <Grid container
              item
              direction="raw"
              justify="center"
              alignItems="flex-start"
              spacing={2}>
            {props.parties.map(p => {
                return <Grid item xs={4}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h6">
                                {p.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={'/party/' + p.partyId}>Перейти</Button>
                        </CardActions>
                    </Card>
                </Grid>
            })}

        </Grid>
    )
}