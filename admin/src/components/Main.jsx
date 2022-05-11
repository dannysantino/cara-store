import { Routes, Route } from 'react-router-dom'

import Sidebar from './Sidebar'
import Home from '../pages/Home'
import Users from '../pages/Users'
import User from '../pages/User'
import NewUser from '../pages/NewUser'
import Products from '../pages/Products'
import Product from '../pages/Product'
import NewProduct from '../pages/NewProduct'
import Orders from '../pages/Orders'
import Order from '../pages/Order'

const Main = () => {
    return (
        <main className='container-fluid' id='main'>
            <div className='row'>
                <div className='col-lg-3 col-xl-2 sidebar-col'>
                    <Sidebar />
                </div>
                <div className='col-lg-9 col-xl-10 px-sm-4 content-col'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='users' element={<Users />} />
                        <Route path='user/:userId' element={<User />} />
                        <Route path='newuser' element={<NewUser />} />
                        <Route path='products' element={<Products />} />
                        <Route path='product/:id' element={<Product />} />
                        <Route path='newproduct' element={<NewProduct />} />
                        <Route path='orders' element={<Orders />} />
                        <Route path='order/:orderId' element={<Order />} />
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default Main
