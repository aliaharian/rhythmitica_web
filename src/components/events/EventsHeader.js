import { Button, ClickAwayListener } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import classes from '../../assets/styleSheets/events.module.scss'
import searchIcon from '../../assets/images/icons/searchIcon.svg'
import searchIconGreen from '../../assets/images/icons/searchIconGreen.svg'
import { useState } from "react";
import Image from 'next/image'

const EventsHeader = ({ filter, handleChangeFilter, _handleSearch, q, setQ }) => {
    const [openSearch, setOpenSearch] = useState(false)
    const handleSearch = () => {
        if (!openSearch) {
            setOpenSearch(true)
        } else {
            _handleSearch()
        }
    }

    const handleClickAway = () => {
        if (q === '') {
            setOpenSearch(false)
        }
    }
    const handleKeyPress = (e) => {
        var code = e.keyCode || e.which;
        if (code == 13) {
            _handleSearch()
        }
    }
    return (
        <div className={classes.eventsHeader}>
            <div className={classes.eventsSort}>
                <p>View :</p>
                <Button onClick={() => { handleChangeFilter('UPCOMING') }} className={clsx(classes.filterButton, filter == 'UPCOMING' && classes.activeBtn)}>Upcoming Events</Button>
                <Button onClick={() => { handleChangeFilter('PAST') }} className={clsx(classes.filterButton, filter == 'PAST' && classes.activeBtn)}>Past Events</Button>
            </div>
            <ClickAwayListener
                onClickAway={handleClickAway}>
                <div className={clsx(classes.eventsSearch, openSearch && classes.eventsSearchOpen)} >
                    <input type="text" value={q} onKeyPress={handleKeyPress} onChange={(e) => setQ(e.target.value)} />
                    <div onClick={handleSearch} className={classes.searchIconConntainer}>
                        <div>
                        <Image layout="fill" alt="" src={openSearch ? searchIconGreen : searchIcon} />
                        </div>
                    </div>
                </div>
            </ClickAwayListener>




        </div>
    )
}
export default EventsHeader;