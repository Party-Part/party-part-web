import React from 'react';
import HelloPage from '../hello/HelloPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreatePartyPage from "../party/create/CreatePartyPage";
import Copyright from "./Copyright";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import PartyDetailPage from "../party/detail/PartyDetailPage";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    }
}));

const App = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="absolute" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Party Part
                    </Typography>
                </Toolbar>
            </AppBar>
            <section className="App">
                <Router>
                    <Route exact path="/" component={HelloPage}/>
                    <Route exact path="/party" component={CreatePartyPage}/>
                    <Route exact path="/party/:id" render={renderPartyDetailPage}/>
                </Router>
            </section>
            <Copyright/>
        </React.Fragment>
    );
};
export default App;

const renderPartyDetailPage = (props) => {
    return <PartyDetailPage partyId={props.match.params.id}/>
}