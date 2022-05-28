import Layout from '../../../src/components/layout/Layout'
import { wrapper } from "../../../redux/store";
import axios from 'axios'
import SinglePost from '../../../src/components/singlePost/SinglePost';
import Head from 'next/head';

function singlePostPage({ postInfo }) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://rhythmitica.ca/blog/${postInfo.id}/${postInfo.slug}`
        },
        "headline": postInfo.title,
        "description": postInfo.brief,
        "image": "https://itica.ca" + postInfo.banner,
        "author": {
            "@type": "Organization",
            "name": "Rhythmitica"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Rhythmitica",
            "logo": {
                "@type": "ImageObject",
                "url": "https://rhythmitica.ca/favicons/android-chrome-512x512.png"
            }
        },
        "datePublished": postInfo.created_at,
    }

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Layout page={'singleEvent'}>
                <SinglePost postInfo={postInfo} />
            </Layout>
        </>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, query }) => {


            try {
                const postInfo = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/blog/${query.post_slug}`, null, {
                    headers: {
                        site: process.env.REACT_APP_SITE_TOKEN
                    },
                });

                return {
                    props: {
                        postInfo: postInfo.data,
                    }, // will be passed to the page component as props
                };
            }
            catch (e) {
                console.log(e)
            }
        });

export default singlePostPage;