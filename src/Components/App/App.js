import React from 'react';
import HelloPage from '../hello/HelloPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreatePartyPage from "../party/CreatePartyPage";
import Copyright from "./Copyright";
// function App() {
//     return (
//         <HelloPage logo={logo}/>
//     );
// }

const App = () => {
    return (
        <React.Fragment>
            <section className="App">
                <Router>
                    <Route exact path="/" component={HelloPage}/>
                    <Route exact path="/party" component={CreatePartyPage}/>
                </Router>
            </section>
            <Copyright/>
        </React.Fragment>
    );
};
export default App;