import { Link } from 'react-router-dom'

import '../stylesheets/Pagination.css'

const Pagination = () => {
    return (
        <div id='pagination'>
            <nav aria-label='...'>
                <ul className='pagination'>
                    <li className='page-item disabled'>
                        <Link to='#' className='page-link'>Previous</Link>
                    </li>
                    <li className='page-item active' aria-current='page'>
                        <Link to='#' className='page-link'>1</Link>
                    </li>
                    <li className='page-item'><Link to='#' className='page-link tag'>2</Link></li>
                    <li className='page-item'><Link to='#' className='page-link tag'>3</Link></li>
                    <li className='page-item'><Link to='#' className='page-link tag'>Next</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
