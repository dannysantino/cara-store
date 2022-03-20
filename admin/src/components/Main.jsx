import { Routes, Route } from 'react-router-dom'

import Sidebar from './Sidebar'
import Home from '../pages/Home'
import Users from '../pages/Users'
import User from '../pages/User'

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
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default Main
