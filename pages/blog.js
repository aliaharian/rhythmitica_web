import Layout from '../src/components/layout/Layout'
import { wrapper } from "../redux/store";
import axios from 'axios'
import Events from '../src/components/events/Events';
import { getEventsList } from '../redux/events';
import { getPostsList } from '../redux/posts';
import Blog from '../src/components/blog/Blog';
import Head from 'next/head';

function BlogPage({ categories }) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Rhythmitica | Online Music Academy",
      "item": "https://www.rhythmitica.ca"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "blog",
      "item": "https://www.rhythmitica.ca/blog"
    }]
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Layout page={'blog'}>
        <Blog categories={categories} />
      </Layout>
    </>
  )
}



export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      try {
        const categories = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/blog/cats`, {
          headers: {
            site: process.env.REACT_APP_SITE_TOKEN
          },
        });

        const posts = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/blog/search/--?page=1&max=10&cat_id=${categories.data[0].id}`, {
          headers: {
            site: process.env.REACT_APP_SITE_TOKEN
          },
        });
        store.dispatch(getPostsList(true, posts.data));

        return {
          props: {
            categories: categories.data,
          },
        };
      }
      catch (e) {
        console.log(e)
      }
    });



export default BlogPage;