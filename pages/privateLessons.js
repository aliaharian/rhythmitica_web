import Layout from '../src/components/layout/Layout'
import { wrapper } from "../redux/store";
import axios from 'axios'
import { getStaffList } from '../redux/privateLessons/Actions';
import PrivateLessons from '../src/components/privateLessons/PrivateLessons';
import Head from 'next/head';

function PrivateLessonsPage({ packages, params }) {
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
      "name": "Private Lessons",
      "item": "https://www.rhythmitica.ca/privateLessons"
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
      <Layout page={'privateLessons'}>
        <PrivateLessons packages={packages} params={params} />
      </Layout>
    </>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query }) => {
      try {
        let params = ""
        if (query?.packages) {
          params = '&package_ids=' + query.packages
        }
        const staffs = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/tags/search?max=10&page=0${params}`, {
          headers: {
            site: process.env.REACT_APP_SITE_TOKEN
          },
        });
        store.dispatch(getStaffList(true, staffs.data));

        const packages = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/packages?brief=true`, {
          headers: {
            site: process.env.REACT_APP_SITE_TOKEN
          },
        });

        return {
          props: {
            packages: packages.data,
            params: query?.packages || null
          }, // will be passed to the page component as props
        };
      }
      catch (e) {
        console.log(e)
      }
    });

export default PrivateLessonsPage;