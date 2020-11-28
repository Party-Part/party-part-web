import React from 'react';
import './HelloPage.css';
import logo from '../../logo.svg';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";

function HelloPage(props) {
    return (
        <Container className="Hello-page">
            <div>
                <img src={logo} className="Hello-page-logo" alt="logo"/>
                <Typography variant="h2" component="h1" gutterBottom>
                    PartyPart. Split your duties.
                </Typography>
                <Button component={Link} to="/party" variant="contained" color="primary">
                    Разделить расходы11
                </Button>
                <Divider variant="middle"/>
                <Typography variant="h3">
                    Как это работает?
                </Typography>
                <Typography variant="body1">
                    Тут текст про то как это все работает.
                </Typography>
                <Divider variant="middle"/>
                <Typography variant="h3">
                    Зачем мне это?
                </Typography>
                <Typography variant="body1">
                    Тут текст про то а нафига это.
                </Typography>
            </div>
        </Container>
    );
}

export default HelloPage;