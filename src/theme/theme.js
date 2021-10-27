import {createTheme} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
    anchorOriginBottomRight: {
        right: 'unset',
        left: 20,
        backgroundColor: 'red'
    },

    direction: "rtl",
    shadows: ["none"],
    typography: {
        fontFamily: [
            // "chistaYekanR",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
        ].join(","),
    },
    font: {
        regular: 'chistaYekanR',
        bold: 'chistaYekanB',
        medium: 'chistaYekanM',
        latin: 'chistaYekanLatin',

    },
    textColor: {
        primary: '#0c0b31',
        secondary: '#0c0b31cc',
        disabled: '#0c0b3180',
        border: '#0c0b3126',
        avatarBorder: '#0c0b3133',
        fivePercent: '#0c0b310d',
        percent70: '#0c0b31b3',
        percent50: '#0c0b3180',
        threePercent: '#0c0b3108',
        success: '#34c278',
        successAlt: '#00dbb51a',
        error: '#ff6575',
        errorAlt: '#ff65751a',
        tooltip: '#3a3958',
        dark:'#050038'
    },
    buttonColor: {
        normal: '#3f53d9',
        hover: '#3748bb'
    },
    palette: {
        primary: {
            main: "#1641FF",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
        border: {
            main: "rgba(224, 224, 224, 1)",
        },
        secondaryText: {
            main: "#0c0b31cc",
        },
        primaryText: {
            main: "#0c0b31",
        },
    },
});

export default theme;
