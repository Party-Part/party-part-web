import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#212121',
            light: '#484848',
            dark: '#000000',
        },
        secondary: {
            main: '#26a69a',
            light: '#64d8cb',
            dark: '#00766c',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#ffffff',
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                padding: '20px 10px',
                margin: '10px',
                backgroundColor: '#ffffff', // 5d737e
            },
        },
        MuiButton: {
            root: {
                margin: '5px',
            },
        },
        MuiTypography: {
            root: {
                color: '#111010'
            }
        }
    },
});
export default theme;