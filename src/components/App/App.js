import React, {useState} from 'react';
import HelloPage from '../modules/views/HelloPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreatePartyPage from "../modules/views/party/create/CreatePartyPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import PartyDetailPage from "../modules/views/party/detail/PartyDetailPage";
import AppAppBar from "../modules/views/AppAppBar";
import AppFooter from "../modules/views/AppFooter";
import SignUp from "../modules/views/SignUp";
import SignIn from "../modules/views/SignIn";
import ForgotPassword from "../modules/views/ForgotPassword";
import PrivateRoute from "../auth/PrivateRoute";
import {AuthContext} from "../auth/Auth";
import UserHome from "../modules/views/UserHome";


const App = () => {
    const userIdFromStorage = JSON.parse(localStorage.getItem("userId"));
    const [userIdInStorage, setUserIdInStorage] = useState(userIdFromStorage);
    const [isAuthenticated, setIsAuthenticated] = useState(userIdInStorage)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const setUserId = (data) => {
        if (data.user_id) {
            localStorage.setItem("userId", JSON.stringify(data.user_id));
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data)
            setUserIdInStorage(data.user_id);
            setIsAuthenticated(true);
        } else {
            handleLogout();
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("user");
        setUserIdInStorage();
        setIsAuthenticated(false);
        setUser()
    }

    const renderPartyDetailPage = (props) => {
        return <PartyDetailPage partyId={props.match.params.id}/>
    }

    return (
        <AuthContext.Provider value={{userIdInStorage, setAuthTokens: setUserId}}>
            <React.Fragment>
                <CssBaseline/>
                <AppAppBar isAuthenticated={isAuthenticated} onLogout={handleLogout} user={user}/>
                <section className="App">
                    <Router>
                        <Route exact path="/" component={HelloPage}/>
                        <Route exact path="/sign-up" component={SignUp}/>
                        <Route exact path="/sign-in" component={SignIn}/>
                        <Route exact path="/forgot-password" component={ForgotPassword}/>
                        <PrivateRoute exact path="/party" component={() => <CreatePartyPage user={user}/>}/>
                        <PrivateRoute exact path="/party/:id" component={renderPartyDetailPage}/>
                        <PrivateRoute exact path="/user/home" component={() => <UserHome user={user}/>}/>
                    </Router>
                </section>
                <AppFooter/>
            </React.Fragment>
        </AuthContext.Provider>
    );
};
export default App;