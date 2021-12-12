import { useSelector } from "react-redux";
import classes from '../../assets/styleSheets/events.module.scss'
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@material-ui/core";
import Event from "../kits/Event";
import transform from "../../utilities/transform";
import noResultIcon from '../../assets/images/icons/noResultIconGreen.svg'
import Link from 'next/link';
const EventsList = ({ handlePaginate }) => {
    const events = useSelector((state) => state.events.events);
    const eventsLoading = useSelector((state) => state.events.eventsLoading);
    console.log('eventsLoading',eventsLoading)
    return (
        <div className={classes.eventsListContainer}>
            {eventsLoading ?
                <p style={{ textAlign: "center", marginTop: 53 }}>
                    <CircularProgress
                        color="primary"
                        style={{ width: 20, height: 20 }} />
                </p>
                :
                events.data.length > 0 ?
                    <InfiniteScroll
                        dataLength={events.data.length}
                        next={() => handlePaginate(parseInt(events.current_page) + 1)}
                        hasMore={parseInt(events.current_page) < events.last_page}
                        loader={
                            <p style={{ textAlign: "center", marginTop: 53 }}>
                                <CircularProgress
                                    color="primary"
                                    style={{ width: 20, height: 20 }} /></p>
                        }
                    >
                        <div className={classes.eventsList}>
                            {
                                events.data.map((event) => (
                                    // <Link href={'#'}>
                                    //     <a>
                                    <Event
                                        image={process.env.REACT_APP_IMAGE_URL + event.banner}
                                        name={event.title}
                                        instructor={event.staff.user.name + " " + event.staff.user.family}
                                        price={event.price + " $"}
                                        sessions={event.sessions.length}
                                        whiteBg
                                    />
                                    //     </a>
                                    // </Link>
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
export default EventsList;