import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from '../../assets/styleSheets/events.module.scss'
import EventsList from "./EventsList";
import { getEventsList } from "../../../redux/events";
import EventsSidebar from "./EventsSidebar";
import EventsHeader from "./EventsHeader";
import Media from "../layout/Media";
const Events = ({ packages, eventTypes }) => {
    const staffs = useSelector((state) => state.privateLessons.staffs);
    const [selectedPackages, setSelectedPackages] = useState([]);
    const [selectedEventType, setSelectedEventType] = useState(1);
    const [filter, setFilter] = useState();
    const [q, setQ] = useState('')
    const Dispatch = useDispatch();

    const handleSelectPackage = (id) => {
        let index = selectedPackages.indexOf(id);
        if (index == -1) {
            setSelectedPackages([...selectedPackages, id]);
            Dispatch(getEventsList(false, null, { q: q, view: filter, package_ids: [...selectedPackages, id].toString(), event_type: selectedEventType }, 1))
        } else {
            let tmp = selectedPackages;
            tmp.splice(index, 1);
            setSelectedPackages([...tmp]);
            Dispatch(getEventsList(false, null, { q: q, view: filter, package_ids: [...tmp].toString(), event_type: selectedEventType }, 1))
        }
    }
    const handleSearch = (force = false) => {
        if (force == true) {
            console.log('force')
            Dispatch(getEventsList(false, null, { q: '', sort: filter, package_ids: selectedPackages.toString() }, 1))
        } else {
            console.log('no force')

            handlePaginate()
        }
    }
    const handleChangeFilter = (filterp) => {
        if (filterp === filter) {
            setFilter(null)
            Dispatch(getEventsList(false, null, { q: q, view: null, package_ids: selectedPackages.toString(), event_type: selectedEventType }, 1))
        } else {
            setFilter(filterp)
            Dispatch(getEventsList(false, null, { q: q, view: filterp, package_ids: selectedPackages.toString(), event_type: selectedEventType }, 1))
        }

    }
    // useEffect(() => {
    //     handlePaginate()
    // }, [filter, selectedPackages, selectedEventType])

    const handlePaginate = (page = 1) => {
        Dispatch(getEventsList(false, null, { q: q, view: filter, package_ids: selectedPackages.toString(), event_type: selectedEventType }, page))
    }

    const handleSelectEventType = (e) => {
        setSelectedEventType(e)
        Dispatch(getEventsList(false, null, { q: q, view: filter, package_ids: selectedPackages.toString(), event_type: e }, 1))
    }


    return (
        <div className={classes.eventsMainContainer}>
            <EventsSidebar
                packages={packages}
                handleSelectPackage={handleSelectPackage}
                selectedPackages={selectedPackages}
                eventTypes={eventTypes}
                selectedEventType={selectedEventType}
                handleSelectEventType={handleSelectEventType}
            />
            <div className={classes.staffsContainer}>
                <EventsHeader
                    handleChangeFilter={handleChangeFilter}
                    filter={filter}
                    _handleSearch={handleSearch}
                    q={q}
                    setQ={setQ}
                />
                <EventsList handlePaginate={handlePaginate} />
            </div>
        </div>
    )
}
export default Events;