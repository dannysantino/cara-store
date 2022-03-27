import { Link } from 'react-router-dom'

import '../stylesheets/Pagination.css'

const Pagination = () => {
    return (
        <div id='pagination'>
            <nav aria-label='...'>
                <ul className='pagination'>
                    <li className='page-item disabled'>
                        <Link className='page-link'>Previous</Link>
                    </li>
                    <li className='page-item active' aria-current='page'>
                        <Link className='page-link' to='#'>1</Link>
                    </li>
                    <li className='page-item'><Link className='page-link tag' to='#'>2</Link></li>
                    <li className='page-item'><Link className='page-link tag' to='#'>3</Link></li>
                    <li className='page-item'><Link className='page-link tag' to='#'>Next</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
