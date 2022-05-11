import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteProduct, getProducts } from '../redux/actions/productActions'
import { useProductRows } from '../utils/dataGridColumns'
import DataTable from '../components/DataTable'

const Products = () => {
    const dispatch = useDispatch();
    const { fetching, error, products } = useSelector(state => state.products);

    const handleDelete = id => deleteProduct(dispatch, id);
    const { columns } = useProductRows(handleDelete);

    useEffect(() => {
        !products.length && getProducts(dispatch);
    }, [products, dispatch]);

    return (
        <DataTable
            fetching={fetching}
            error={error}
            rows={products}
            columns={columns}
        />
    )
}

export default Products
