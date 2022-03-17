import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Chart = ({ title, data, dataKey, grid }) => {
    return (
        <>
            <div className='col-12'>
                <div className='card shadow-sm'>
                    <div className='card-body pt-4 ps-4'>
                        <h4 className='card-title mb-3'>{title}</h4>
                        <ResponsiveContainer width='100%' aspect={4 / 1}>
                            <LineChart data={data}>
                                <XAxis dataKey='name' stroke='#5550BD' />
                                <YAxis stroke='#5550BD' />
                                <Line type='monotone' dataKey={dataKey} stroke='#222' />
                                <Tooltip />
                                <Legend />
                                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart
