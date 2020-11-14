import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import CreatePartyForm from "./CreatePartyForm";

function CreatePartyPage(props) {
    return (
        <Container className="Hello-page">
            <CreatePartyForm />
        </Container>
    );
}

export default CreatePartyPage;