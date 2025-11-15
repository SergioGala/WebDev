import Footer from "./Footer"
import Navbar from "./Navbar/Navbar"


const Layout = ({children}) =>{

    return(
        <div>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
        </div>
    )
}

export default Layout;