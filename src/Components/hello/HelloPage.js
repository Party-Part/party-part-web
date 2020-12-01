import React from 'react';
import './HelloPage.css';
import Hero from "../modules/views/Hero";
import Values from "../modules/views/Values";
import Categories from "../modules/views/Categories";
import HowItWorks from "../modules/views/HowItWorks";

function HelloPage(props) {
    return (

        <div>
            {/*<img src={logo} className="Hello-page-logo" alt="logo"/>*/}
            {/*<Typography variant="h2" component="h1" gutterBottom>*/}
            {/*    PartyPart. Split your duties.*/}
            {/*</Typography>*/}
            {/*<Button component={Link} to="/party" variant="contained" color="primary">*/}
            {/*    Разделить расходы*/}
            {/*</Button>*/}
            {/*<Divider variant="middle"/>*/}
            {/*<Typography variant="h3">*/}
            {/*    Как это работает?*/}
            {/*</Typography>*/}
            {/*<Typography variant="body1">*/}
            {/*    Тут текст про то как это все работает.*/}
            {/*</Typography>*/}
            {/*<Divider variant="middle"/>*/}
            {/*<Typography variant="h3">*/}
            {/*    Зачем мне это?*/}
            {/*</Typography>*/}
            {/*<Typography variant="body1">*/}
            {/*    Тут текст про то а нафига это.*/}
            {/*</Typography>*/}
            <Hero/>
            <Values/>
            <Categories/>
            <HowItWorks/>
        </div>

    );
}

export default HelloPage;