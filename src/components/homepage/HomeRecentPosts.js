import React, { Component, useState } from "react";
import classes from '../../assets/styleSheets/homepage.module.scss';
import Link from 'next/Link';
import clsx from 'clsx';
import Post from "../kits/Post";

const HomeRecentPosts = ({ posts }) => {
    console.log('posts', posts)
    return (
        <div className={classes.postsContainer}>
            <h2 className={clsx(classes.sectionTitle, classes.postsTitle)}>Recent Posts</h2>
            <div className={classes.postListContainer}>
                {
                    posts.slice(0, 3).map((post) => {
                        return (
                            <Post
                                image={process.env.REACT_APP_IMAGE_URL + post.banner}
                                name={post.title}
                                brief={post.brief}
                                date={post.created_at}
                            />
                        )
                    })
                }
            </div>
            <Link href={"#"}>
                <a className={clsx(classes.moreBtn,classes.morePostBtn)} title="all posts">
                    <div></div><div></div><div></div>
                </a>
            </Link>
        </div>
    )
}

export default HomeRecentPosts;