import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    blogHeader: {
        '& .MuiTabs-indicator': {
            backgroundColor: '#d90368',
            height: 3
        },
        '& .MuiTabs-scroller': {
            height: 70,
            [theme.breakpoints.down(1900)]: {
                height: 62,

            },
            [theme.breakpoints.down(1600)]: {
                height: 54,

            },
        },
        '& .MuiTabs-flexContainer': {
            height: '100%'
        },
        '& .MuiTab-root': {
            padding: '6px 17px 9px',
            minWidth:10,
            marginRight:28
        },
        '& .MuiTab-wrapper':{
            textTransform: 'capitalize',
            fontSize:16 ,
            [theme.breakpoints.down(1900)]: {
                fontSize:14 ,

            },
            [theme.breakpoints.down(1600)]: {
                fontSize:12 ,

            },
        },
        '& .MuiTab-textColorInherit':{
            opacity:1
        }


    }
}));