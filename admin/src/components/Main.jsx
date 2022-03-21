import { Routes, Route } from 'react-router-dom'

import Sidebar from './Sidebar'
import Home from '../pages/Home'
import Users from '../pages/Users'
import User from '../pages/User'
import NewUser from '../pages/NewUser'
import Products from '../pages/Products'
import Product from '../pages/Product'
import NewProduct from '../pages/NewProduct'

const Main = () => {
    return (
        <main className='container-fluid' id='main'>
            <div className='row'>
                <div className='col-3 col-xxl-2'>
                    <Sidebar />
                </div>
                <div className='col-9 col-xxl-10 px-4'>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='users' element={<Users />} />
                        <Route exact path='user/:userId' element={<User />} />
                        <Route exact path='newuser' element={<NewUser />} />
                        <Route exact path='products' element={<Products />} />
                        <Route exact path='product/:productId' element={<Product />} />
                        <Route exact path='newproduct' element={<NewProduct />} />
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default Main
