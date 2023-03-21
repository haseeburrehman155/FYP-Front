import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ContactUsActions } from "../../actions/ContactUsActions";
import Headers from "./Headers";
import MobileMenu from "./Menu";



function ContactUs(){
    
const dispatch=useDispatch();
const navigate =useNavigate();


var contactusdata=useSelector(state=>state.contactus);
 const {name,contactemail,message}=contactusdata;
debugger;




 function ButtonClicked(){
    debugger;

    var values ={name,contactemail,message}
    
    if (!name || !contactemail || !message){
        alert ("please fill the form ")
    }else {

         dispatch(ContactUsActions.PostContactUsData(values,navigate));
       
        console.log("Contact data  add ho gaya ");
    }
}





    return <div className="contact-us">
     {Headers()}
    <div className="page-wrapper">
        <main className="main">
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><a href="/"><i className="d-icon-home"></i></a></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </nav>
            <div className="page-header" style={{backgroundImage: "url(images/page-header/contact-us.jpg)"}}>
                <h1 className="page-title font-weight-bold text-capitalize ls-l">Contact Us</h1>
            </div>
            <div className="page-content mt-10 pt-7">
                <section className="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 ls-m mb-4">
                                <div className="grey-section d-flex align-items-center h-100">
                                    <div>
                                        <h4 className="mb-2 text-capitalize">Headquarters</h4>
                                        <p>street 65 inside qasaban gate<br/>Bannu city 2</p>

                                        <h4 className="mb-2 text-capitalize">Phone Number</h4>
                                        <p>
                                            <a href="tel:#">03353956155</a><br/>
                                            <a href="tel:#">03449881478</a>
                                        </p>

                                        <h4 className="mb-2 text-capitalize">Support</h4>
                                        <p className="mb-4">
                                            <a href="#">OrderBridge@cheebo.com</a><br/>
                                            <a href="#">help@OrderBridge.com</a><br/>
                                            <a href="#">Sale</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-6 d-flex align-items-center mb-4">
                                <div className="w-100">
                                    <form className="pl-lg-2" action="#">
                                        <h4 className="ls-m font-weight-bold">Let’s Connect</h4>
                                        <p>Your email address will not be published. Required fields are
                                            marked *</p>
                                        <div className="row mb-2">
                                            <div className="col-12 mb-4">
                                                <textarea className="form-control" required
                                                
                                                    placeholder="Comment*" value={message} 
                                                    onChange={(text)=>
                                                        dispatch(
                                                           ContactUsActions.Contactusformupdate('message',text.target.value))}
                                                           
                                                           ></textarea>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <input className="form-control" type="text" placeholder="Name *"
                                                value={name} 
                                                onChange={(text)=>
                                                    dispatch(
                                                        ContactUsActions.Contactusformupdate('name',text.target.value))}
                                                required/>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <input className="form-control" type="email" placeholder="Email *"
                                                value={contactemail} 
                                                onChange={(text)=>
                                                    dispatch(
                                                        ContactUsActions.Contactusformupdate('contactemail',text.target.value))}
                                                required/>
                                            </div>
                                        </div>
                                        <button className="btn btn-dark btn-rounded" onClick={ButtonClicked}>Post Comment<i
                                                className="d-icon-arrow-right" ></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End About Section--> */}

                <section className="store-section mt-6 pt-10 pb-8">
                    <div className="container">
                        <h2 className="title title-center mb-7 text-normal">Our store</h2>
                        <div className="row cols-sm-2 cols-lg-4">
                            <div className="store">
                                <figure className="banner-radius">
                                    <img src="images/subpages/store-1.jpg" alt="store" width="280" height="280"/>
                                    <h4 className="overlay-visible">Peshawar</h4>
                                    <div className="overlay overlay-transparent">
                                        <a className="mt-8" href="mail:#">Peshawar@market-3.com</a>
                                        <a href="tel:#">Phone: 03353956155</a>
                                        <div className="social-links mt-1">
                                            <a href="#" className="social-link social-facebook fab fa-facebook-f"></a>
                                            <a href="#" className="social-link social-twitter fab fa-twitter"></a>
                                            <a href="#" className="social-link social-linkedin fab fa-linkedin-in"></a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div className="store">
                                <figure className="banner-radius">
                                    <img src="images/subpages/store-2.jpg" alt="store" width="280" height="280"/>
                                    <h4 className="overlay-visible">Islamabad</h4>
                                    <div className="overlay overlay-transparent">
                                        <a className="mt-8" href="mail:#">Islamabad@market-3.com</a>
                                        <a href="tel:#">Phone: 03446798871</a>
                                        <div className="social-links mt-1">
                                            <a href="#" className="social-link social-facebook fab fa-facebook-f"></a>
                                            <a href="#" className="social-link social-twitter fab fa-twitter"></a>
                                            <a href="#" className="social-link social-linkedin fab fa-linkedin-in"></a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div className="store">
                                <figure className="banner-radius">
                                    <img src="images/subpages/store-3.jpg" alt="store" width="280" height="280"/>
                                    <h4 className="overlay-visible">Lahore</h4>
                                    <div className="overlay overlay-transparent">
                                        <a className="mt-8" href="mail:#">Lohore@market-3.com</a>
                                        <a href="tel:#">Phone: 03439039185</a>
                                        <div className="social-links mt-1">
                                            <a href="#" className="social-link social-facebook fab fa-facebook-f"></a>
                                            <a href="#" className="social-link social-twitter fab fa-twitter"></a>
                                            <a href="#" className="social-link social-linkedin fab fa-linkedin-in"></a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div className="store">
                                <figure className="banner-radius">
                                    <img src="images/subpages/store-4.jpg" alt="store" width="280" height="280"/>
                                    <h4 className="overlay-visible">Karachi</h4>
                                    <div className="overlay overlay-transparent">
                                        <a className="mt-8" href="mail:#">Karachi@market-3.com</a>
                                        <a href="tel:#">Phone: 03452021456</a>
                                        <div className="social-links mt-1">
                                            <a href="#" className="social-link social-facebook fab fa-facebook-f"></a>
                                            <a href="#" className="social-link social-twitter fab fa-twitter"></a>
                                            <a href="#" className="social-link social-linkedin fab fa-linkedin-in"></a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Store Section --> */}

                {/* <!-- Google Maps - Go to the bottom of the page to change settings and map location. --> */}
                {/* <div className="grey-section google-map" id="googlemaps" style={{height: "386px"}}></div> */}
                {/* <!-- End Map Section --> */}
            </div>

        </main>
        {/* <!-- End Main --> */}
     
    </div>
    {/* <!-- Sticky Footer --> */}
    
    {/* <!-- Scroll Top --> */}
    <a id="scroll-top" href="#top" title="Top" role="button" className="scroll-top"><i className="d-icon-arrow-up"></i></a>

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
            {/* <!-- End Search Form --> */}
            <ul className="mobile-menu mmenu-anim">
                <li>
                    <a href="demo1.html">Home</a>
                </li>
                <li>
                    <a href="shop.html" className="active">Categories</a>
                    <ul>
                        <li>
                            <a href="#">
                                Variations 1
                            </a>
                            <ul>
                                <li><a href="shop-classic-filter.html">Classic Filter</a></li>
                                <li><a href="shop-left-toggle-sidebar.html">Left Toggle Filter</a></li>
                                <li><a href="shop-right-toggle-sidebar.html">Right Toggle Sidebar</a></li>
                                <li><a href="shop-horizontal-filter.html">Horizontal Filter </a>
                                </li>
                                <li><a href="shop-navigation-filter.html">Navigation Filter</a></li>

                                <li><a href="shop-off-canvas-filter.html">Off-Canvas Filter </a></li>
                                <li><a href="shop-top-banner.html">Top Banner</a></li>
                                <li><a href="shop-inner-top-banner.html">Inner Top Banner</a></li>
                                <li><a href="shop-with-bottom-block.html">With Bottom Block</a></li>
                                <li><a href="shop-category-in-page-header.html">Category In Page Header</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                Variations 2
                            </a>
                            <ul>
                                <li><a href="shop-grid-3cols.html">3 Columns Mode</a></li>
                                <li><a href="shop-grid-4cols.html">4 Columns Mode</a></li>
                                <li><a href="shop-grid-5cols.html">5 Columns Mode</a></li>
                                <li><a href="shop-grid-6cols.html">6 Columns Mode</a></li>
                                <li><a href="shop-grid-7cols.html">7 Columns Mode</a></li>
                                <li><a href="shop-grid-8cols.html">8 Columns Mode</a></li>
                                <li><a href="shop-list-mode.html">List Mode</a></li>
                                <li><a href="shop-pagination.html">Pagination</a></li>
                                <li><a href="shop-infinite-ajaxscroll.html">Infinite Ajaxscroll </a></li>
                                <li><a href="shop-loadmore-button.html">Loadmore Button</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                Variations 3
                            </a>
                            <ul>
                                <li><a href="shop-category-grid-shop.html">Category Grid Shop</a></li>
                                <li><a href="shop-category+products.html">Category + Products</a></li>
                                <li><a href="shop-default-1.html">Shop Default 1 </a>
                                </li>
                                <li><a href="shop-default-2.html">Shop Default 2</a></li>
                                <li><a href="shop-default-3.html">Shop Default 3</a></li>
                                <li><a href="shop-default-4.html">Shop Default 4</a></li>
                                <li><a href="shop-default-5.html">Shop Default 5</a></li>
                                <li><a href="shop-default-6.html">Shop Default 6</a></li>
                                <li><a href="shop-default-7.html">Shop Default 7</a></li>
                                <li><a href="shop-default-8.html">Shop Default 8</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="product.html">Products</a>
                    <ul>
                        <li>
                            <a href="#">Product Pages</a>
                            <ul>
                                <li><a href="product-simple.html">Simple Product</a></li>
                                <li><a href="product-featured.html">Featured &amp; On Sale</a></li>
                                <li><a href="product.html">Variable Product</a></li>
                                <li><a href="product-variable-swatch.html">Variation Swatch
                                        Product</a></li>
                                <li><a href="product-grouped.html">Grouped Product </a></li>
                                <li><a href="product-external.html">External Product</a></li>
                                <li><a href="product-in-stock.html">In Stock Product</a></li>
                                <li><a href="product-out-stock.html">Out of Stock Product</a></li>
                                <li><a href="product-upsell.html">Upsell Products</a></li>
                                <li><a href="product-cross-sell.html">Cross Sell Products</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Product Layouts</a>
                            <ul>
                                <li><a href="product-vertical.html">Vertical Thumb</a></li>
                                <li><a href="product-horizontal.html">Horizontal Thumb</a></li>
                                <li><a href="product-gallery.html">Gallery Type</a></li>
                                <li><a href="product-grid.html">Grid Images</a></li>
                                <li><a href="product-masonry.html">Masonry Images</a></li>
                                <li><a href="product-sticky.html">Sticky Info</a></li>
                                <li><a href="product-sticky-both.html">Left & Right Sticky</a></li>
                                <li><a href="product-left-sidebar.html">With Left Sidebar</a></li>
                                <li><a href="product-right-sidebar.html">With Right Sidebar</a></li>
                                <li><a href="product-full.html">Full Width Layout </a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Product Features</a>
                            <ul>
                                <li><a href="product-sale.html">Sale Countdown</a></li>
                                <li><a href="product-hurryup.html">Hurry Up Notification </a></li>
                                <li><a href="product-attribute-guide.html">Attribute Guide </a></li>
                                <li><a href="product-sticky-cart.html">Add Cart Sticky</a></li>
                                <li><a href="product-thumbnail-label.html">Labels on Thumbnail</a>
                                </li>
                                <li><a href="product-more-description.html">More Description
                                        Tabs</a></li>
                                <li><a href="product-accordion-data.html">Data In Accordion</a></li>
                                <li><a href="product-tabinside.html">Data Inside</a></li>
                                <li><a href="product-video.html">Video Thumbnail </a>
                                </li>
                                <li><a href="product-360-degree.html">360 Degree Thumbnail </a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Pages</a>
                    <ul>
                        <li><a href="about-us.html">About</a></li>
                        <li><a href="contact-us.html">Contact Us</a></li>
                        <li><a href="account.html">Login</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                        <li><a href="error-404.html">Error 404</a>
                            <ul>
                                <li><a href="error-404.html">Error 404-1</a></li>
                                <li><a href="error-404-1.html">Error 404-2</a></li>
                                <li><a href="error-404-2.html">Error 404-3</a></li>
                                <li><a href="error-404-3.html">Error 404-4</a></li>
                            </ul>
                        </li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                </li>
                <li>
                    <a href="blog-classic.html">Blog</a>
                    <ul>
                        <li><a href="blog-classic.html">Classic</a></li>
                        <li><a href="blog-listing.html">Listing</a></li>
                        <li>
                            <a href="#">Grid</a>
                            <ul>
                                <li><a href="blog-grid-2col.html">Grid 2 columns</a></li>
                                <li><a href="blog-grid-3col.html">Grid 3 columns</a></li>
                                <li><a href="blog-grid-4col.html">Grid 4 columns</a></li>
                                <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Masonry</a>
                            <ul>
                                <li><a href="blog-masonry-2col.html">Masonry 2 columns</a></li>
                                <li><a href="blog-masonry-3col.html">Masonry 3 columns</a></li>
                                <li><a href="blog-masonry-4col.html">Masonry 4 columns</a></li>
                                <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Mask</a>
                            <ul>
                                <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="post-single.html">Single Post</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="element.html">Elements</a>
                    <ul>
                        <li>
                            <a href="#">Elements 1</a>
                            <ul>
                                <li><a href="element-accordions.html">Accordions</a></li>
                                <li><a href="element-alerts.html">Alert &amp; Notification</a></li>

                                <li><a href="element-banner-effect.html">Banner Effect

                                    </a></li>
                                <li><a href="element-banner.html">Banner
                                    </a></li>
                                <li><a href="element-blog-posts.html">Blog Posts</a></li>
                                <li><a href="element-breadcrumb.html">Breadcrumb
                                    </a></li>
                                <li><a href="element-buttons.html">Buttons</a></li>
                                <li><a href="element-cta.html">Call to Action</a></li>
                                <li><a href="element-countdown.html">Countdown
                                    </a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Elements 2</a>
                            <ul>
                                <li><a href="element-counter.html">Counter </a></li>
                                <li><a href="element-creative-grid.html">Creative Grid

                                    </a></li>
                                <li><a href="element-animation.html">Entrance Effect

                                    </a></li>
                                <li><a href="element-floating.html">Floating

                                    </a></li>
                                <li><a href="element-hotspot.html">Hotspot

                                    </a></li>
                                <li><a href="element-icon-boxes.html">Icon Boxes</a></li>
                                <li><a href="element-icons.html">Icons</a></li>
                                <li><a href="element-image-box.html">Image box

                                    </a></li>
                                <li><a href="element-instagrams.html">Instagrams</a></li>

                            </ul>
                        </li>
                        <li>
                            <a href="#">Elements 3</a>
                            <ul>

                                <li><a href="element-categories.html">Product Category</a></li>
                                <li><a href="element-products.html">Products</a></li>
                                <li><a href="element-product-banner.html">Products + Banner

                                    </a></li>
                                <li><a href="element-product-grid.html">Products + Grid

                                    </a></li>
                                <li><a href="element-product-single.html">Product Single

                                    </a>
                                </li>
                                <li><a href="element-product-tab.html">Products + Tab

                                    </a></li>
                                <li><a href="element-single-product.html">Single Product

                                    </a></li>
                                <li><a href="element-slider.html">Slider

                                    </a></li>
                                <li><a href="element-social-link.html">Social Icons </a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Elements 4</a>
                            <ul>
                                <li><a href="element-subcategory.html">Subcategory

                                    </a></li>
                                <li><a href="element-svg-floating.html">Svg Floating

                                    </a></li>
                                <li><a href="element-tabs.html">Tabs</a></li>
                                <li><a href="element-testimonials.html">Testimonials
                                    </a></li>
                                <li><a href="element-titles.html">Title</a></li>
                                <li><a href="element-typography.html">Typography</a></li>
                                <li><a href="element-vendor.html">Vendor

                                    </a></li>
                                <li><a href="element-video.html">Video

                                    </a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="https://d-themes.com/buynow/riodehtml">Buy Riode!</a></li>
            </ul>
            {/* <!-- End MobileMenu --> */}
        </div>
    </div>
    {/* <!-- sticky icons--> */}
	<div className="sticky-icons-wrapper">
		
		<div className="demos-list">
			<div className="demos-overlay"></div>
			<a className="demos-close" href="#"><i className="close-icon"></i></a>
			<div className="demos-content scrollable scrollable-light">
				<h3 className="demos-title">Demos</h3>
				<div className="demos">
				</div>
			</div>
		</div>
	</div>
	{MobileMenu()}

</div>
}

export default ContactUs;