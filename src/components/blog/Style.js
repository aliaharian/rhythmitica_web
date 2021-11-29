import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    blogHeader: {
        '& .MuiTabs-indicator': {
            backgroundColor: '#d90368',
            height: 3
        },
        '& .MuiTabs-scroller': {
            height: 70
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
            textTransform: 'capitalize'
        },
        '& .MuiTab-textColorInherit':{
            opacity:1
        }


    }
}));