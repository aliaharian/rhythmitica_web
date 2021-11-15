import Footer from './Footer';
import RhHeader from './RhHeader';
const Layout = ({ children , page }) => {
    return (
        <>
            <RhHeader page={page}/>
            {children}
            <Footer/>
        </>

    )
}
export default Layout;