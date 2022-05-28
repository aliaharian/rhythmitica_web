import Layout from '../src/components/layout/Layout'
import { wrapper } from "../redux/store";
import Contact from '../src/components/contact/Contact';
import Head from 'next/head';

function contactUsPage() {
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
      "name": "contact Us",
      "item": "https://www.rhythmitica.ca/contactUs"
    }]
  }
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Layout page={'contact'}>
        <Contact />
      </Layout>
    </>
  )
}
export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ req, res }) => {

      return {
        props: {
          page: 'contact',
        }, // will be passed to the page component as props
      };
    });

export default contactUsPage;