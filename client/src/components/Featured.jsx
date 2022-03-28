import { Link } from 'react-router-dom'

import importImages from '../utils/importImages'

import '../stylesheets/Featured.css'

const Featured = ({ context }) => {
    const images = importImages(require.context('../assets/img/products', false, /\.jpg/));

    return (
        <>
            {
                [...Array(4).keys()].map(e => {
                    return (
                        <div className='col-12 col-sm-6 col-lg-3' key={e + 1}>
                            <div className='product'>
                                <img src={images[`${context + (e + 1)}.jpg`]} alt='clothing-item' />
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
                                <Link to='#'><i className='fa-solid fa-cart-plus cart-p'></i></Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Featured
