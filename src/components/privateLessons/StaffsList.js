import { useSelector } from "react-redux";
import classes from '../../assets/styleSheets/privateLessons.module.scss'
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@material-ui/core";
import Instructor from "../kits/Instructor";
import transform from "../../utilities/transform";
import noResultIcon from '../../assets/images/icons/noResultIcon.svg'
import Link from 'next/link';
const StaffsList = ({ handlePaginate }) => {
    const staffs = useSelector((state) => state.privateLessons.staffs);
    const staffLoading = useSelector((state) => state.privateLessons.staffsLoading);
    return (
        <div className={classes.privateLessonsStaffListContainer}>
            {staffLoading ?
                <p style={{ textAlign: "center", marginTop: 53 }}>
                    <CircularProgress
                        color="primary"
                        style={{ width: 20, height: 20 }} />
                </p>
                :
                staffs.data.length > 0 ?
                    <InfiniteScroll
                        dataLength={staffs.data.length}
                        next={() => handlePaginate(parseInt(staffs.page) + 1)}
                        hasMore={parseInt(staffs.page) + 1 < staffs.total_pages}
                        loader={
                            <p style={{ textAlign: "center", marginTop: 53 }}>
                                <CircularProgress
                                    color="primary"
                                    style={{ width: 20, height: 20 }} /></p>
                        }
                    >
                        <div className={classes.privateLessonsStaffList}>
                            {
                                
                                staffs.data.map((staff) => (
                                    <Link href={`privateLessons/${staff.staff_id}/${staff.package_id}`}>
                                        <a>
                                            <Instructor
                                                sm
                                                image={process.env.REACT_APP_IMAGE_URL + staff.staff_avatar}
                                                name={staff.staff_name + " " + staff.staff_family}
                                                instrument={staff.package_name}
                                                languages={transform.staffLangs(staff.json)}
                                            />
                                        </a>
                                    </Link>
                                ))

                            }

                        </div>
                    </InfiniteScroll>
                    :
                    <div className={classes.noResult}>
                        <img src={noResultIcon} />
                        <p>No Result Found!</p>
                    </div>
            }
        </div >
    )
}
export default StaffsList;