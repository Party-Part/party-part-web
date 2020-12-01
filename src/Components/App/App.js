import React from 'react';
import HelloPage from '../hello/HelloPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreatePartyPage from "../party/create/CreatePartyPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";
import PartyDetailPage from "../party/detail/PartyDetailPage";
import AppAppBar from "../modules/views/AppAppBar";
import AppFooter from "../modules/views/AppFooter";

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
            {/*<AppBar position="absolute" color="primary" className={classes.appBar}>*/}
            {/*    <Toolbar>*/}
            {/*        <Typography variant="h6" color="inherit" noWrap>*/}
            {/*            Party Part*/}
            {/*        </Typography>*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>*/}
            <AppAppBar/>
            <section className="App">
                <Router>
                    <Route exact path="/" component={HelloPage}/>
                    <Route exact path="/party" component={CreatePartyPage}/>
                    <Route exact path="/party/:id" render={renderPartyDetailPage}/>
                </Router>
            </section>
            <AppFooter/>
        </React.Fragment>
    );
};
export default App;

const renderPartyDetailPage = (props) => {
    return <PartyDetailPage partyId={props.match.params.id}/>
}