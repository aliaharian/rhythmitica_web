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
import Media from '../src/components/layout/Media'
import Head from 'next/head'
function MyApp({ categories, events, posts }) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Rhythmitica",
    "alternateName": "online music academy",
    "url": "https://rhythmitica.ca",
    "logo": "https://rhythmitica.ca/favicons/android-chrome-512x512.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-855-531-0127",
      "contactType": "customer service",
      "areaServed": "CA",
      "availableLanguage": ["en", "Persian"]
    },
    "sameAs": [
      "https://www.instagram.com/rhythmitica/",
      "https://www.pinterest.com/rhythmitica/",
      "https://twitter.com/Rhythmitica",
      "https://www.facebook.com/Rhythmitica"
    ]
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Layout page={'home'}>
        {/* <Media /> */}

        <HomeSlider />
        <HomeIntro />
        <HomeWhyRhythimtica />
        <HomeInstructors categories={categories} />
        <HomeRecentEvents events={events} />
        <HomeRecentPosts posts={posts} />
        <HomeAds />
      </Layout>
    </>
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
      console.log('cat', categories.data)
      return {
        props: {
          categories: categories.data.data,
          events: events.data.data,
          posts: posts.data.data,
        }, // will be passed to the page component as props
      };
    });

export default MyApp;