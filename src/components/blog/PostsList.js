import { useSelector } from "react-redux";
import classes from '../../assets/styleSheets/blog.module.scss'
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@material-ui/core";
import Post from "../kits/Post";
import transform from "../../utilities/transform";
import noResultIcon from '../../assets/images/icons/noResultIconPink.svg'
import Link from 'next/link';
import { useEffect, useState } from "react";
import Image from 'next/image'

const PostsList = ({ handlePaginate }) => {
    const posts = useSelector((state) => state.posts.posts);
    const postsLoading = useSelector((state) => state.posts.postsLoading);
    const [renderedPost, setRenderedPost] = useState()
    console.log('posts', posts)
    console.log('renderedPost', renderedPost)
    useEffect(() => {
        let tmp1 = []
        let tmp2 = []
        let tmp3 = []
        posts.data.map((post, index) => {
            if ((index + 1) % 3 == 1) {
                tmp1.push(post);
            }
            if ((index + 1) % 3 == 2) {
                tmp2.push(post);
            }
            if ((index + 1) % 3 == 0) {
                tmp3.push(post);
            }
        });
        setRenderedPost([tmp1, tmp2, tmp3]);

    }, [posts.data])

    return (
        <div className={classes.postsListContainer}>
            {(postsLoading || !renderedPost) ?
                <p style={{ textAlign: "center", marginTop: 53 }}>
                    <CircularProgress
                        color="primary"
                        style={{ width: 20, height: 20 }} />
                </p>
                :
                (renderedPost[0].length > 0) ?
                    <InfiniteScroll
                        dataLength={posts.data.length}
                        next={() => handlePaginate(parseInt(posts.current_page) + 1)}
                        hasMore={parseInt(posts.current_page) < posts.last_page}
                        loader={
                            <p style={{ textAlign: "center", marginTop: 53 }}>
                                <CircularProgress
                                    color="primary"
                                    style={{ width: 20, height: 20 }} /></p>
                        }
                    >
                        <div className={classes.postsList}>
                            <div className={classes.postsListRow}>
                                {
                                    renderedPost[0].map((post, index) => (
                                        <Link key={post.id} href={`/blog/${post.id}/${post.slug}`}>
                                            <a>
                                                <Post
                                                    image={process.env.REACT_APP_IMAGE_URL + post.banner}
                                                    name={post.title}
                                                    brief={post.brief}
                                                    date={post.created_at}
                                                    unsplashMode
                                                    sm={index % 2 == 0}
                                                />
                                            </a>
                                        </Link>
                                    ))

                                }
                            </div>
                            <div className={classes.postsListRow}>
                                {
                                    renderedPost[1].map((post, index) => (
                                        <Link key={post.id} href={`/blog/${post.id}/${post.slug}`}>
                                            <a>
                                                <Post
                                                    image={process.env.REACT_APP_IMAGE_URL + post.banner}
                                                    name={post.title}
                                                    brief={post.brief}
                                                    date={post.created_at}
                                                    unsplashMode
                                                    sm={index % 2 != 0}
                                                />
                                            </a>
                                        </Link>
                                    ))

                                }
                            </div>
                            <div className={classes.postsListRow}>
                                {
                                    renderedPost[2].map((post, index) => (
                                        <Link key={post.id} href={`/blog/${post.id}/${post.slug}`}>
                                            <a>
                                                <Post
                                                    image={process.env.REACT_APP_IMAGE_URL + post.banner}
                                                    name={post.title}
                                                    brief={post.brief}
                                                    date={post.created_at}
                                                    unsplashMode
                                                    sm={index % 2 == 0}
                                                />
                                            </a>
                                        </Link>
                                    ))

                                }
                            </div>


                        </div>
                    </InfiniteScroll>
                    :
                    <div className={classes.noResult}>
                        <div>
                            <Image alt="" layout="fill" src={noResultIcon} />
                        </div>
                        <p>No Result Found!</p>
                    </div>
            }
        </div >
    )
}
export default PostsList;