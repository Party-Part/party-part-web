import React from 'react';
import HelloPage from '../hello/HelloPage'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePartyPage from "../party/CreatePartyPage";
// function App() {
//     return (
//         <HelloPage logo={logo}/>
//     );
// }

const App = () => {
    return (
        <section className="App">
            <Router>
                <Route exact path="/" component={HelloPage} />
                <Route exact path="/party" component={CreatePartyPage} />
            </Router>
        </section>
    );
};
export default App;