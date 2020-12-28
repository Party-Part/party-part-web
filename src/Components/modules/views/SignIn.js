import React from 'react';
import {Field, Form, FormSpy} from 'react-final-form';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {email, required} from '../form/validation';
import AppAppBar from "./AppAppBar";
import AppForm from "../components/AppForm";
import Typography from "../components/Typography";
import RFTextField from "../form/RFTextField";
import FormFeedback from "../form/FormFeedback";
import FormButton from "../form/FormButton";
import withRoot from "../withRoot";
import Redirect from "react-router-dom/es/Redirect";
import {useAuth} from "../../auth/Auth";


const useStyles = makeStyles((theme) => ({
    layout: {
        marginBottom: '96px'
    },
    form: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    feedback: {
        marginTop: theme.spacing(1),
    },
}));

function SignIn() {
    const classes = useStyles();
    const [sent, setSent] = React.useState(false);
    const [isLoggedIn, setLoggedIn] = React.useState(false);
    const {setAuthTokens} = useAuth();

    const validate = (values) => {
        const errors = required(['login', 'password'], values);

        if (!errors.email) {
            const emailError = email(values.email);
            if (emailError) {
                errors.email = emailError;
            }
        }

        return errors;
    };

    const handleSubmit = (values) => {
        console.log(values);
        login(values)
    };

    if (isLoggedIn) {
        return <Redirect to="/"/>;
    }

    const login = (values) => {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                login: values.login,
                password: values.password
            })
        };
        console.log(requestOptions.body)
        fetch('http://130.193.43.122:8081/users/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data[0].user_id);
                if (data[0].user_id) {
                    setAuthTokens(data[0].user_id);
                    setLoggedIn(true);
                }
                return data;
            })
            .then(data => setSent(true))
    }

    return (
        <React.Fragment>
            <AppAppBar/>
            <main className={classes.layout}>
                <AppForm>
                    <React.Fragment>
                        <Typography variant="h4" gutterBottom marked="center" align="center">
                            Войти
                        </Typography>
                        <Typography variant="body2" align="center">
                            {'Нет аккаунта? '}
                            <Link
                                href="/sign-up/"
                                align="center"
                                underline="always"
                            >
                                Регистрация тут
                            </Link>
                        </Typography>
                    </React.Fragment>
                    <Form
                        onSubmit={handleSubmit}
                        subscription={{submitting: true}}
                        validate={validate}
                    >
                        {({handleSubmit: handleSubmit2, submitting}) => (
                            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
                                <Field
                                    autoComplete="login"
                                    autoFocus
                                    component={RFTextField}
                                    disabled={submitting || sent}
                                    fullWidth
                                    label="Логин"
                                    margin="normal"
                                    name="login"
                                    required
                                    size="large"
                                />
                                <Field
                                    fullWidth
                                    size="large"
                                    component={RFTextField}
                                    disabled={submitting || sent}
                                    required
                                    name="password"
                                    autoComplete="current-password"
                                    label="Пароль"
                                    type="password"
                                    margin="normal"
                                />
                                <FormSpy subscription={{submitError: true}}>
                                    {({submitError}) =>
                                        submitError ? (
                                            <FormFeedback className={classes.feedback} error>
                                                {submitError}
                                            </FormFeedback>
                                        ) : null
                                    }
                                </FormSpy>
                                <FormButton
                                    className={classes.button}
                                    disabled={submitting || sent}
                                    size="large"
                                    color="secondary"
                                    fullWidth
                                >
                                    {submitting || sent ? 'Секунду…' : 'Войти'}
                                </FormButton>
                            </form>
                        )}
                    </Form>
                    <Typography align="center">
                        <Link underline="always" href="/forgot-password/">
                            Забыли пароль?
                        </Link>
                    </Typography>
                </AppForm>
            </main>
        </React.Fragment>
    );
}

export default withRoot(SignIn);
