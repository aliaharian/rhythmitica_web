import Layout from '../src/components/layout/Layout'
import { wrapper } from "../redux/store";
import axios from 'axios'
import { getStaffList } from '../redux/privateLessons/Actions';
import PrivateLessons from '../src/components/privateLessons/PrivateLessons';

function PrivateLessonsPage({packages}) {
  return (
    <Layout page={'privateLessons'}>
      <PrivateLessons packages={packages}/>
    </Layout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      try {
        const staffs = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/tags/search?max=10&page=0`, {
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
          }, // will be passed to the page component as props
        };
      }
      catch (e) {
        console.log(e)
      }
    });

export default PrivateLessonsPage;