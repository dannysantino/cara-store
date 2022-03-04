const Blogpost = () => {
    return (
        <>
            {
                [...Array(5).keys()].map(e => (
                    <div className='row blog pb-5 mb-5' key={e + 1}>
                        <div className='col-12 col-sm-5 mb-4'>
                            <div className='wrapper image'>
                                <img src={`img/blog/b${e + 1}.jpg`} alt='fashion-trend' />
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='wrapper preview'>
                                <h4>The Hottest Fashionova Trends For Women</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus incidunt ipsa placeat
                                    veritatis quibusdam id nisi voluptate! Minus cumque eius cupiditate suscipit totam
                                    reiciendis placeat saepe, quam atque quae aperiam!</p>
                                <a href='#'>CONTINUE READING</a>
                            </div>
                        </div>
                        <h1>12/01</h1>
                    </div>
                ))
            }
        </>
    )
}

export default Blogpost
