import { createTheme } from '@material-ui/core';
import { pink, teal } from '@material-ui/core/colors';


export const theme = createTheme ({
    palette: {
        primary: {
            main: pink[600],
        },
        secondary: {
            main: teal[700],
        }
    },
})