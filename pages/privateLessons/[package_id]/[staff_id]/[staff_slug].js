import Layout from '../../../../src/components/layout/Layout'
import { wrapper } from "../../../../redux/store";
import axios from 'axios'
import SingleStaff from '../../../../src/components/singleStaff/SingleStaff';

function staffSinglePage({ staffInfo }) {
    const structuredData = { "@context": "http:\/\/schema.org\/",
     "@type": "Course", "provider": { "@type": "Organization", "name": "FaraDars" },
      "name": "آموزش یادگیری ماشین Machine Learning با پایتون Python",
       "description": "امروزه، یادگیری ماشین در اکثر صنایع و کسب و کارها مورد استفاده قرار می گیرد و تصمیمات بسیار تأثیرگذار دنیای امروز بر اساس پردازش ها و نتایج به دست آمده از یادگیری ماشین است. همچنین زبان برنامه نویسی پایتون (Python) با رشد و گسترده تر شدن روزافزون جامعه کاربری اش، بستر بسیار مناسبی جهت فعالیت های یادگیری ماشین را فراهم کرده است.", 
       "image": "https:\/\/faradars.org\/wp-content\/uploads\/2017\/08\/fvml9606-png.png",
        "creator":
         [{
              "@type": "Person", 
              "name": "سعید مظلومی راد", 
              "jobTitle": "سعید مظلومی راد در حال حاضر دانشجوی کارشناسی ارشد عمران گرایش سازه در دانشگاه آزاد مشهد هستند. ایشان علاقه مند به فعالیت در حوزه هوش مصنوعی و آنالیز داده هستند.", 
              "url": "https:\/\/faradars.org\/instructors\/saeed-mazloomi-rad" }], 
              "dateCreated": "2017-12-30", "datePublished": "2017-12-30", 
              "thumbnailUrl": "https:\/\/faradars.org\/wp-content\/uploads\/2017\/08\/fvml9606-png.png", "url": "https:\/\/faradars.org\/courses\/fvml9606-machine-learning-using-python", "timeRequired": "10H0M", "about": [{ "@type": "Thing", "url": "https:\/\/faradars.org\/topic\/programming", "name": "برنامه نویسی" }, { "@type": "Thing", "url": "https:\/\/faradars.org\/topic\/python", "name": "پایتون" }, { "@type": "Thing", "url": "https:\/\/faradars.org\/topic\/computer-engineering", "name": "مهندسی کامپیوتر" }, { "@type": "Thing", "url": "https:\/\/faradars.org\/topic\/computational-intelligence", "name": "هوش محاسباتی" }, { "@type": "Thing", "url": "https:\/\/faradars.org\/topic\/machine-learning", "name": "یادگیری ماشین" }, { "@type": "Thing", "url": "https:\/\/faradars.org\/topic\/programming", "name": "برنامه نویسی" }, { "@type": "Thing", "url": "https:\/\/faradars.org\/topic\/python", "name": "پایتون" }, { "@type": "Thing", "url": "https:\/\/faradars.org\/topic\/computer-engineering", "name": "مهندسی کامپیوتر" }, { "@type": "Thing", "url": "https:\/\/faradars.org\/topic\/computational-intelligence", "name": "هوش محاسباتی" }, { "@type": "Thing", "url": "https:\/\/faradars.org\/topic\/machine-learning", "name": "یادگیری ماشین" }] }

    return (
        <Layout page={'privateLessons'}>
            <SingleStaff staffInfo={staffInfo} />
        </Layout>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ store, req, res, query }) => {
            try {
                const staffInfo = await axios.post(`${process.env.REACT_APP_BASE_URL}/v1.0/staffs/${query.staff_id}/${query.package_id}/summery`, null, {
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