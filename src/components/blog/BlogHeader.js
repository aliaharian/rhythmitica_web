import { Button, ClickAwayListener, makeStyles, Tab, Tabs } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import classes from '../../assets/styleSheets/blog.module.scss'
import searchIcon from '../../assets/images/icons/searchIcon.svg'
import searchIconPink from '../../assets/images/icons/searchIconPink.svg'
import { useState } from "react";
import useStyles from './Style'
const BlogHeader = ({ categories, selectedCategory, handleSelectCategory, _handleSearch, q, setQ }) => {
    const [openSearch, setOpenSearch] = useState(false)

    const muiClass = useStyles();

    
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
        <div className={clsx(classes.blogHeader , muiClass.blogHeader)}>
            <Tabs
                value={selectedCategory}
                onChange={handleSelectCategory}
                textColor="inherit"
                indicatorColor="inherit"
                aria-label="blog categories"
                variant="fullWidth"
            >
                {categories.map((cat) => (
                    <Tab value={cat.id} label={cat.title} />
                ))}
            </Tabs>

            <ClickAwayListener
                onClickAway={handleClickAway}>
                <div className={clsx(classes.blogSearch, openSearch && classes.blogSearchOpen)} >
                    <input type="text" value={q} onKeyPress={handleKeyPress} onChange={(e) => setQ(e.target.value)} />
                    <img onClick={handleSearch} src={openSearch ? searchIconPink : searchIcon} />
                </div>
            </ClickAwayListener>




        </div>
    )
}
export default BlogHeader;