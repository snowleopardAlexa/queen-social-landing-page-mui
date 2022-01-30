import { createTheme } from '@material-ui/core';
import { pink, purple } from '@material-ui/core/colors';


export const theme = createTheme ({
    palette: {
        primary: {
            main: purple[400],
        },
    },
    myButton: {
        backgroundColor: "red",
        color: "white",
        border: "1px solid black",
    }
})