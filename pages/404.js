import Media from '../src/components/layout/Media'
import { wrapper } from "../redux/store";

function D404() {

    return (
        <>
            <Media/>
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, req, res }) => {
            res.setHeader("location", "/");
            res.statusCode = 302;
            res.end();
            return;
    }
);

export default D404;