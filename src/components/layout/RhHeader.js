import { Button } from '@material-ui/core';
import classes from '../../assets/styleSheets/header.module.scss'
import Link from 'next/link';
import logoImg from '../../assets/images/logo.svg';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useMediaQuery, useTheme } from "@material-ui/core";

const RhHeader = ({ page }) => {
    const [sticky, setSticky] = useState(false)
    const theme = useTheme();
    const xl = useMediaQuery(theme.breakpoints.down(1900));
    const lg = useMediaQuery(theme.breakpoints.down(1600));
    const md = useMediaQuery(theme.breakpoints.down(1300));
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        let top;
        if (md) {
            top = 32;
        }
        else if (lg) {
            top = 36
        } else if (xl) {
            top = 45;
        }else{
            top = 55;
        }
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > top) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }
    return (
        <div className={clsx(classes.headerGrandContainer, sticky && classes.stickyHeaderContainer)}>
            <div className={classes.headerContainer}>
                <div className={classes.header}>
                    <div className={classes.headerLogo}>
                        <img src={logoImg} />
                    </div>
                    <div className={classes.navBar}>
                        <Link href="/"><a className={page == 'home' ? classes.active : ''}>home</a></Link>
                        <Link href="/privateLessons"><a className={page == 'privateLessons' ? classes.active : ''}>private lessons</a></Link>
                        <Link href="/events"><a className={page == 'events' ? classes.active : ''}>group lessons</a></Link>
                        <Link href="/blog"><a className={page == 'blog' ? classes.active : ''}>blog</a></Link>
                        <Link href="/partners"><a className={page == 'partners' ? classes.active : ''}>partners</a></Link>
                        <Link href="/contactUs"><a className={page == 'contact' ? classes.active : ''}>contact us</a></Link>
                        <Link href="/aboutUs"><a className={page == 'about' ? classes.active : ''}>about us</a></Link>
                    </div>
                    <div className={classes.headerLoginBtn}>
                        <Button>
                            Log in
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RhHeader;