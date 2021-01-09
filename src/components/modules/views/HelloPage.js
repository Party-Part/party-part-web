import React from 'react';
import Hero from "./Hero";
import Values from "./Values";
import Categories from "./Categories";
import HowItWorks from "./HowItWorks";

function HelloPage(props) {
    return (
        <div>
            <Hero/>
            <Values/>
            <Categories/>
            <HowItWorks/>
        </div>

    );
}

export default HelloPage;