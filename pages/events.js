import Layout from '../src/components/layout/Layout'
import { wrapper } from "../redux/store";
import axios from 'axios'
import Events from '../src/components/events/Events';
import { getEventsList } from '../redux/events';
import Head from 'next/head';

function EventsPage({packages , eventTypes}) {
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
      "name": "Events",
      "item": "https://www.rhythmitica.ca/events"
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
    <Layout page={'events'}>
      <Events packages={packages} eventTypes={eventTypes}/>
    </Layout>
    </>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      try {
        const staffs = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/workshops/search?max=10&page=1`, {
          headers: {
            site: process.env.REACT_APP_SITE_TOKEN
          },
        });
        store.dispatch(getEventsList(true, staffs.data));

        const packages = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/packages?brief=true`, {
          headers: {
            site: process.env.REACT_APP_SITE_TOKEN
          },
        });
        const eventTypes = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/eventTypes`, {
          headers: {
            site: process.env.REACT_APP_SITE_TOKEN
          },
        });

        return {
          props: {
            packages: packages.data,
            eventTypes: eventTypes.data,
          }, // will be passed to the page component as props
        };
      }
      catch (e) {
        console.log(e)
      }
    });

export default EventsPage;