import Layout from '../src/components/layout/Layout'
import { wrapper } from "../redux/store";
import axios from 'axios'
import EarthGlobe from '../src/components/earthGlobe/EarthGlobe'

function GlobePage({ globeData }) {
    return (
        <Layout page={'globe'}>
            <EarthGlobe globeData={globeData} />
        </Layout>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res }) => {
            try {
                const globeData = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/countries/globeData`, {
                    headers: {
                        site: process.env.REACT_APP_SITE_TOKEN
                    },
                });
                let arr = [];
                let item;
                globeData?.data?.data?.map((d) => {
                    item = {
                        lat : d.pointData.lat,
                        lng : d.pointData.long,
                        label : d.pointData.country_name,
                        packages : d.packages
                    }
                    arr.push({ ...item })
                })

                return {
                    props: {
                        globeData: arr,
                    }, // will be passed to the page component as props
                };
            }
            catch (e) {
                console.log(e)
            }
        });

export default GlobePage;