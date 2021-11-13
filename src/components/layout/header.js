import { Button } from '@material-ui/core';
import classes from '../../assets/styleSheets/header.module.scss'
import Link from 'next/link';
import logoImg from '../../assets/images/logo.svg';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
const Header = () => {
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 55) {
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
                        <Link href="/home"><a className={classes.active}>home</a></Link>
                        <Link href="/home"><a>private lessons</a></Link>
                        <Link href="/home"><a>group lessons</a></Link>
                        <Link href="/home"><a>blog</a></Link>
                        <Link href="/home"><a>branch</a></Link>
                        <Link href="/home"><a>contact us</a></Link>
                        <Link href="/home"><a>about us</a></Link>
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

export default Header;