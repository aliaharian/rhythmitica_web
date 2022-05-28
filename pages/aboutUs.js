import About from '../src/components/about/About';
import Layout from '../src/components/layout/Layout'
import { wrapper } from "../redux/store";
import Head from 'next/head';

function AboutUsPage() {

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
      "name": "About Us",
      "item": "https://www.rhythmitica.ca/aboutUs"
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
      <Layout page={'about'}>
        <About />
      </Layout>
    </>
  )
}
export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ req, res }) => {

      return {
        props: {
          page: 'about',
        }, // will be passed to the page component as props
      };
    });

export default AboutUsPage;