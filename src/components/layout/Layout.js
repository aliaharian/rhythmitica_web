import Footer from './Footer';
import RhHeader from './RhHeader';
const Layout = ({ children }) => {
    return (
        <>
            <RhHeader />
            {children}
            <Footer/>
        </>

    )
}
export default Layout;