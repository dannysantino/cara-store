import { DataGrid } from '@mui/x-data-grid'

import Spinner from './Spinner'

import '../stylesheets/DataTable.css'

const DataTable = ({ rows, columns, fetching, error }) => {
    return (
        <section id='data-table'>
            <div className='row mb-3 mb-lg-5'>
                <div className='col-12'>
                    <div className='wrapper'>
                        {
                            fetching
                                ? (
                                    <Spinner />
                                )
                                : error
                                    ? (
                                        <div className='error'>
                                            <h4 className='text-danger'>
                                                An error was encountered. Please reload the page to try again.
                                            </h4>
                                        </div>
                                    )
                                    : (
                                        <DataGrid
                                            rows={rows}
                                            columns={columns}
                                            rowHeight={70}
                                            pageSize={10}
                                            getRowId={row => row._id}
                                            rowsPerPageOptions={[10]}
                                            checkboxSelection
                                            disableSelectionOnClick
                                        />
                                    )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DataTable
