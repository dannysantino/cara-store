import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Chart = ({ title, data, dataKey, grid, span }) => {
    return (
        <>
            <div className={span ? span : 'col-12'}>
                <div className='card shadow-sm'>
                    <div className='card-body pt-4 ps-0 pe-5'>
                        <h4 className='card-title ps-3 mb-3'>{title}</h4>
                        <ResponsiveContainer minHeight={300}>
                            <LineChart data={data}>
                                <XAxis dataKey='name' stroke='#5550BD' />
                                <YAxis stroke='#5550BD' />
                                <Line type='monotone' dataKey={dataKey} stroke='#5550BD' />
                                <Tooltip />
                                <Legend />
                                {grid && <CartesianGrid stroke='#E0DFDF' strokeDasharray='5 5' />}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart
