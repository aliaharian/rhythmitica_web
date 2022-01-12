import Layout from '../../../../src/components/layout/Layout'
import { wrapper } from "../../../../redux/store";
import axios from 'axios'
import Booking from '../../../../src/components/booking/Booking';
import { setTimezones } from '../../../../redux/users';

function bookingPage({ packageInfo }) {
    return (
        <Layout page={'privateLessons'}>
            <Booking packageInfo={packageInfo} />
        </Layout>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res, query }) => {
            try {
                const timezoneRes = await fetch(`${process.env.REACT_APP_BASE_URL}/timezones`);
                const timezoneData = await timezoneRes.json();
                store.dispatch(setTimezones(true, timezoneData));

                const packageInfo = await axios.post(`${process.env.REACT_APP_BASE_URL}/v1.0/staffs/${query.staff_id}/${query.package_id}/booking/summery`, null,{
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