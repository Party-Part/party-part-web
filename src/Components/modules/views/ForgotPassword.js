import React from 'react';
import {Field, Form, FormSpy} from 'react-final-form';
import {makeStyles} from '@material-ui/core/styles';
import {email, required} from "../form/validation";
import AppAppBar from "./AppAppBar";
import AppForm from "../components/AppForm";
import Typography from "../components/Typography";
import FormFeedback from "../form/FormFeedback";
import FormButton from "../form/FormButton";
import withRoot from "../withRoot";
import RFTextField from "../form/RFTextField";


const useStyles = makeStyles((theme) => ({
    layout: {
        marginBottom: '96px'
    },
    form: {
        marginTop: theme.spacing(3),
    },
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    feedback: {
        marginTop: theme.spacing(1),
    },
}));

function ForgotPassword() {
    const classes = useStyles();
    const [sent, setSent] = React.useState(false);

    const validate = (values) => {
        const errors = required(['email'], values);

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
                            Забыли пароль?
                        </Typography>
                        <Typography variant="body2" align="center">
                            {"Укажите почту, куда мы отправим ссылку для восстановления пароля"}
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
                                    autoFocus
                                    autoComplete="email"
                                    component={RFTextField}
                                    disabled={submitting || sent}
                                    fullWidth
                                    label="Почта"
                                    margin="normal"
                                    name="email"
                                    required
                                    size="large"
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
                                    {submitting || sent ? 'Секунду…' : 'Получить ссылку'}
                                </FormButton>
                            </form>
                        )}
                    </Form>
                </AppForm>
            </main>
        </React.Fragment>
    );
}

export default withRoot(ForgotPassword);
