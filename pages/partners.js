import Layout from '../src/components/layout/Layout'
import { wrapper } from "../redux/store";
import Partners from '../src/components/partners/Partners';

function PartnersPage() {
  return (
    <Layout page={'partners'}>
      {/* <Partners /> */}
    </Layout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
     
      return {
        props: {
          page: 'partners',
        }, // will be passed to the page component as props
      };
    });

export default PartnersPage;