import Layout from '../../../../src/components/layout/Layout'
import { wrapper } from "../../../../redux/store";
import axios from 'axios'
import Booking from '../../../../src/components/booking/Booking';

function bookingPage({ packageInfo }) {
    return (
        <Layout page={'booking'}>
            <Booking packageInfo={packageInfo} />
        </Layout>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ store, req, res, query }) => {
            try {
                const packageInfo = await axios.post(`${process.env.REACT_APP_BASE_URL}/v1.0/staffs/${query.package_id}/${query.staff_id}/booking/summery`, null,{
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