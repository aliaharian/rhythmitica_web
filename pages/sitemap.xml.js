import React from 'react';
import axios from 'axios'
const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://test.rhythmitica.ca",
    }[process.env.NODE_ENV];

    const staticPages = [
        { url: "", priority: '1.0' },
        { url: "blog" },
        { url: "events" },
        { url: "privateLessons", priority: '1.0' },
        { url: "aboutUs" },
        { url: "contactUs" },
        { url: "events" },
        { url: "globe" },
        { url: "partners" },
    ].map((staticPagePath) => {
        return { url: `${baseUrl}/${staticPagePath.url}`, priority: staticPagePath.priority || '0.8' };
    });

    //get blog list
    let response = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/blog/briefList`, null, {
        headers: {
            site: process.env.REACT_APP_SITE_TOKEN
        },
    });
    const blogList = response.data.map((data) => {
        return { url: `${baseUrl}/blog/${data.id}/${data.slug}`, priority: '0.8' };
    });


    //get events list
    response = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/workshops/briefList`, null, {
        headers: {
            site: process.env.REACT_APP_SITE_TOKEN
        },
    });
    const eventsList = response.data.map((data) => {
        return { url: `${baseUrl}/events/${data.id}/${data.slug}`, priority: '0.8' };
    });
    console.log(response.data)



    const allPaths = [...staticPages, ...blogList, ...eventsList];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
            .map((url) => {
                return `
            <url>
              <loc>${url.url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${url.priority}</priority>
            </url>
          `;
            })
            .join("")}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;