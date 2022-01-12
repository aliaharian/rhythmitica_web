import About from '../src/components/about/About';
import Layout from '../src/components/layout/Layout'
import { wrapper } from "../redux/store";

function AboutUsPage() {
  return (
    <Layout page={'about'}>
      {/* <About /> */}
    </Layout>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
     
      return {
        props: {
          page: 'about',
        }, // will be passed to the page component as props
      };
    });

export default AboutUsPage;