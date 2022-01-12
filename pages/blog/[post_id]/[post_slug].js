import Layout from '../../../src/components/layout/Layout'
import { wrapper } from "../../../redux/store";
import axios from 'axios'
import SinglePost from '../../../src/components/singlePost/SinglePost';

function singlePostPage({ postInfo }) {
    return (
        <Layout page={'singleEvent'}>
            {/* <SinglePost postInfo={postInfo} /> */}
        </Layout>
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