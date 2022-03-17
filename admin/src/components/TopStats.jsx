const Featured = () => {
    return (
        <>
            <article className='col-4'>
                <div className='card shadow-sm'>
                    <div className='card-body'>
                        <h4>Revenue</h4>
                        <div className='stats'>
                            <span className='amount'>$2,418</span>
                            <span className='rate ms-3'>
                                -9.8
                                <i className='fa-solid fa-arrow-down neg'></i>
                            </span>
                        </div>
                        <footer>Compared to previous month</footer>
                    </div>
                </div>
            </article>

            <article className='col-4'>
                <div className='card shadow-sm'>
                    <div className='card-body'>
                        <h4>Sales</h4>
                        <div className='stats'>
                            <span className='amount'>$11,048</span>
                            <span className='rate ms-3'>
                                -4.2
                                <i className='fa-solid fa-arrow-down neg'></i>
                            </span>
                        </div>
                        <footer>Compared to previous month</footer>
                    </div>
                </div>
            </article>

            <article className='col-4'>
                <div className='card shadow-sm'>
                    <div className='card-body'>
                        <h4>Cost</h4>
                        <div className='stats'>
                            <span className='amount'>$1,098</span>
                            <span className='rate ms-3'>
                                6.9
                                <i className='fa-solid fa-arrow-up'></i>
                            </span>
                        </div>
                        <footer>Compared to previous month</footer>
                    </div>
                </div>
            </article>

        </>
    )
}

export default Featured
