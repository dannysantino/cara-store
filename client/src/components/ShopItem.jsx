import { Link } from 'react-router-dom';

import importImages from '../utils/importImages'

const ShopItem = ({ data: { _id: id, name, img, categories, price } }) => {
    const images = importImages(require.context('../assets/img/products', false, /\.jpg/));

    return (
        <div className='col-12 col-sm-6 col-lg-3'>
            <div className='product'>
                <img src={images[img]} alt='t-shirt' />
                <div className='desc'>
                    <span>{categories.join(', ')}</span>
                    <h5>{name}</h5>
                    <div className='star'>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                        <i className='fa-solid fa-star'></i>
                    </div>
                    <h4>${price}</h4>
                </div>
                <Link to={`product/${id}`}><i className='fa-solid fa-cart-plus cart-p'></i></Link>
            </div>
        </div>
    )
}

export default ShopItem
