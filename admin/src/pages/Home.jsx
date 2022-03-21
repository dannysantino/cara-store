import TopStats from '../components/TopStats'
import Chart from '../components/Chart'
import SmallWidget from '../components/SmallWidget'
import LargeWidget from '../components/LargeWidget'
import { userChartData } from '../demoData'

import '../stylesheets/Home.css'

const Home = () => {
    return (
        <section className='wrapper' id='home'>
            <div className='row mb-5' id='topstats'>
                <TopStats />
            </div>
            <div className='row mb-5' id='chart'>
                <Chart title='User Analytics' data={userChartData} dataKey='Active User' grid />
            </div>
            <div className='row mb-5' id='widgets'>
                <SmallWidget />
                <LargeWidget />
            </div>
        </section>
    )
}

export default Home
