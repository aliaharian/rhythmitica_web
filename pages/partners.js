import Layout from '../src/components/layout/Layout'
import { wrapper } from "../redux/store";
import Partners from '../src/components/partners/Partners';
import Head from 'next/head';

function PartnersPage() {
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
      "name": "Partners",
      "item": "https://www.rhythmitica.ca/partners"
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
      <Layout page={'partners'}>
        <Partners />
      </Layout>
    </>
  )
}
export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ req, res }) => {

      return {
        props: {
          page: 'partners',
        }, // will be passed to the page component as props
      };
    });

export default PartnersPage;