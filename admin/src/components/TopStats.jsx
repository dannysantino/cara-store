import { useEffect, useRef, useState } from 'react'

import { userRequest, setError } from '../utils/requestMethods'

const TopStats = () => {
    const revenue = useRef(0);
    const sales = useRef(0);
    const expenses = useRef(0);
    const [income, setIncome] = useState([]);

    const findPercentage = (val1, val2) => ((val1 - val2) / val2) * 100;

    useEffect(() => {
        if (income.length > 1) {
            revenue.current = findPercentage((0.45 * income[1]?.total), (0.4 * income[0]?.total));
            sales.current = findPercentage(income[1].total, income[0].total);
            expenses.current = findPercentage((0.25 * income[1]?.total), (0.2 * income[0]?.total));
        }
    }, [income]);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const { data } = await userRequest.get('/orders/admin/income');
                setIncome(data.sort((a, b) => a._id - b._id));

            } catch (err) {
                console.error(setError(err));
            }
        }
        getIncome();
    }, []);

    return (
        <>
            <article className='col-sm-4 mb-3 mb-sm-0'>
                <div className='card shadow-sm'>
                    <div className='card-body p-sm-2 p-lg-3'>
                        <h4>Revenue</h4>
                        <div className='stats'>
                            {
                                income.length > 1
                                    ? <>
                                        <span className='amount'>${((0.4 * income[1]?.total) + income[1]?.total).toFixed(2)}</span>
                                        <span className='rate ms-3'>
                                            {(revenue.current).toFixed(0)}%
                                            {revenue.current < 0
                                                ? <i className='fa-solid fa-arrow-down neg'></i>
                                                : <i className='fa-solid fa-arrow-up'></i>
                                            }
                                        </span>
                                    </>
                                    : <p>Data currently unavailable</p>
                            }
                        </div>
                        <footer>Compared to previous month</footer>
                    </div>
                </div>
            </article>

            <article className='col-sm-4 mb-3 mb-sm-0'>
                <div className='card shadow-sm'>
                    <div className='card-body p-sm-2 p-lg-3'>
                        <h4>Sales</h4>
                        <div className='stats'>
                            {
                                income.length > 1
                                    ? <>
                                        <span className='amount'>${(income[1]?.total).toFixed(2)}</span>
                                        <span className='rate ms-3'>
                                            {(sales.current).toFixed(0)}%
                                            {sales.current < 0
                                                ? <i className='fa-solid fa-arrow-down neg'></i>
                                                : <i className='fa-solid fa-arrow-up'></i>
                                            }
                                        </span>
                                    </>
                                    : <p>Data currently unavailable</p>
                            }
                        </div>
                        <footer>Compared to previous month</footer>
                    </div>
                </div>
            </article>

            <article className='col-sm-4'>
                <div className='card shadow-sm'>
                    <div className='card-body p-sm-2 p-lg-3'>
                        <h4>Expenses</h4>
                        <div className='stats'>
                            {
                                income.length > 1
                                    ? <>
                                        <span className='amount'>${(0.25 * income[1]?.total).toFixed(2)}</span>
                                        <span className='rate ms-3'>
                                            {(expenses.current).toFixed(0)}%
                                            {expenses.current < 0
                                                ? <i className='fa-solid fa-arrow-down'></i>
                                                : <i className='fa-solid fa-arrow-up neg'></i>
                                            }
                                        </span>
                                    </>
                                    : <p>Data currently unavailable</p>
                            }
                        </div>
                        <footer>Compared to previous month</footer>
                    </div>
                </div>
            </article>
        </>
    )
}

export default TopStats
