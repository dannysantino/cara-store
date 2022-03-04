import Featured from '../components/Featured'

import '../stylesheets/About.css'

const About = () => {
    return (
        <>
            <section id='about-header' className='page-header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='wrapper text-center'>
                                <h2>#KnowUs</h2>
                                <p>Get to know more about us and the services we offer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='about' className='py-sm-5 my-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <div className='wrapper image'>
                                <img src='img/about/a6.jpg' alt='shopping illustration' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 mt-4 mt-lg-0'>
                            <div className='wrapper story pt-4 ps-0 ps-lg-3'>
                                <h2 className='text-center text-lg-start'>Who We Are</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum perspiciatis soluta
                                    quibusdam impedit sapiente reprehenderit nihil, amet fuga quia ipsum delectus ipsam eos
                                    molestias, eius, voluptas animi dolorum beatae! Magnam.
                                    Minima saepe ducimus at nihil eveniet, atque magni eligendi assumenda iusto non, velit
                                    dignissimos quaerat quod vero cumque. Recusandae necessitatibus sapiente nam magnam unde
                                    quos asperiores nisi vel? Aspernatur, ullam.
                                </p>
                                <abbr>Create stunning images with as much or as little control as you like thanks to a choice of
                                    Basic and Creative modes</abbr>
                                <br /><br />
                                <marquee bgcolor='#ccc' loop='-1' scrollamount='5' width='100%'>Create stunning images with as
                                    much or as little control as you like thanks to a choice of Basic and Creative modes
                                </marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='app'>
                <div className='container'>
                    <div className='heading text-center'>
                        <h2>Download Our <a href='#'>App</a></h2>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-12 col-lg-8 offset-lg-2'>
                            <div className='wrapper video'>
                                <video src='img/about/1.mp4' autoPlay muted loop></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='fea-products' className='products pt-3 my-5'>
                <div className='container-fluid'>
                    <h2>Featured Products</h2>
                    <p>Updated Summer Collection</p>
                    <div className='row px-4 px-xl-5'>
                        <Featured context={'f'} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
