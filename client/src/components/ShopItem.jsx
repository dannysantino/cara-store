import { Link } from 'react-router-dom'

import importImages from '../utils/importImages'

const ShopItem = ({ data: { _id: id, name, img, categories, price } }) => {
    const images = importImages(require.context('../assets/img/products', false, /\.jpg/));

    return (
        <Link to={`../product/${id}`} className='col-12 col-sm-6 col-lg-3'>
            <div className='product'>
                <img src={images[img]} alt='t-shirt' />
                <div className='desc'>
                    <span>{categories.join(', ')}</span>
                    <h5>{name}</h5>
                    <div className='star'>
                        {[...Array(5).keys()].map(e => <i className='fa-solid fa-star' key={e}></i>)}
                    </div>
                    <h4>${price}</h4>
                </div>
                <span><i className='fa-solid fa-cart-plus cart-p'></i></span>
            </div>
        </Link>
    )
}

export default ShopItem
