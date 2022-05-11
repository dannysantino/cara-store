import { useEffect, useMemo, useState } from 'react'

import { userRequest, setError } from '../utils/requestMethods'
import TopStats from '../components/TopStats'
import Chart from '../components/Chart'
import SmallWidget from '../components/SmallWidget'
import LargeWidget from '../components/LargeWidget'

import '../stylesheets/Home.css'

const Home = () => {
    const [userStats, setUserStats] = useState([]);

    const MONTHS = useMemo(() => [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ], []);

    useEffect(() => {
        const getStats = async () => {
            try {
                const { data } = await userRequest.get('/users/admin/stats');
                setUserStats(data.sort((a, b) => a._id - b._id).map(e => (
                    {
                        name: MONTHS[e._id - 1],
                        'Active Users': e.total
                    }
                )));
            } catch (err) {
                console.error(setError(err));
            }
        }
        getStats();
    }, [MONTHS]);

    return (
        <section className='wrapper' id='home'>
            <div className='row mb-5' id='topstats'>
                <TopStats />
            </div>
            <div className='row mb-5' id='chart'>
                <Chart title='User Analytics' data={userStats} dataKey='Active Users' grid />
            </div>
            <div className='row mb-3 mb-md-5' id='widgets'>
                <SmallWidget />
                <LargeWidget />
            </div>
        </section>
    )
}

export default Home
