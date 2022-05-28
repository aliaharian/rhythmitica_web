import Layout from '../../../src/components/layout/Layout'
import { wrapper } from "../../../redux/store";
import axios from 'axios'
import SingleEvent from '../../../src/components/singleEvent/SingleEvent';
import { setTimezones } from '../../../redux/users';
import Head from 'next/head';

function eventSinglePage({ eventInfo, timezone }) {

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": eventInfo.title,
        "description": eventInfo.body,
        "image": "https://itica.ca" + eventInfo.banner,
        "startDate": eventInfo.parsedSessions?.[0]?.start_date?.replace(' ', 'T') + '-12:00',
        "endDate": eventInfo.parsedSessions?.[eventInfo?.parsedSessions?.length - 1]?.start_date?.replace(' ', 'T') + '-12:00',
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "location": {
            "@type": "VirtualLocation",
            "url": `https://itica.ca/events/${eventInfo.id}/${eventInfo.slug}`
        },
        "performer": {
            "@type": "PerformingGroup",
            "name": "Rhythmitica | online music academy"
        },
        "offers": {
            "@type": "Offer",
            "name": "Book Event",
            "price": eventInfo.price,
            "priceCurrency": "USD",
            "validFrom": eventInfo.expire_at,
            "url": `https://itica.ca/events/${eventInfo.id}/${eventInfo.slug}`,
            "availability": "https://schema.org/PreOrder"
        }
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
                <SingleEvent eventInfo={eventInfo} timezone={timezone} />
            </Layout>
        </>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, query }) => {


            try {

                const res = await fetch(`${process.env.REACT_APP_BASE_URL}/ip_info`);
                const timezone = await res.json();

                const timezoneRes = await fetch(`${process.env.REACT_APP_BASE_URL}/timezones`);
                const timezoneData = await timezoneRes.json();
                store.dispatch(setTimezones(true, timezoneData));

                const eventInfo = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/workshops/${query.event_slug}?timezone=${timezone.timezone}`, null, {
                    headers: {
                        site: process.env.REACT_APP_SITE_TOKEN
                    },
                });

                return {
                    props: {
                        eventInfo: eventInfo.data,
                        timezone: timezone.timezone
                    }, // will be passed to the page component as props
                };
            }
            catch (e) {
                console.log(e)
            }
        });

export default eventSinglePage;