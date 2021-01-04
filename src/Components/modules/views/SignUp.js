import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {Field, Form, FormSpy} from 'react-final-form';
import {email, required} from '../form/validation';
import AppAppBar from "./AppAppBar";
import AppForm from "../components/AppForm";
import Typography from "../components/Typography";
import RFTextField from "../form/RFTextField";
import FormButton from "../form/FormButton";
import FormFeedback from "../form/FormFeedback";
import withRoot from "../withRoot";
import {useAuth} from "../../auth/Auth";
import {register} from "../../../service/user";


const useStyles = makeStyles((theme) => ({
    layout: {
        marginBottom: '96px'
    },
    form: {
        marginTop: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    feedback: {
        marginTop: theme.spacing(1),
    },
}));

function SignUp() {
    const classes = useStyles();
    const [sent, setSent] = React.useState(false);
    const history = useHistory();
    const {setAuthTokens} = useAuth();

    const validate = (values) => {
        const errors = required(['firstName', 'login', 'email', 'password'], values);

        if (!errors.email) {
            const emailError = email(values.email);
            if (emailError) {
                errors.email = emailError;
            }
        }

        return errors;
    };

    const reg = (values) => {
        setSent(true)
        register(values)
            .then(response => response.json())
            .then(data => {
                setAuthTokens(data);
                return data;
            })
            .then(data => setSent(false))
    }

    function handleSubmit(values) {
        try {
            reg(values);
            history.push("/");
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <React.Fragment>
            <AppAppBar/>
            <main className={classes.layout}>
                <AppForm>
                    <React.Fragment>
                        <Typography variant="h4" gutterBottom marked="center" align="center">
                            Регистрация
                        </Typography>
                        <Typography variant="body2" align="center">
                            <Link href="/sign-in/" underline="always">
                                Уже зарегестрированны?
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
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            autoFocus
                                            component={RFTextField}
                                            disabled={submitting || sent}
                                            autoComplete="fname"
                                            fullWidth
                                            label="Имя"
                                            name="firstName"
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            component={RFTextField}
                                            disabled={submitting || sent}
                                            // autoComplete="lname"
                                            fullWidth
                                            label="Логин"
                                            name="login"
                                            required
                                        />
                                    </Grid>
                                </Grid>
                                <Field
                                    autoComplete="email"
                                    component={RFTextField}
                                    disabled={submitting || sent}
                                    fullWidth
                                    label="Почта"
                                    margin="normal"
                                    name="email"
                                    required
                                />
                                <Field
                                    fullWidth
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
                                    color="secondary"
                                    fullWidth
                                >
                                    {submitting || sent ? 'Секунду…' : 'Регистрация'}
                                </FormButton>
                            </form>
                        )}
                    </Form>
                </AppForm>
            </main>
        </React.Fragment>
    );
}

export default withRoot(SignUp);
