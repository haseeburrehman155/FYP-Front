import { Link } from "react-router-dom";
import Headers from "../Common/Headers"
import MobileMenu from "../Common/Menu";


function AboutUs(){
    return <div className="about-us">

    <div className="page-wrapper">
        {Headers()}
       
        <main className="main">
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><a href="/"><i className="d-icon-home"></i></a></li>
                        <li><a href="/AboutUS"><i> About Us</i></a></li>
                    </ul>
                </div>
            </nav>
            <div className="page-header pl-4 pr-4" style={{backgroundImage: "url(/images/page-header/about-us.jpg)"}}>
                <h3 className="page-subtitle font-weight-bold">Welcome to OrderBridge</h3>
                <h1 className="page-title font-weight-bold lh-1 text-white text-capitalize">Our Services</h1>
                <p className="page-desc text-white mb-0">Lorem quis bibendum auctor, nisi elit consequat ipsum,<br/> nec
                    sagittis sem nibh id elit.</p>
            </div>
            <div className="page-content mt-10 pt-10">
                <section className="about-section pb-10 appear-animate">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 mb-10 mb-lg-4">
                                <h5 className="section-subtitle lh-2 ls-md font-weight-normal">01. What We Do</h5>
                                <h3 className="section-title lh-1 font-weight-bold">Provide perfect and practical services
                                </h3>
                                <p className="section-desc">Lorem quis bibendum auctar, nisi elit consequat ipsum, nec
                                    sagittis sem nibh id elit.</p>
                            </div>
                            <div className="col-lg-8 ">
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="counter text-center text-dark">
                                            <span className="count-to" data-fromvalue="0" data-tovalue="34"
                                                data-duration="900" data-delimiter=",">0</span>
                                            <h5 className="count-title font-weight-bold text-body ls-md">Business Year</h5>
                                            <p className="text-grey mb-0">Lorem ipsum dolor sit<br/>amet, conctetur adipisci
                                                elit. viverra erat orci.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="counter text-center text-dark">
                                            <span className="count-to" data-fromvalue="0" data-tovalue="50"
                                                data-duration="900" data-delimiter=",">0</span>
                                            <h5 className="count-title font-weight-bold text-body ls-md">Design Brands</h5>
                                            <p className="text-grey mb-0">Lorem ipsum dolor sit<br/>amet, conctetur adipisci
                                                elit. viverra erat orci.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="counter text-center text-dark">
                                            <span className="count-to" data-fromvalue="0" data-tovalue="130"
                                                data-duration="900" data-delimiter=",">0</span>
                                            <h5 className="count-title font-weight-bold text-body ls-md">Team Members</h5>
                                            <p className="text-grey mb-0">Lorem ipsum dolor sit<br/>amet, conctetur adipisci
                                                elit. viverra erat orci.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End About Section--> */}

                <section className="customer-section pb-10 appear-animate">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7 mb-4">
                                <figure>
                                    <img src="/images/subpages/customer.jpg" alt="Happy Customer" width="580"
                                        height="507" className="banner-radius" style={{backgroundColor: "#BDD0DE"}} />
                                </figure>
                            </div>
                            <div className="col-md-5 mb-4">
                                <h5 className="section-subtitle lh-2 ls-md font-weight-normal">02. Happy Customer</h5>
                                <h3 className="section-title lh-1 font-weight-bold">Provide fashionable and<br/>qualifed
                                    products</h3>
                                <p className="section-desc text-grey">
                                    Already millions of people are very satisfied by this<br/>
                                    page builder and the number is growing more and more. Technolog<br/>
                                    developing, requirements are increasing. Riode has brought.
                                </p>
                                <a href="/" className="btn btn-dark btn-link btn-underline ls-m">Visit Our Store<i
                                        className="d-icon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Customer Section --> */}

                <section className="store-section pb-10 appear-animate">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 order-md-first mb-4">
                                <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1">03. Our Store</h5>
                                <h3 className="section-title lh-1 font-weight-bold">Expect Restless<br/>Amazing Support</h3>
                                <p className="section-desc text-grey">
                                    Already millions of people are very satisfied by this <br/>
                                     page builder and the number is growing more and more. Technolog<br/>
                                    developing, requirements are increasing. Riode has brought.
                                </p>
                                <a href="#" className="btn btn-dark btn-link btn-underline ls-m">Get Our Store<i
                                        className="d-icon-arrow-right"></i></a>
                            </div>
                            <div className="col-md-6 mb-4">
                                <figure>
                                    <img src="/images/subpages/store.jpg" alt="Our Store" width="580" height="507"
                                        className="banner-radius" style={{backgroundColor: "#DEE6E8"}} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Store-section --> */}

                <section className="team-section pt-8 mt-10 pb-10 mb-6 appear-animate">
                    <div className="container">
                        <h5 className="section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center">04. Our Leaders</h5>
                        <h3 className="section-title lh-1 font-weight-bold text-center mb-5">Meet our team</h3>
                        <div className="row cols-sm-2 cols-md-4">
                            <div className="member appear-animate" data-animation-options="{'name': 'fadeInLeftShorter'}">
                                <figure className="banner-radius">
                                    <img src="/images/subpages/cheebo.jpg" alt="team member"
                                        style={{backgroundColor: "#EEE",height:"280px",width:"280px"}}/>
                                    <div className="overlay social-links">
                                        <a href="#" className="social-link social-facebook fab fa-facebook-f"></a>
                                        <a href="#" className="social-link social-twitter fab fa-twitter"></a>
                                        <a href="#" className="social-link social-linkedin fab fa-linkedin-in"></a>
                                    </div>
                                </figure>
                                <h4 className="member-name">Haseeb Ur Rehman</h4>
                                <h5 className="member-job">Ceo / Founder</h5>
                            </div>
                            <div className="member appear-animate"
                                data-animation-options="{'name': 'fadeInLeftShorter', 'delay': '.3s'}">
                                <figure className="banner-radius">
                                    <img src="/images/subpages/team2.jpg" alt="team member" width="280" height="280"
                                        style={{backgroundColor: "#121A1F"}}/>
                                    <div className="overlay social-links">
                                        <a href="#" className="social-link social-facebook fab fa-facebook-f"></a>
                                        <a href="#" className="social-link social-twitter fab fa-twitter"></a>
                                        <a href="#" className="social-link social-linkedin fab fa-linkedin-in"></a>
                                    </div>
                                </figure>
                                <h4 className="member-name">Ezaaz Shahid</h4>
                                <h5 className="member-job">Support manager / founder</h5>
                            </div>
                            <div className="member appear-animate"
                                data-animation-options="{'name': 'fadeInLeftShorter', 'delay': '.4s'}">
                                <figure className="banner-radius">
                                    <img src="/images/subpages/team3.jpg" alt="team member" width="280" height="280"
                                        style={{backgroundColor: "#E8E7E3"}}/>
                                    <div className="overlay social-links">
                                        <a href="#" className="social-link social-facebook fab fa-facebook-f"></a>
                                        <a href="#" className="social-link social-twitter fab fa-twitter"></a>
                                        <a href="#" className="social-link social-linkedin fab fa-linkedin-in"></a>
                                    </div>
                                </figure>
                                <h4 className="member-name">Viktoriia Demianenko</h4>
                                <h5 className="member-job">Designer</h5>
                            </div>
                            <div className="member appear-animate"
                                data-animation-options="{'name': 'fadeInLeftShorter', 'delay': '.5s'}">
                                <figure className="banner-radius">
                                    <img src="/images/subpages/team4.jpg" alt="team member" width="280" height="280"
                                        style={{backgroundColor: "#465D7F"}}/>
                                    <div className="overlay social-links">
                                        <a href="#" className="social-link social-facebook fab fa-facebook-f"></a>
                                        <a href="#" className="social-link social-twitter fab fa-twitter"></a>
                                        <a href="#" className="social-link social-linkedin fab fa-linkedin-in"></a>
                                    </div>
                                </figure>
                                <h4 className="member-name">Mikhail Hnatuk</h4>
                                <h5 className="member-job">Support</h5>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Team Section --> */}
            </div>
        </main>
        {/* <!-- End Main --> */}
       
        

    </div>
  

    <a id="scroll-top" href="#top" title="Top" role="button"
     className="scroll-top"><i className="d-icon-arrow-up"></i></a>

    {/* <!-- MobileMenu --> */}

    <div className="mobile-menu-wrapper">
        <div className="mobile-menu-overlay">
        </div>
        {/* <!-- End Overlay --> */}

        <a className="mobile-menu-close" href="#"><i className="d-icon-times"></i></a>

        {/* <!-- End CloseButton --> */}
        <div className="mobile-menu-container scrollable">
            <form action="#" className="input-wrapper">
                <input type="text" className="form-control" name="search" autoComplete="off"
                    placeholder="Search your keyword..." required />
                <button className="btn btn-search" type="submit">
                    <i className="d-icon-search"></i>
                </button>
            </form>
           
        </div>

    </div>


    {MobileMenu()}

	{/* <!-- Plugins JS File --> */}
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/jquery.count-to/jquery-numerator.min.js"></script>
    <script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
    <script src="vendor/owl-carousel/owl.carousel.min.js"></script>
    {/* <!-- Main JS File --> */}
    <script src="js/main.min.js"></script>
   
</div>
}

export default AboutUs;