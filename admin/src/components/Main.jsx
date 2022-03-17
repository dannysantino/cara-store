import Sidebar from './Sidebar'
import Home from '../pages/Home'

const Main = () => {
    return (
        <main className='container-fluid' id='main'>
            <div className='row'>
                <div className='col-3 col-xxl-2'>
                    <Sidebar />
                </div>
                <div className='col-9 col-xxl-10 px-4'>
                    <Home />
                </div>
            </div>
        </main>
    )
}

export default Main
