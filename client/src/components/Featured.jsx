import '../stylesheets/Featured.css'

const Featured = ({ context }) => {
    return (
        <>
            {
                [...Array(8).keys()].map(e => {
                    return (
                        <div className='col-12 col-sm-6 col-lg-3' key={e + 1}>
                            <div className='product'>
                                <img src={`/img/products/${context + (e + 1)}.jpg`} alt='clothing-item' />
                                <div className='desc'>
                                    <span>hermes</span>
                                    <h5>T-Shirt - Flowery Design</h5>
                                    <div className='star'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </div>
                                    <h4>$127.99</h4>
                                </div>
                                <a href='#'><i className='fa-solid fa-cart-plus cart-p'></i></a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Featured
