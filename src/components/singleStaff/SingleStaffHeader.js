import { Button } from '@material-ui/core';
import classes from '../../assets/styleSheets/singleStaff.module.scss'
import Image from 'next/image'

const SingleStaffHeader = ({ staffInfo }) => {
    return (
        <div className={classes.staffHeader}>
            <Image objectFit='cover' layout='fill' alt='' src={`${process.env.REACT_APP_IMAGE_URL}${JSON.parse(staffInfo.staff_package_json).banner}`} />
            <h2>{staffInfo.staff_name} {staffInfo.staff_family}</h2>
            <p>{staffInfo.package_name}</p>
            <Button href={`/privateLessons/${staffInfo.package_id}/${staffInfo.staff_id}/book`}>Book Now</Button>
            <div className={classes.bannerShadow}></div>
        </div>
    )
};

export default SingleStaffHeader