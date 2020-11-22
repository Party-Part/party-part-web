import React from 'react';
import Container from '@material-ui/core/Container';
import CreatePartyForm from "./CreatePartyForm";

function CreatePartyPage(props) {
    return (
        <Container className="Hello-page">
            <CreatePartyForm/>
        </Container>
    );
}

export default CreatePartyPage;