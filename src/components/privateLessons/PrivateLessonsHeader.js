import { Button, ClickAwayListener } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import classes from '../../assets/styleSheets/privateLessons.module.scss'
import searchIcon from '../../assets/images/icons/searchIcon.svg'
import searchIconPurple from '../../assets/images/icons/searchIconPurple.svg'
import { useState } from "react";

const PrivateLessonsHeader = ({ filter, handleChangeFilter, _handleSearch, q, setQ }) => {
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
        <div className={classes.privateLessonsHeader}>
            <div className={classes.privateLessonsSort}>
                <p>Sort By :</p>
                <Button onClick={() => { handleChangeFilter('NAME') }} className={clsx(classes.filterButton, filter == 'NAME' && classes.activeBtn)}>Instructor Name</Button>
                <Button onClick={() => { handleChangeFilter('PRICE') }} className={clsx(classes.filterButton, filter == 'PRICE' && classes.activeBtn)}>Price</Button>
            </div>
            <ClickAwayListener
                onClickAway={handleClickAway}>
                <div className={clsx(classes.privateLessonsSearch, openSearch && classes.privateLessonsSearchOpen)} >
                    <input type="text" value={q} onKeyPress={handleKeyPress} onChange={(e) => setQ(e.target.value)} />
                    <img onClick={handleSearch} src={openSearch ? searchIconPurple : searchIcon} />
                </div>
            </ClickAwayListener>
        </div>
    )
}
export default PrivateLessonsHeader;