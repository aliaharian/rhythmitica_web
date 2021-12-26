import {createTheme} from "@material-ui/core/styles";

export const globalStyles = () => {

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920
            },
        },
    });
    return {

        "@global": {
            body: {
                fontFamily: "nirmala",
                fontSize: "14px",
                backgroundColor: "#fff",
                color: "#291720",
                lineHeight: 2.14,
                "&::--webkit-scrollbar": {
                    width: "6px",
                    backgroundColor: "#F5F5F5",
                },
            },
            input: {
                '&:-internal-autofill-selected ': {
                    backgroundColor: '#fff!important',
                    webkitBoxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white !important',
                    boxShadow: ' inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white !important'
                }

            },

            ".Mui-disabled": {
                // backgroundColor: '#fff',
                // border: '1px solid rgba(0, 0, 0, 0.12)'

            },
            '.MuiSnackbarContent-root': {
                color: '#fff!important'
            },
            ".MuiExpansionPanelSummary-expandIcon.Mui-expanded": {
                "& svg": {
                    backgroundColor: "#1641FF",
                },
            },
            ".MuiExpansionPanel-root.Mui-expanded": {
                margin: "3px 0 !important",
            },
            ".MuiAutocomplete-popupIndicator": {
                marginLeft: "9px !important",
            },
            "#errorToast": {
                width: 'min-content',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom:15,
                margin:'0 auto',
                [theme.breakpoints.down('sm')]: {
                    width: 'auto',
                    marginBottom:20
                },
                '& .MuiPaper-root': {
                    width: 'max-content',
                    minWidth: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 400,
                    maxWidth: 288,
                    padding: '6px 38px',
                    '& .MuiSnackbarContent-message': {
                        padding: '6px 0',
                        width: 'max-content',
                        '& span': {
                            display: 'block',
                            width: '100%',
                            textAlign: 'center',
                            fontSize: 11
                        }
                    }
                }
            },
            "#infoToast": {
                width: 'min-content',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom:15,
                margin:'0 auto',
                [theme.breakpoints.down('sm')]: {
                    width: 'auto',
                    marginBottom:20
                },
                '& .MuiPaper-root': {
                    width: 'max-content',
                    minWidth: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 400,
                    maxWidth: 288,
                    padding: '11px 38px',
                    backgroundColor:'#0c0b31cc',
                    '& .MuiSnackbarContent-message': {
                        padding: '6px 0',
                        width: 'max-content',
                        '& span': {
                            display: 'block',
                            width: '100%',
                            textAlign: 'center',
                            fontSize: 13,
                            // color:'#0c0b31'
                        }
                    }
                }
            },
            "MuiAvatar-colorDefault": {
                backgroundColor: "#ffa352",
            },
            ".MuiMenu-list": {
                "& option": {
                    margin: 10,
                    cursor: "pointer",
                },
            },
            ".MuiPaper-root": {
                color: "#0c0b31cc",
            }
        },
    }
};
