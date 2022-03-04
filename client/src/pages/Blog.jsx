import Blogpost from '../components/Blogpost'
import Pagination from '../components/Pagination'

import '../stylesheets/Blog.css'

const Blog = () => {
    return (
        <>
            <section id='blog-header' className='page-header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='wrapper text-center'>
                                <h2>#readmore</h2>
                                <p>Check out our blog for the latest and hottest fashion trends!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='blogs' className='py-5 mt-5'>
                <div className='container'>
                    <Blogpost />
                </div>
            </section>

            <Pagination />
        </>
    )
}

export default Blog
