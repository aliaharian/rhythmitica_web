import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
    shadows: ["none"],
    typography: {
        fontFamily: [
            "nirmala",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
        ].join(","),
    },
    font: {
        regular: 'nirmala',
        bold: 'nirmalaB',
        latin: 'nirmalaS',

    },
    palette: {
        primary: {
            main: "#291720",
        },
        secondary: {
            main: "#820263",
        },
        error: {
            main: '#d90368',
        },
        background: {
            default: "#fff",
        }
    },
});

export default theme;
