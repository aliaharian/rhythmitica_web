import classes from '../../assets/styleSheets/footer.module.scss'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ibook from '../../assets/images/icons/ibook.svg'
import loops from '../../assets/images/icons/loops.svg'
import ssl from '../../assets/images/icons/ssl.jpg'

import facebook from '../../assets/images/icons/facebook.svg'
import pinterest from '../../assets/images/icons/pinterest.svg'
import instagram from '../../assets/images/icons/instagram.svg'
import gplus from '../../assets/images/icons/gplus.svg'
import twitter from '../../assets/images/icons/twitter.svg'

import clsx from 'clsx';
const Footer = () => {
    return (
        <>
            <div className={classes.footerGrandContainer}>
                <div className={classes.footerContainer}>
                    <div className={classes.footerAbout}>
                        <h1>RHYTHMITICA</h1>
                        <p>
                            Rhythmitica is the very first world online music academy established in 2012 based in Toronto,
                            Canada. The academic tutoring of traditional world music to interested students across the globe
                            and promoting world music are the main goals of Rhythmitica.
                        </p>
                    </div>
                    <div className={classes.footerLinks}>
                        <h3>Site Links</h3>
                        <ul>
                            <li>
                                <Link href={'#'}><a>Home</a></Link>
                            </li>
                            <li>
                                <Link href={'#'}><a>Private lessons</a></Link>
                            </li>
                            <li>
                                <Link href={'#'}><a>Group lessons</a></Link>
                            </li>
                            <li>
                                <Link href={'#'}><a>Blog</a></Link>
                            </li>
                            <li>
                                <Link href={'#'}><a>Branch</a></Link>
                            </li>
                            <li>
                                <Link href={'#'}><a>Contact us</a></Link>
                            </li>
                            <li>
                                <Link href={'#'}><a>About us</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.footerDownload}>
                        <h3>Downloads</h3>
                        <Link href={'#'}>
                            <a>
                                <img src={ibook} />
                                <p>Our Free iBook</p>
                            </a>
                        </Link>
                        <Link href={'#'}>
                            <a>
                                <img src={loops} />
                                <p>Persion Loops App</p>
                            </a>
                        </Link>
                    </div>
                    <div className={classes.footerSsl}>
                        <h3>PositiveSSL Secure</h3>
                        <img src={ssl} />
                    </div>
                </div>
            </div>
            <div className={classes.copyrightGrandContainer}>
                <div className={classes.copyrightContainer}>
                    <p>© 2020 Rhythmitica. All rights reserved</p>
                    <div className={classes.copyrightLinks}>
                    <Link href={'#'}><a><img src={instagram}/></a></Link>
                    <Link href={'#'}><a><img src={pinterest}/></a></Link>
                    <Link href={'#'}><a><img src={twitter}/></a></Link>
                    <Link href={'#'}><a><img src={facebook}/></a></Link>
                    <Link href={'#'}><a><img src={gplus}/></a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;