import '../stylesheets/Pagination.css'

const Pagination = () => {
    return (
        <div id='pagination' className='py-5'>
            <nav aria-label='...'>
                <ul className='pagination'>
                    <li className='page-item disabled'>
                        <a className='page-link'>Previous</a>
                    </li>
                    <li className='page-item active' aria-current='page'>
                        <a className='page-link' href='#'>1</a>
                    </li>
                    <li className='page-item'><a className='page-link tag' href='#'>2</a></li>
                    <li className='page-item'><a className='page-link tag' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link tag' href='#'>Next</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
