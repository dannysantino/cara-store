import { Link } from 'react-router-dom'
import { store } from '../redux/store'

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
                width: 100,
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
                width: 100
            },
            {
                field: 'price',
                headerName: 'Price',
                width: 120
            },
            {
                field: 'action',
                headerName: 'Action',
                width: 200,
                renderCell: params => (
                    <div className='actions'>
                        <Link
                            to={`/product/${params.row._id}`}
                            className='btn btn-info'
                        >
                            Edit
                        </Link>
                        <button
                            className='btn'
                            onClick={() => callback(params.row._id)}
                        >
                            <i className='fa-solid fa-trash'></i>
                        </button>
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
                width: 220
            },
            {
                field: 'isAdmin',
                headerName: 'Admin',
                width: 120
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
                        <button
                            className='btn'
                            onClick={() => callback(params.row._id)}
                        >
                            <i className='fa-solid fa-trash'></i>
                        </button>
                    </div>
                )
            }
        ]
    }
}

export const useOrderRows = callback => {
    const { users: { users } } = store.getState();
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
                width: 350,
                renderCell: params => (
                    <div className='customer'>
                        <img
                            src={users.find(e => e._id === params.row.userId).img}
                            alt={params.row.name}
                        />
                        <Link
                            to={`/order/${params.row._id}`}
                            className='text-decoration-none'
                        >
                            {params.row.name}
                        </Link>
                    </div>
                )
            },
            {
                field: 'quantity',
                headerName: 'Quantity',
                width: 100,
                renderCell: params => (
                    <div className='quantity'>
                        <span>{params.row.products.length}</span>
                    </div>
                )
            },
            {
                field: 'amount',
                headerName: 'Amount',
                width: 120,
                renderCell: params => (
                    <div className='amount'>
                        <span>$ <b>{params.row.total}</b></span>
                    </div>
                )
            },
            {
                field: 'status',
                headerName: 'Status',
                width: 120,
                renderCell: params => (
                    <div className='status'>
                        <span
                            className={`rounded p-2 ${params.row.status === 'pending'
                                ? 'bg-warning'
                                : 'text-white bg-success'}`}
                        >
                            {params.row.status}
                        </span>
                    </div>
                )
            },
            {
                field: 'action',
                headerName: 'Cancel Order',
                width: 100,
                renderCell: params => (
                    <div className='actions'>
                        <button
                            className='btn'
                            onClick={() => callback(params.row._id)}
                            disabled={params.row.status === 'delivered'}
                        >
                            <i className='fa-solid fa-ban'></i>
                        </button>
                    </div>
                )
            }
        ]
    }
}