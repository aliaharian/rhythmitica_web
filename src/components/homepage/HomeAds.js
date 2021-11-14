import React, { Component } from "react";
import classes from '../../assets/styleSheets/homepage.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import AdItem from "../kits/AdItem";
import discord from '../../assets/images/icons/discord.svg'
const HomeAds = () => {
    return (
        <div className={classes.homeAdsContainer}>
            <div className={classes.homeAdItemsContainer}>
                <AdItem
                    image={discord}
                    color={'#5C6BC0'}
                />
                <AdItem
                    image={discord}
                    color={'#5C6BC0'}
                />
                <AdItem
                    image={discord}
                    color={'#5C6BC0'}
                />
                <AdItem
                    image={discord}
                    color={'#5C6BC0'}
                />
                <AdItem
                    image={discord}
                    color={'#5C6BC0'}
                />
                <AdItem
                    image={discord}
                    color={'#5C6BC0'}
                />
            </div>
        </div>
    )
}

export default HomeAds;