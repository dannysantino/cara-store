import { useEffect, useState } from 'react'

import { publicRequest } from '../utils/requestMethods'
import Loader from './Loader'
import ShopItem from './ShopItem'

import '../stylesheets/Featured.css'

const Featured = ({ index }) => {
    const [products, setProducts] = useState([]);
    const [fetchState, setFetchState] = useState({ loading: true, error: false });

    useEffect(() => {
        !products.length && (async () => {
            try {
                const { data } = await publicRequest.get('/products?new=true');
                setProducts(data);
                setFetchState({ loading: false, error: false });
            } catch (err) {
                console.error(err);
                setFetchState({ loading: false, error: true });
            }
        })();
    }, [products.length]);

    return (
        <>
            {
                fetchState.loading
                    ? <Loader />
                    : fetchState.error
                        ? <h4 className='text-danger mt-4'>Error fetching products...</h4>
                        : products.slice(index[0], index[1]).map(e => (
                            <ShopItem data={e} key={e._id} />
                        ))
            }
        </>
    )
}

export default Featured
