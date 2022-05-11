import { Link } from 'react-router-dom'

export const useProductRows = callback => {
    return {
        columns: [
            {
                field: '_id',
                headerName: 'ID',
                width: 220
            },
            {
                field: 'product',
                headerName: 'Product',
                width: 400,
                renderCell: params => (
                    <div className='product'>
                        <img src={params.row.img} alt={params.row.name} />
                        <Link
                            to={`/product/${params.row._id}`}
                            className='text-decoration-none'
                        >
                            {params.row.name}
                        </Link>
                    </div>
                )
            },
            {
                field: 'status',
                headerName: 'In Stock',
                width: 180,
                renderCell: params => (
                    <div className='status'>
                        <span>
                            {params.row.countInStock > 0 ? 'Yes' : 'No'}
                        </span>
                    </div>
                )
            },
            {
                field: 'countInStock',
                headerName: 'Count',
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
                        <Link
                            to={`/product/${params.row._id}`}
                            className='btn btn-info'
                        >
                            Edit
                        </Link>
                        <i
                            className='fa-solid fa-trash'
                            onClick={() => callback(params.row._id)}
                        ></i>
                    </div>
                )
            }
        ]
    }
}

export const useUserRows = callback => {
    return {
        columns: [
            {
                field: '_id',
                headerName: 'ID',
                width: 220
            },
            {
                field: 'user',
                headerName: 'User',
                width: 300,
                renderCell: params => (
                    <div className='user'>
                        <img src={params.row.img} alt={params.row.name} />
                        <Link
                            to={`/user/${params.row._id}`}
                            className='text-decoration-none'
                        >
                            {params.row.name}
                        </Link>
                    </div>
                )
            },
            {
                field: 'username',
                headerName: 'Username',
                width: 180
            },
            {
                field: 'email',
                headerName: 'Email',
                width: 280
            },
            {
                field: 'isAdmin',
                headerName: 'Admin',
                width: 160
            },
            {
                field: 'action',
                headerName: 'Action',
                width: 200,
                renderCell: params => (
                    <div className='actions'>
                        <Link
                            to={`/user/${params.row._id}`}
                            className='btn btn-info'
                        >
                            Edit
                        </Link>
                        <i
                            className='fa-solid fa-trash'
                            onClick={() => callback(params.row._id)}
                        ></i>
                    </div>
                )
            }
        ]
    }
}

export const useOrderRows = callback => {
    return {
        columns: [
            {
                field: '_id',
                headerName: 'ID',
                width: 220
            },
            {
                field: 'customer',
                headerName: 'Customer',
                width: 400,
                renderCell: params => (
                    <div className='customer'>
                        <img src={params.row.customer.img} alt={params.row.customer.name} />
                        <Link
                            to={`/order/${params.row._id}`}
                            className='text-decoration-none'
                        >
                            {params.row.customer.name}
                        </Link>
                    </div>
                )
            },
            {
                field: 'quantity',
                headerName: 'Quantity',
                width: 180,
                renderCell: params => (
                    <div className='quantity'>
                        <span>{params.row.products.quantity}</span>
                    </div>
                )
            },
            {
                field: 'amount',
                headerName: 'Amount',
                width: 180
            },
            {
                field: 'status',
                headerName: 'Status',
                width: 180
            },
            {
                field: 'action',
                headerName: 'Cancel Order',
                width: 180,
                renderCell: params => (
                    <div className='actions'>
                        <i
                            className='fa-solid fa-ban'
                            onClick={() => callback(params.row._id)}
                        ></i>
                    </div>
                )
            }
        ]
    }
}