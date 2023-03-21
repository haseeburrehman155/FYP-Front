function Banner(){
return (
    <section className="intro-section p-relative" style={{display: window.location.pathname == "/" ? 'block': 'none'}}>
    <div className="owl-carousel owl-theme owl-nav-fade owl-nav-arrow intro-slider animation-slider row cols-1 gutter-no"  >
        <div className="intro-slider intro-slide1 banner banner-fixed">
            <figure>
                <img src={require('../../images/demos/demo-market3/intro/intro-banner-1.jpg')} alt="intro-banner"
                    width="1903" height="798" style={{backgroundColor: "#b5b5b3"}} />
            </figure>
            <div className="container">
                <div className="banner-content y-50 mt-9">
                    <h2 className="banner-title font-weight-bolder slide-animate ls-s text-white"
                        data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1.2s', 'delay': '.6s'}">
                        <span className="text-dark">2021</span> Men's Season Collection</h2>
                    <h3 className="banner-subtitle slide-animate mb-10 pb-1 text-body font-weight-semi-bold ls-s"
                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1.2s', 'delay': '1s'}">
                        Get Free Shipping on all orders over<span className="text-primary font-weight-bold">
                            $99.00</span>
                    </h3>
                    <a href="market3-shop.html"
                        className="btn btn-dark btn-rounded slide-animate ls-normal text-uppercase"
                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '1.4s'}">Shop
                        Now<i className="d-icon-arrow-right"></i></a>
                </div>
            </div>
        </div>
        <div className="intro-slider intro-slide2 banner">
            <figure>
                <img src={require('../../images/demos/demo-market3/intro/intro-banner-2-1.jpg')}
                alt="intro-banner"
                    width="1903" height="798" style={{backgroundColor: "#333438"}} />
            </figure>
            <div className="row p-absolute banner-content mt-10 mt-md-0  pt-10 pt-md-0">
                <div className="col-12 col-md-6 banner-figure">
                    <figure className="p-absolute y-50 x-50 floating"
                        data-options='{"invertX":true,"invertY":true}'>
                        <img 
                    src={require('../../images/demos/demo-market3/intro/slide-2.com-779x500.png')}  
                     
                            className="layer mx-auto " alt="slide2-shoes" width="779" height="500"/>
                    </figure>
                </div>
                <div className="col-12 col-md-6 banner-text">
                    <div className="p-absolute y-50  mt-lg-10 pt-1">
                        <h3 className="banner-subtitle slide-animate ls-m text-primary font-weight-normal"
                            data-animation-options="{'name': 'blurIn', 'duration': '1.2s', 'delay': '.2s'}">
                            Amazing Scientific Results</h3>
                        <h2 className="banner-title font-weight-bold mb-9 slide-animate ls-s text-white"
                            data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '1.4s'}">
                            Now's Trending<br/>Super Elastic<br/>Running Shoes
                        </h2>
                        <a href="market3-shop.html"
                            className="btn btn-dark btn-rounded slide-animate ls-normal mb-2 text-uppercase"
                            data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '1.8s'}">SHOP
                            Now<i className="d-icon-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="intro-slider intro-slide3 banner banner-fixed text-center">
            <figure>
                <img 
                src={require('../../images/demos/demo-market3/intro/intro-banner-3.jpg')}
                
                 alt="intro-banner"
                    width="1903" height="798" style={{backgroundColor: "#656a70" }}/>
            </figure>
            <div className="container">
                <div className="banner-content y-50 p-absolute mt-lg-10">
                    <h3 className="banner-subtitle font-weight-semi-bold mb-4 slide-animate text-uppercase ls-m"
                        data-animation-options="{'name': 'fadeIn', 'duration': '1.2s', 'delay': '.2s'}">
                        Trending Woman's lifestyle
                    </h3>
                    <h2 className="banner-title font-weight-bolder mb-3 slide-animate text-white ls-s"
                        data-animation-options="{'name': 'blurIn', 'duration': '1.2s', 'delay': '.2s'}">
                        Neat and Tidy T-Shirts for Young Women
                    </h2>
                    <p className="banner-descri slide-animate mb-7 text-white ls-m font-weight-normal"
                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '1.4s'}">
                        Starting at <span className="text-primary font-weight-bold">99.00</span></p>
                    <a href="market3-shop.html"
                        className="btn btn-dark btn-rounded slide-animate ls-m text-uppercase"
                        data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '1.8s'}">shop
                        Now<i className="d-icon-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div className="owl-dots-container p-absolute y-50 d-lg-show d-flex flex-column mt-10">
        <button title="dots-container" className="owl-dot">
            <img 
             src={require('../../images/demos/demo-market3/intro/slide-dot-1.png')}
            alt="intro-dot" width="91"
                height="91" />
            <span className="dot-content">
                <span className="dot-index">01.</span>
            </span>
        </button>
        <button title="dots-container" className="owl-dot">
            <img
             src={require('../../images/demos/demo-market3/intro/slide-dot-2.png')}
               alt="intro-dot" width="91"
                height="91" />
            <span className="dot-content">
                <span className="dot-index">02.</span>
            </span>
        </button>
        <button title="dots-container" className="owl-dot">
            <img 
             src={require('../../images/demos/demo-market3/intro/slide-dot-3.png')}
            alt="intro-dot" width="91"
                height="91" />
            <span className="dot-content">
                <span className="dot-index">03.</span>
            </span>
        </button>
    </div>
</section>
)

}

export default  Banner;