const Spinner = () => {
    return (
        <div className='spinner'>
            <div
                className='spinner-border text-info'
                style={{ width: '3rem', height: '3rem' }}
                role='status'
            >
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    )
}

export default Spinner
