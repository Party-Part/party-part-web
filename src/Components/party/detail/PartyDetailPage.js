import Container from "@material-ui/core/Container";
import React from "react";
import {Typography} from "@material-ui/core";


// todo: mock data, calc real date in backend
const calculatedDuties = {};

function PartyDetailPage(props) {
    return (
        <Container className="Hello-page">
            <div>
                <Typography variant="body1"> Айди {props.partyId}</Typography>
            </div>
        </Container>
    );
}

export default PartyDetailPage;