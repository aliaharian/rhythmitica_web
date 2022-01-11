import Layout from '../../../../src/components/layout/Layout'
import { wrapper } from "../../../../redux/store";
import axios from 'axios'
import SingleStaff from '../../../../src/components/singleStaff/SingleStaff';

function staffSinglePage({ staffInfo }) {
    return (
        <Layout page={'singleStaff'}>
            <SingleStaff staffInfo={staffInfo} />
        </Layout>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ store, req, res, query }) => {
            try {
                const staffInfo = await axios.post(`${process.env.REACT_APP_BASE_URL}/v1.0/staffs/${query.staff_id}/${query.package_id}/summery`, null,{
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