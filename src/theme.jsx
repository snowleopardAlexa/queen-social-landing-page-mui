import { createTheme } from '@material-ui/core';
import { pink, teal, cyan } from '@material-ui/core/colors';


export const theme = createTheme ({
    palette: {
        primary: {
            main: pink[600],
        },
        secondary: {
            main: teal[700],
        },
        success: {
            main: cyan[600],
        },
    },
})