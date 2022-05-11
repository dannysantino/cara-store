import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteUser, getUsers } from '../redux/actions/usersActions'
import { useUserRows } from '../utils/dataGridColumns'
import DataTable from '../components/DataTable'

const Users = () => {
    const dispatch = useDispatch();
    const { fetching, error, users } = useSelector(state => state.users);

    const handleDelete = id => deleteUser(dispatch, id);
    const { columns } = useUserRows(handleDelete);

    useEffect(() => {
        !users.length && getUsers(dispatch);
    }, [users, dispatch]);

    return (
        <DataTable
            fetching={fetching}
            error={error}
            rows={users}
            columns={columns}
        />
    )
}

export default Users
