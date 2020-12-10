// import { red } from '@material-ui/core/colors';
// import { createMuiTheme } from '@material-ui/core/styles';
// // A custom theme for this app
// const theme = createMuiTheme({
//     palette: {
//         type: 'light',
//         primary: {
//             main: '#212121',
//             light: '#484848',
//             dark: '#000000',
//         },
//         secondary: {
//             main: '#26a69a',
//             light: '#64d8cb',
//             dark: '#00766c',
//         },
//         error: {
//             main: red.A400,
//         },
//         background: {
//             default: '#ffffff',
//         },
//     },
//     overrides: {
//         MuiPaper: {
//             root: {
//                 padding: '20px 10px',
//                 margin: '10px',
//                 backgroundColor: '#ffffff', // 5d737e
//             },
//         },
//         MuiButton: {
//             root: {
//                 margin: '5px',
//             },
//         },
//         MuiTypography: {
//             root: {
//                 color: '#111010'
//             }
//         }
//     },
// });
// export default theme;


import {createMuiTheme} from '@material-ui/core/styles';
import {green, grey, red} from '@material-ui/core/colors';

const rawTheme = createMuiTheme({
    palette: {
        // primary: {
        //     main: '#f7e461',
        //     light: '#f5e9a2',
        //     dark: '#ac9a22',
        // },
        // secondary: {
        //     main: '#a3a4a6',
        //     light: '#dbdada',
        //     dark: '#3c3e3e',
        // },
        secondary: {
            main: '#f7e461',
            light: '#f5e9a2',
            dark: '#ac9a22',
        },
        primary: {
            main: '#a3a4a6',
            light: '#dbdada',
            dark: '#3c3e3e',
        },
        warning: {
            main: '#ffc071',
            dark: '#ffb25e',
        },
        error: {
            light: red[50],
            main: red[500],
            dark: red[700],
        },
        success: {
            light: green[50],
            main: green[500],
            dark: green[700],
        },
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300, // Work Sans
        fontWeightRegular: 400, // Work Sans
        fontWeightMedium: 700, // Roboto Condensed
    },
});

const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: "'Roboto Condensed', sans-serif",
    textTransform: 'uppercase',
};

const theme = {
    ...rawTheme,
    palette: {
        ...rawTheme.palette,
        background: {
            ...rawTheme.palette.background,
            default: rawTheme.palette.common.white,
            placeholder: grey[200],
        },
    },
    typography: {
        ...rawTheme.typography,
        fontHeader,
        h1: {
            ...rawTheme.typography.h1,
            ...fontHeader,
            // letterSpacing: 0,
            fontSize: 60,
        },
        h2: {
            ...rawTheme.typography.h2,
            ...fontHeader,
            fontSize: 48,
        },
        h3: {
            ...rawTheme.typography.h3,
            ...fontHeader,
            fontSize: 42,
        },
        h4: {
            ...rawTheme.typography.h4,
            ...fontHeader,
            fontSize: 36,
        },
        h5: {
            ...rawTheme.typography.h5,
            ...fontHeader,
            fontSize: 24,
        },
        h6: {
            ...rawTheme.typography.h6,
            ...fontHeader,
            fontSize: 18,
        },
        subtitle1: {
            ...rawTheme.typography.h5,
            fontSize: 20,
            fontWeight: rawTheme.typography.fontWeightLight,
        },
        subtitle2: {
            ...rawTheme.typography.subtitle2,
            fontSize: 20,
            fontWeight: rawTheme.typography.fontWeightLight
        },
        body1: {
            ...rawTheme.typography.body2,
            fontWeight: rawTheme.typography.fontWeightRegular,
            fontSize: 16,
        },
        body2: {
            ...rawTheme.typography.body1,
            fontSize: 14,
        },
    },
};

export default theme;
