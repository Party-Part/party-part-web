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

    const validate = (values) => {
        const errors = required(['email', 'password'], values);

        if (!errors.email) {
            const emailError = email(values.email);
            if (emailError) {
                errors.email = emailError;
            }
        }

        return errors;
    };

    const handleSubmit = () => {
        setSent(true);
    };

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
                                    autoComplete="email"
                                    autoFocus
                                    component={RFTextField}
                                    disabled={submitting || sent}
                                    fullWidth
                                    label="Почта"
                                    margin="normal"
                                    name="email"
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
