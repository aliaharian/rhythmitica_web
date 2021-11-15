import Layout from '../src/components/layout/Layout'
import HomeSlider from '../src/components/homepage/HomeSlider'
import HomeIntro from '../src/components/homepage/HomeIntro'
import HomeWhyRhythimtica from '../src/components/homepage/HomeWhyRhythimtica'
import HomeInstructors from '../src/components/homepage/HomeInstructors'
import { wrapper } from "../redux/store";
import axios from 'axios'
import HomeRecentEvents from '../src/components/homepage/HomeRecentEvents'
import HomeRecentPosts from '../src/components/homepage/HomeRecentPosts'
import HomeAds from '../src/components/homepage/HomeAds'
function Home({ categories, events , posts }) {
  return (
    <Layout page={'home'}>
      <HomeSlider />
      <HomeIntro />
      <HomeWhyRhythimtica />
      <HomeInstructors categories={categories} />
      <HomeRecentEvents events={events} />
      <HomeRecentPosts posts={posts} />
      <HomeAds/>
    </Layout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const categories = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/tags`, {
        headers: {
          site: process.env.REACT_APP_SITE_TOKEN
        },
      });
      const events = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/workshops?group_class=none`, {
        headers: {
          site: process.env.REACT_APP_SITE_TOKEN
        },
      });
      const posts = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/blog/posts?length=3`, {
        headers: {
          site: process.env.REACT_APP_SITE_TOKEN
        },
      });
      console.log('cat',categories.data)
      return {
        props: {
          categories: categories.data.data,
          events: events.data.data,
          posts: posts.data.data,
        }, // will be passed to the page component as props
      };
    });

export default Home;