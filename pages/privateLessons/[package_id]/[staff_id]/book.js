import Layout from '../../../../src/components/layout/Layout'
import { wrapper } from "../../../../redux/store";
import axios from 'axios'
import Booking from '../../../../src/components/booking/Booking';
import { setTimezones } from '../../../../redux/users';
import Head from 'next/head';

function bookingPage({ packageInfo }) {
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
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": `${packageInfo.staff.name} ${packageInfo.staff.family}, ${packageInfo.package.name} instrctor`,
            "item": `https://rhythmitica.ca/privateLessons/${packageInfo.package.id}/${packageInfo.staff.id}/${packageInfo.staff.name?.replace(/\s+/g, '-')}-${packageInfo.staff.family?.replace(/\s+/g, '-')}`
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": `book ${packageInfo.package.name} class with ${packageInfo.staff.name} ${packageInfo.staff.family}`,
            "item": `https://rhythmitica.ca/privateLessons/${packageInfo.package.id}/${packageInfo.staff.id}/book`
        }

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
            <Layout page={'privateLessons'}>
                <Booking packageInfo={packageInfo} />
            </Layout>
        </>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, query }) => {
            try {
                const timezoneRes = await fetch(`${process.env.REACT_APP_BASE_URL}/timezones`);
                const timezoneData = await timezoneRes.json();
                store.dispatch(setTimezones(true, timezoneData));

                const packageInfo = await axios.post(`${process.env.REACT_APP_BASE_URL}/v1.0/staffs/${query.staff_id}/${query.package_id}/booking/summery`, null, {
                    headers: {
                        site: process.env.REACT_APP_SITE_TOKEN
                    },
                });



                return {
                    props: {
                        packageInfo: packageInfo.data.data,
                    }, // will be passed to the page component as props
                };
            }
            catch (e) {
                console.log(e)
            }
        });

export default bookingPage;