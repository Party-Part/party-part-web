import React from 'react';
import Container from '@material-ui/core/Container';
import CreatePartyParentForm from "./CreatePartyParentForm";

function CreatePartyPage(props) {
    return (
        <Container className="Hello-page">
            <CreatePartyParentForm/>
        </Container>
    );
}

export default CreatePartyPage;