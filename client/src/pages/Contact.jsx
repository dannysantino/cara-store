import avatar1 from '../assets/img/people/1.png'
import avatar2 from '../assets/img/people/2.png'
import avatar3 from '../assets/img/people/3.png'
import '../stylesheets/Contact.css'

const Contact = () => {
    return (
        <>
            <section id='contact-header' className='page-header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='wrapper text-center'>
                                <h2>#let's_talk</h2>
                                <p>Leave us a message. We'd love to hear from you!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='contact' className='pb-4 py-md-5 mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='wrapper details'>
                                <span>GET IN TOUCH</span>
                                <h2>Visit one of our agency locations or contact us today</h2>
                                <h4>Head Office</h4>
                                <div className='contact-details'>
                                    <ul>
                                        <li>
                                            <i className='fa-solid fa-map-location-dot'></i>
                                            <p>1104 Brentford Ave. Yorkshire Town, West Belfast</p>
                                        </li>
                                        <li>
                                            <i className='fa-solid fa-envelope-open-text'></i>
                                            <p>contact@caraonline.com</p>
                                        </li>
                                        <li>
                                            <i className='fa-solid fa-mobile-screen-button'></i>
                                            <p>+1 (555) 4129</p>
                                        </li>
                                        <li>
                                            <i className='fa-solid fa-business-time'></i>
                                            <p>Monday to Saturday: 9am - 7pm</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-6 mt-4 mt-md-0'>
                            <div className='wrapper map'>
                                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73968.40792802478!2d-5.996671590783298!3d54.59495923962352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860fffdd7d08a3b%3A0x2e57162cefc7c531!2sBelfast%2C%20UK!5e0!3m2!1sen!2sng!4v1646571467204!5m2!1sen!2sng' title='store location map' width='600' height='450' style={{ border: 0 }} allowFullScreen='' loading='lazy'></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='contact-form' className='pt-5 pb-lg-5'>
                <div className='container'>
                    <div className='row pt-5 px-sm-3 px-md-4 p-lg-5 mx-1 mx-sm-0'>
                        <div className='col-12 col-lg-7 col-xl-8'>
                            <div className='wrapper form'>
                                <form action=''>
                                    <span>LEAVE A MESSAGE</span>
                                    <h2>We'd love to hear from you</h2>
                                    <input type='text' placeholder='Your name' />
                                    <input type='text' placeholder='E-mail' />
                                    <input type='text' placeholder='Subject' />
                                    <textarea cols='30' rows='10' placeholder='Your Message'></textarea>
                                    <button className='base'>Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className='col-12 col-lg-5 col-xl-4 mt-4'>
                            <div className='wrapper contact-staff ms-lg-5'>
                                <h2>Contact Staff</h2>
                                <div className='staff mb-5'>
                                    <img src={avatar1} alt='male-person' />
                                    <div className='info'>
                                        <p>Phil Anderson</p>
                                        <span>Senior Marketing Manager</span>
                                        <br />
                                        <span>+1 (555) 1221</span>
                                        <br />
                                        <span>E-mail: panderson@cara.com</span>
                                    </div>
                                </div>
                                <div className='staff mb-5'>
                                    <img src={avatar2} alt='male-person' />
                                    <div className='info'>
                                        <p>Jack Miles</p>
                                        <span>Sales Director</span>
                                        <br />
                                        <span>+1 (555) 1131</span>
                                        <br />
                                        <span>E-mail: jakemiles@cara.com</span>
                                    </div>
                                </div>
                                <div className='staff mb-5'>
                                    <img src={avatar3} alt='female-person' />
                                    <div className='info'>
                                        <p>Sarah Perkins</p>
                                        <span>Social Media Manager</span>
                                        <br />
                                        <span>+1 (555) 1173</span>
                                        <br />
                                        <span>E-mail: s.perkins@cara.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
