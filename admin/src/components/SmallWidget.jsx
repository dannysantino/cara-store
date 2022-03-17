const SmallWidget = () => {
    return (
        <div className='col-4'>
            <div className='widget-sm card shadow-sm'>
                <div className='card-body p-xxl-4'>
                    <h4 className='card-title'>New Members</h4>
                    <ul className='list-group list-group-flush user-list'>
                        <li className='list-group-item'>
                            <img src='img/users/2.png' alt='user-avatar' />
                            <div className='user'>
                                <span className='username'>Jay Petto</span>
                                <span className='job-title'>Software Engineer</span>
                            </div>
                            <button>
                                <i className='fa-solid fa-eye me-0 me-xxl-2'></i>
                                <span className="d-none d-xxl-inline">Display</span>
                            </button>
                        </li>

                        <li className='list-group-item'>
                            <img src='img/users/3.png' alt='user-avatar' />
                            <div className='user'>
                                <span className='username'>Liz Bennington</span>
                                <span className='job-title'>Administrator</span>
                            </div>
                            <button>
                                <i className='fa-solid fa-eye me-0 me-xxl-2'></i>
                                <span className="d-none d-xxl-inline">Display</span>
                            </button>
                        </li>

                        <li className='list-group-item'>
                            <img src='img/users/1.png' alt='user-avatar' />
                            <div className='user'>
                                <span className='username'>Jack Coulson</span>
                                <span className='job-title'>Sales Manager</span>
                            </div>
                            <button>
                                <i className='fa-solid fa-eye me-0 me-xxl-2'></i>
                                <span className="d-none d-xxl-inline">Display</span>
                            </button>
                        </li>

                        <li className='list-group-item'>
                            <img src='img/users/2.png' alt='user-avatar' />
                            <div className='user'>
                                <span className='username'>Aaron Richards</span>
                                <span className='job-title'>Product Manager</span>
                            </div>
                            <button>
                                <i className='fa-solid fa-eye me-0 me-xxl-2'></i>
                                <span className="d-none d-xxl-inline">Display</span>
                            </button>
                        </li>

                        <li className='list-group-item'>
                            <img src='img/users/3.png' alt='user-avatar' />
                            <div className='user'>
                                <span className='username'>Sarah Finna</span>
                                <span className='job-title'>Media Specialist</span>
                            </div>
                            <button>
                                <i className='fa-solid fa-eye me-0 me-xxl-2'></i>
                                <span className="d-none d-xxl-inline">Display</span>
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SmallWidget
