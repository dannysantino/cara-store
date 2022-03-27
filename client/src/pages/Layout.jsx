import { Outlet } from 'react-router-dom'

import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <>
            <main>
                <Outlet />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default Layout
