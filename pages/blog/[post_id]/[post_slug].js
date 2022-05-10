import Layout from '../../../src/components/layout/Layout'
import { wrapper } from "../../../redux/store";
import axios from 'axios'
import SinglePost from '../../../src/components/singlePost/SinglePost';

function singlePostPage({ postInfo }) {
    return (
        <Layout page={'singleEvent'}>
            <SinglePost postInfo={postInfo} />
        </Layout>
    )
}


export async function getStaticPaths() {
    const posts = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/blog/briefList`, {
        headers: {
            site: process.env.REACT_APP_SITE_TOKEN
        },
    });

    const paths = posts.data.map((page) => {
        return {
            params: { post_id: page.id.toString(), post_slug: page.slug.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    try {
        const postInfo = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/blog/${params.post_slug}`, null, {
            headers: {
                site: '6e6a90a95755444cbdee6d0df6929539' //process.env.REACT_APP_SITE_TOKEN
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
}

export default singlePostPage;