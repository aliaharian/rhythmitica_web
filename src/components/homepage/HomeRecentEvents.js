import React, { Component, useState } from "react";
import classes from '../../assets/styleSheets/homepage.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import Event from "../kits/Event";

const HomeRecentEvents = ({ events }) => {
    return (
        <div className={classes.eventsContainer}>
            <h2 className={clsx(classes.sectionTitle, classes.eventsTitle)}>Recent Events</h2>
            <div className={classes.eventListContainer}>
                {
                    events.slice(0, 3).map((event) => {
                        return (
                            <Event
                                image={process.env.REACT_APP_IMAGE_URL + event.banner}
                                name={event.title}
                                instructor={event.staff.user.name + " " + event.staff.user.family}
                                price={event.price + " $"}
                                sessions={event.sessions.length}
                                sm
                            />
                        )
                    })
                }
            </div>
            <Link href={"/events"}>
                <a className={clsx(classes.moreBtn,classes.moreEventBtn)} title="all events">
                    <div></div><div></div><div></div>
                </a>
            </Link>
        </div>
    )
}

export default HomeRecentEvents;