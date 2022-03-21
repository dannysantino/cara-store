import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'

import { productRows } from '../demoData'

import '../stylesheets/Products.css'

const Products = () => {
    const [rows, setRows] = useState(productRows);
    const handleDelete = id => setRows(rows.filter(e => e.id !== id));
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 80
        },
        {
            field: 'product',
            headerName: 'Product',
            width: 400,
            renderCell: params => (
                <div className='product'>
                    <img src={params.row.img} alt={params.row.name} />
                    {params.row.name}
                </div>
            )
        },
        {
            field: 'countInStock',
            headerName: 'Stock',
            width: 180
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 180
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 180
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 250,
            renderCell: params => (
                <div className='actions'>
                    <Link to={`/product/${params.row.id}`} className='btn btn-info'>Edit</Link>
                    <i className='fa-solid fa-trash' onClick={() => handleDelete(params.row.id)}></i>
                </div>
            )
        }
    ]
    return (
        <section className='wrapper' id='products'>
            <div className='row'>
                <div className='col-12'>
                    <div className='wrapper' style={{ height: 800, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            rowHeight={70}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            checkboxSelection
                            disableSelectionOnClick
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
