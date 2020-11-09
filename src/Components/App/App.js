import logo from '../../logo.svg';
import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper } from '@material-ui/core';

function App() {
    return (
        <Container maxWidth="sm" className="App">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="h4" component="h1" gutterBottom>
                    PartyPart. Split your duties.
                </Typography>
                <Button variant="contained" color="primary">
                    Разделить расходы
                </Button>
            </div>
        </Container>
    );
}
export default App;