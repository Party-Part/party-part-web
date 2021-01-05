import React from 'react';
import Container from '@material-ui/core/Container';
import CreatePartyParentForm from "./CreatePartyParentForm";

function CreatePartyPage(props) {
    return (
        <Container className="Hello-page">
            <CreatePartyParentForm user={props.user}
                                   onCalculated={props.onCalculated}/>
        </Container>
    );
}

export default CreatePartyPage;