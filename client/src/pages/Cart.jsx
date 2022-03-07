import '../stylesheets/Cart.css'

const Cart = () => {
    return (
        <>
            <section id='cart-header' className='page-header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='wrapper text-center'>
                                <h2>#cart</h2>
                                <p>Add a coupon code and save up to 45%!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='cart' className='py-5 mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <table width='100%'>
                                <thead>
                                    <tr>
                                        <td>Remove</td>
                                        <td>Image</td>
                                        <td>Product</td>
                                        <td>Price</td>
                                        <td>Quantity</td>
                                        <td>Subtotal</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href='#' className='plain-anchor'><i className='fa-regular fa-circle-xmark'></i></a></td>
                                        <td><img src='img/products/f1.jpg' alt='cart-item' /></td>
                                        <td>Men's Fashion T-Shirt</td>
                                        <td>$104.99</td>
                                        <td><input type='number' value='1' /></td>
                                        <td>$104.99</td>
                                    </tr>
                                    <tr>
                                        <td><a href='#' className='plain-anchor'><i className='fa-regular fa-circle-xmark'></i></a></td>
                                        <td><img src='img/products/f2.jpg' alt='cart-item' /></td>
                                        <td>Men's Fashion T-Shirt</td>
                                        <td>$104.99</td>
                                        <td><input type='number' value='1' /></td>
                                        <td>$104.99</td>
                                    </tr>
                                    <tr>
                                        <td><a href='#' className='plain-anchor'><i className='fa-regular fa-circle-xmark'></i></a></td>
                                        <td><img src='img/products/f3.jpg' alt='cart-item' /></td>
                                        <td>Men's Fashion T-Shirt</td>
                                        <td>$104.99</td>
                                        <td><input type='number' value='1' /></td>
                                        <td>$104.99</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section id='summary'>
                <div className='container'>
                    <div className='row px-sm-4'>
                        <div className='col-12 col-md-6'>
                            <div id='coupon' className='pt-md-4 mb-4'>
                                <h4 className='mb-3'>Apply Coupon</h4>
                                <div className='form'>
                                    <p>Enter your coupon if you have one</p>
                                    <input type='text' placeholder='Coupon code' />
                                    <button className='base'>Apply</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div id='subtotal' className='p-4 mb-4'>
                                <h4 className='mb-3'>Cart Total</h4>
                                <table className='mb-4'>
                                    <tbody>
                                        <tr>
                                            <td>Cart Subtotal</td>
                                            <td>$ 314.97</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td>$12</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total</strong></td>
                                            <td><strong>$ 336.97</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className='base'>Proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
