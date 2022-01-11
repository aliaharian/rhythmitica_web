import { useEffect, useState } from 'react';
import classes from '../../assets/styleSheets/contact.module.scss'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';

import Link from 'next/link';

import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
    const [formValues, setFormValues] = useState()
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    const handleSendContact = () => {

    }
    return (
        <>
            <div className={classes.topColor}></div>
            <div className={classes.contactGrandContainer}>
                <div className={classes.contactContainer}>
                    <h2 className={classes.contactTitle}>Get In Touch</h2>
                    <div className={classes.contactBodyContainer}>
                        <div className={classes.contactForm}>
                            <div className={classes.contactFormGroup}>
                                <input value={formValues?.name || ""} placeholder={`Name`} name={`name`} onChange={handleChange} />
                                <input value={formValues?.lastName || ""} placeholder={`Last Name`} name={`lastName`} onChange={handleChange} />
                            </div>
                            <div className={classes.contactFormGroup}>
                                <input value={formValues?.email || ""} placeholder={`Email`} name={`email`} onChange={handleChange} />
                            </div>
                            <div className={classes.contactFormGroup}>
                                <input value={formValues?.subject || ""} placeholder={`Subject`} name={`subject`} onChange={handleChange} />
                            </div>
                            <div className={classes.contactFormGroup}>
                                <textarea placeholder={`Message`} name={`message`} onChange={handleChange}>{formValues?.message || ""}</textarea>
                            </div>
                            <Button onClick={handleSendContact}>Send Message</Button>
                        </div>
                        <div className={classes.contactInfo}>
                            <h2>Contact Us From All Of The World </h2>
                            <div className={classes.contactHr}></div>
                            <div className={classes.contactItemsContainer}>
                                <div className={classes.contactItem}>
                                    <div className={classes.contactItemIcon}><EmailIcon /></div>
                                    <a href="#">info@rhythmitica.com</a>
                                </div>
                                <div className={classes.contactItem}>
                                    <div className={classes.contactItemIcon}><LocalPhoneIcon /></div>
                                    <a href="#">1-855-531-0127</a>
                                </div>
                                <div className={classes.contactItem}>
                                    <div className={classes.contactItemIcon}><LocationOnIcon /></div>
                                    <a href="#">Canada - Toronto</a>
                                </div>
                            </div>
                            <div className={classes.contactHr}></div>
                            <div className={classes.copyrightLinks}>
                                <Link href={'#'}><a><InstagramIcon /></a></Link>
                                <Link href={'#'}><a className={classes.socialAlt}><PinterestIcon /></a></Link>
                                <Link href={'#'}><a><TwitterIcon /></a></Link>
                                <Link href={'#'}><a className={classes.socialAlt}><FacebookOutlinedIcon /></a></Link>
                                <Link href={'#'}><a><YouTubeIcon /></a></Link>
                                <Link href={'#'}><a><WhatsAppIcon /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;