const LargeWidget = () => {
    const Button = ({ type }) => <button className={type.toLowerCase()}>{type}</button>;

    return (
        <div className='col-8'>
            <div className='widget-lg card shadow-sm'>
                <div className='card-body p-xxl-4'>
                    <h4 className='card-title'>Latest Transactions</h4>
                    <table width='100%'>
                        <thead>
                            <tr>
                                <td>Customer</td>
                                <td>Date</td>
                                <td>Amount</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="img/users/3.png" alt="user-avatar" />
                                    <span className="username">Edith Romanov</span>
                                </td>
                                <td>Apr 5, 2021</td>
                                <td>$104.99</td>
                                <td><Button type='Pending' /></td>
                            </tr>

                            <tr>
                                <td>
                                    <img src="img/users/1.png" alt="user-avatar" />
                                    <span className="username">Ross Bowie</span>
                                </td>
                                <td>Sep 11, 2021</td>
                                <td>$93.99</td>
                                <td><Button type='Approved' /></td>
                            </tr>

                            <tr>
                                <td>
                                    <img src="img/users/2.png" alt="user-avatar" />
                                    <span className="username">Keith Dylan</span>
                                </td>
                                <td>Jun 5, 2021</td>
                                <td>$128.99</td>
                                <td><Button type='Declined' /></td>
                            </tr>

                            <tr>
                                <td>
                                    <img src="img/users/3.png" alt="user-avatar" />
                                    <span className="username">Rachel Gray</span>
                                </td>
                                <td>Jan 2, 2021</td>
                                <td>$66.99</td>
                                <td><Button type='Approved' /></td>
                            </tr>

                            <tr>
                                <td>
                                    <img src="img/users/2.png" alt="user-avatar" />
                                    <span className="username">Bob Milton</span>
                                </td>
                                <td>Apr 13, 2021</td>
                                <td>$145.99</td>
                                <td><Button type='Approved' /></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LargeWidget
