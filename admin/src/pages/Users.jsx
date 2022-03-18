import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { userRows } from '../demoData';

import '../stylesheets/Users.css'

const Users = () => {
    const [rows, setRows] = useState(userRows);
    const handleDelete = id => setRows(rows.filter(e => e.id !== id));
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 80
        },
        {
            field: 'user',
            headerName: 'User',
            width: 350,
            renderCell: params => (
                <div className='user'>
                    <img src={params.row.avatar} alt='user-avatar' />
                    {params.row.username}
                </div>
            )
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 350
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: params => (
                <div className='actions'>
                    <Link to={`/user/${params.row.id}`} className='btn btn-info'>Edit</Link>
                    <i className='fa-solid fa-trash' onClick={() => handleDelete(params.row.id)}></i>
                </div>
            )
        }
    ];

    return (
        <section className='wrapper' id='users'>
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

export default Users
