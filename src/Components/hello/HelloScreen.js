import React from 'react';
import './HelloScreen.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

function HelloScreen(props) {
    return (
        <Container className="Hello-screen">
            <div>
                <img src={props.logo} className="Hello-screen-logo" alt="logo" />
                <Typography variant="h2" component="h1" gutterBottom>
                    PartyPart. Split your duties.
                </Typography>
                <Button variant="contained" color="primary">
                    Разделить расходы
                </Button>
                <Divider variant="middle"/>
                <Typography variant="h3">
                    Как это работает?
                </Typography>
                <Typography variant="body1">
                    Тут текст про то как это все работает.
                </Typography>
                <Divider variant="middle"/>
                <Typography variant="h3" >
                    Зачем мне это?
                </Typography>
                <Typography variant="body1">
                    Тут текст про то а нафига это.
                </Typography>
            </div>
        </Container>
    );
}
export default HelloScreen;