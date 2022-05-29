import Layout from '../../../../src/components/layout/Layout'
import { wrapper } from "../../../../redux/store";
import axios from 'axios'
import SingleStaff from '../../../../src/components/singleStaff/SingleStaff';
import Head from 'next/head';

function staffSinglePage({ staffInfo }) {
    const structuredData = {
        "@context": "http://schema.org/",
        "@type": "Course",
        "provider": {
            "@type": "Organization",
            "name": "Rhythmitica",
        },
        "name": `learn ${staffInfo.package_name} with ${staffInfo.staff_name} ${staffInfo.staff_family}`,
        "description": `online ${staffInfo.package_name} class with ${staffInfo.staff_name} ${staffInfo.staff_family}. book now!`,
        "image": 'https://itica.ca/'+JSON.parse(staffInfo.staff_package_json).banner,
        "creator":
            [{
                "@type": "Person",
                "name": `${staffInfo.staff_name} ${staffInfo.staff_family}`,
                "jobTitle": staffInfo.staff_biography,
                "url": `https://rhythmitica.ca/privateLessons/${staffInfo.package_id}/${staffInfo.staff_id}/${staffInfo?.staff_name?.replace(/\s+/g, '-')}-${staffInfo?.staff_family?.replace(/\s+/g, '-')}`
            }],
        "url": `https://rhythmitica.ca/privateLessons/${staffInfo.package_id}/${staffInfo.staff_id}/book`,
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
                <SingleStaff staffInfo={staffInfo} />
            </Layout>
        </>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ store, req, res, query }) => {
            try {
                const staffInfo = await axios.post(`${process.env.REACT_APP_BASE_URL}/v1.0/staffs/${query.staff_id}/${query.package_id}/summery`, null, {
                    headers: {
                        site: process.env.REACT_APP_SITE_TOKEN
                    },
                });

                return {
                    props: {
                        staffInfo: staffInfo.data.data,
                    }, // will be passed to the page component as props
                };
            }
            catch (e) {
                console.log(e)
            }
        });

export default staffSinglePage;