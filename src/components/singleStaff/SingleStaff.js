import { Button, Tab, Tabs } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import classes from '../../assets/styleSheets/singleStaff.module.scss'
import SingleStaffHeader from './SingleStaffHeader';
import useStyles from './Style'
import clsx from 'clsx';
import SingleStaffBiography from './SingleStaffBiography';
import SingleStaffVideos from './SingleStaffVideos';
const SingleStaff = ({ staffInfo }) => {
    const muiClass = useStyles();
    console.log(staffInfo)
    const [selectedTab, setSelectedTab] = useState('biographyRef')
    const biographyRef = useRef(null)
    const artworksRef = useRef(null)
    const videosRef = useRef(null)
    const handleSelectTab = (tab, val) => {
        setSelectedTab(val)
        switch (val) {
            case 'biographyRef':
                biographyRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case 'artworksRef':
                artworksRef.current.scrollIntoView({behavior: "smooth"})
                break;
            case 'videosRef':
                videosRef.current.scrollIntoView({behavior: "smooth"})
                break;

        }

    }
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            //   console.log('currentScrollY', currentScrollY);
            if (videosRef.current.getBoundingClientRect().top < 250) {
                setSelectedTab('videosRef')
            } else if (artworksRef.current.getBoundingClientRect().top < 150) {
                setSelectedTab('artworksRef')
            } else if (biographyRef.current.getBoundingClientRect().top < 150) {
                setSelectedTab('biographyRef')
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    });


    return (
        <>
            <SingleStaffHeader staffInfo={staffInfo} />
            <div className={classes.staffMainBody}>
                <div className={classes.tabsGrandContainer}>
                    <div className={clsx(classes.tabsContainer, muiClass.tabsContainer)}>
                        <Tabs
                            value={selectedTab}
                            onChange={handleSelectTab}
                            textColor="inherit"
                            indicatorColor="inherit"
                            aria-label="blog categories"
                            variant="fullWidth"
                        >
                            <Tab value={'biographyRef'} label={'Biography'} />
                            <Tab value={'artworksRef'} label={'Artworks'} />
                            <Tab value={'videosRef'} label={'Videos'} />
                        </Tabs>
                    </div>
                </div>
                <div className={classes.refContainer} ref={biographyRef} >
                    <SingleStaffBiography staffInfo={staffInfo} />
                </div>
                <div className={classes.refContainer} ref={artworksRef} >
                    <SingleStaffBiography staffInfo={staffInfo} type={'artworks'} />
                </div>
                <div className={classes.refContainer} ref={videosRef} >

                    <SingleStaffVideos staffInfo={staffInfo} />
                </div>

            </div>
        </>

    )
};

export default SingleStaff