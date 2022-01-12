// import Layout from '../../../src/components/layout/Layout'
// import { wrapper } from "../../../redux/store";
// import axios from 'axios'
// import SingleEvent from '../../../src/components/singleEvent/SingleEvent';
// import { setTimezones } from '../../../redux/users';

// function eventSinglePage({ eventInfo, timezone }) {
//     return (
//         <Layout page={'singleEvent'}>
//             <SingleEvent eventInfo={eventInfo} timezone={timezone} />
//         </Layout>
//     )
// }
// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) =>
//         async ({ req, res, query }) => {


//             try {

//                 const res = await fetch(`${process.env.REACT_APP_BASE_URL}/ip_info`);
//                 const timezone = await res.json();

//                 const timezoneRes = await fetch(`${process.env.REACT_APP_BASE_URL}/timezones`);
//                 const timezoneData = await timezoneRes.json();
//                 store.dispatch(setTimezones(true, timezoneData));

//                 const eventInfo = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1.0/workshops/${query.event_slug}?timezone=${timezone.timezone}`, null, {
//                     headers: {
//                         site: process.env.REACT_APP_SITE_TOKEN
//                     },
//                 });

//                 return {
//                     props: {
//                         eventInfo: eventInfo.data,
//                         timezone: timezone.timezone
//                     }, // will be passed to the page component as props
//                 };
//             }
//             catch (e) {
//                 console.log(e)
//             }
//         });

// export default eventSinglePage;