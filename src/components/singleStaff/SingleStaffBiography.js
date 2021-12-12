import { Button } from '@material-ui/core';
import classes from '../../assets/styleSheets/singleStaff.module.scss'
const SingleStaffBiography = ({ staffInfo, type = 'biography' }) => {
    return (
        <div className={classes.staffBiography}>
            <h4>{staffInfo.staff_name} {staffInfo.staff_family} {type}</h4>
            <div dangerouslySetInnerHTML={{ __html: type == 'artworks' ? staffInfo.staff_artworks : staffInfo.staff_biography }}></div>
        </div>
    )
};

export default SingleStaffBiography