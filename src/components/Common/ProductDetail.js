import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ProductAction } from "../../actions/ProductAction";
import Headers from "./Headers";
import {ProductfeatureAction} from "../../actions/ProductfeaturesAction";
import { HomeAction } from "../../actions/HomeAction";

import {CategoryAction} from "../../actions/CategoryAction";

function ProductDetail(){
    var dispatch = useDispatch();

    const {id} = useParams();
    // var cateid= 0;
         var productdate= useSelector(state=> state.product);
        const {productrecord,base64Arr,catrecord,relatedproduct} =productdate;

        // var categorydata = useSelector(state=>state.category);
        // const {categoryrecord}=categorydata;

      
     
      
            React.useEffect(()=>{
       
                dispatch(ProductAction.GetProductById(id))
                },[]);

               

                // function catedata(){
                //     cateid=productrecord?productrecord.category_id:'';
                // }
                  
               



            // React.useEffect(()=>{
            //     dispatch(CategoryAction.GetCategoryById(productrecord.categ))
            // },[productrecord]);   
          

           
    return <div>
    <div className="page-wrapper">
    {Headers()}
        
    <main className="main mt-6 single-product">
        <div className="page-content mb-10 pb-6">
            <div className="container">
                
                <div className="product product-single row mb-7">
                    <div className="col-md-6 sticky-sidebar-wrapper">
                        <div className="product-gallery pg-vertical sticky-sidebar"
                            data-sticky-options="{'minWidth': 767}">
                            <div
                                className="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1 gutter-no">
                            {base64Arr.map((el,index)=>
                                    <figure key={index} className="product-image">
                                    <img src={el.base64Arr}
                                        data-zoom-image="images/product/product-1-1-800x900.jpg"
                                        alt="Women's Brown Leather Backpacks" width="800" style={{height:"450px"}}/>
                                </figure>
                                )}
                                {/* <figure className="product-image">
                                    <img src="images/product/product-1-2-580x652.jpg"
                                        data-zoom-image="images/product/product-1-2-800x900.jpg"
                                        alt="Women's Brown Leather Backpacks" width="800" height="900"/>
                                </figure>
                                <figure className="product-image">
                                    <img src="images/product/product-1-3-580x652.jpg"
                                        data-zoom-image="images/product/product-1-3-800x900.jpg"
                                        alt="Women's Brown Leather Backpacks" width="800" height="900"/>
                                </figure>
                                <figure className="product-image">
                                    <img src="images/product/product-1-4-580x652.jpg"
                                        data-zoom-image="images/product/product-1-4-800x900.jpg"
                                        alt="Women's Brown Leather Backpacks" width="800" height="900"/>
                                </figure> */}
                            </div>
                            <div className="product-thumbs-wrap">
                                <div className="product-thumbs">
                                    
                                    {base64Arr.map((el,index)=>
                                   <div key={index} className="product-thumb active">
                                   <img src={el.base64Arr} alt="product thumbnail"
                                       width="109" height="122"/>
                               </div>
                                )}
                               
                                </div>
                                <button className="thumb-up disabled"><i className="fas fa-chevron-left"></i></button>
                                <button className="thumb-down disabled"><i className="fas fa-chevron-right"></i></button>
                            </div>
                            {productrecord && productrecord.verified==1?
                            <div className="product-label-group">
                                
                                <label className="product-label label-new">verified</label>
                            </div>: <div/>
                            }

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-details">
                            <div className="product-navigation">
                                <ul className="breadcrumb breadcrumb-lg">
                                    <li><a href="/"><i className="d-icon-home"></i></a></li>
                                    <li><a href="" className="active">Products</a></li>
                                    <li>Detail</li>
                                </ul>

                                {/* <ul className="product-nav">
                                    <li className="product-nav-prev">
                                        <a href="#">
                                            <i className="d-icon-arrow-left"></i> Prev
                                            <span className="product-nav-popup">
                                                <img src="/images/product/product-thumb-prev.jpg"
                                                    alt="product thumbnail" width="110" height="123"/>
                                                <span className="product-name">Sed egtas Dnte Comfort</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="product-nav-next">
                                        <a href="#">
                                            Next <i className="d-icon-arrow-right"></i>
                                            <span className="product-nav-popup">
                                                <img src="/images/product/product-thumb-next.jpg"
                                                    alt="product thumbnail" width="110" height="123"/>
                                                <span className="product-name">Sed egtas Dnte Comfort</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                            <div className="product-price"><span style={{fontFamily:'bold'}}> RS : </span>{productrecord ? productrecord.price : 'No value'}</div>
                            <h1 className="product-name" >{productrecord ? productrecord.product_name : 'No value'}</h1>
                            <div className="product-meta" style={{fontWeight:"bold",color:'black'}}>
                               Category : <span className="product-sku">{catrecord ? catrecord.category_name : 'No value'}</span>
                                Subcategory : <span className="product-brand">{catrecord ? catrecord.subcategory_name : 'No value'}</span>
                            </div>
                           
                            <div className="ratings-container">
                                {/* <div className="ratings-full">
                                    <span className="ratings" style={{width:"80%"}}></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                </div> */}
                                {/* <a href="#product-tab-reviews" className="link-to-tab rating-reviews">( 11 reviews )</a> */}
                            </div>
                            <p className="product-short-desc">{productrecord ? productrecord.description : 'No value'}</p>
                            <div className="product-form product-variations product-color">
                                <label>Color:</label>
                                <div >
                                 
                                    {productrecord ?productrecord.color:''}
                                </div>
                            </div>
                            <div className="product-form product-variations product-size">
                                <label>Size:</label>
                                <div className="product-form-group">
                                    <div >
                                        {productrecord ?productrecord.size:''}
                                    </div>
                                    {/* <a className="product-variation-clean" style={{display:'none'}}>Clean All</a> */}
                                </div>
                            </div>


                            <div className="product-footer">
                                <div className="social-links mr-4">
                                    <a href="#" className="social-link social-facebook fab fa-facebook-f"></a>
                                    <a href="#" className="social-link social-twitter fab fa-twitter"></a>
                                    <a href="#" className="social-link social-pinterest fab fa-pinterest-p"></a>
                                </div>
                                <span className="divider d-lg-show"></span>
                                <a href="" className="btn-product btn-wishlist mr-6"><i className="d-icon-phone"></i>{productrecord ?productrecord.phone:''}</a>
                                <a href="" className="btn-product btn-compare"><i className="d-icon-home"></i>{productrecord ?productrecord.city:''}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab tab-nav-simple product-tabs">
                    <ul className="nav nav-tabs justify-content-center" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" href="#product-tab-description">Description</a>
                        </li>
                        
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active in" id="product-tab-description">
                            <div className="row mt-6">
                                <div className="col-md-6">
                                    <h5 className="description-title mb-4 font-weight-semi-bold ls-m">Features</h5>
                                    <p className="mb-2">
                                    {productrecord ?productrecord.description:''}
                                    </p>
                                    <ul className="mb-8">
                                        <li>Praesent id enim sit amet.Tdio vulputate</li>
                                        <li>Eleifend in in tortor. ellus massa.Dristique sitii</li>
                                        <li>Massa ristique sit amet condim vel</li>
                                        <li>Dilisis Facilisis quis sapien. Praesent id enim sit amet</li>
                                    </ul>
                                    <h5 className="description-title mb-3 font-weight-semi-bold ls-m">Specifications
                                    </h5>
                                    {/* {ProductfeatureArr.map(el=>{

                                    })} */}
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th className="font-weight-semi-bold text-dark pl-0">Material</th>
                                                
                                  <td className="pl-4" >{productrecord ?productrecord.color :""}
                                   </td>
                                
                                                   
                               
                                            </tr>
                                            <tr>
                                                <th className="font-weight-semi-bold text-dark pl-0">Claimed Size</th>
                                                <td className="pl-4">{productrecord ? productrecord.size :''}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-weight-semi-bold text-dark pl-0">Recommended Use
                                                </th>
                                                <td className="pl-4">{productrecord ? productrecord.description:''}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-weight-semi-bold text-dark border-no pl-0">
                                                    Manufacturer</th>
                                                <td className="border-no pl-4">{productrecord ? productrecord.manufacture:''}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                              
                            </div>
                        </div>

                

                        <div className="tab-pane" id="product-tab-additional">
                            <ul className="list-none">
                                <li><label>Brands:</label>
                                    <p>SkillStar, SLS</p>
                                </li>
                                <li><label>Color:</label>
                                    <p>Blue, Brown</p>
                                </li>
                                <li><label>Size:</label>
                                    <p>Large, Medium, Small</p>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane " id="product-tab-size-guide">
                            <figure className="size-image mt-4 mb-4">
                                <img src="/images/product/size_guide.png" alt="Size Guide Image" width="217"
                                    height="398"/>
                            </figure>
                            <figure className="size-table mt-4 mb-4">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>SIZE</th>
                                            <th>CHEST(IN.)</th>
                                            <th>WEIST(IN.)</th>
                                            <th>HIPS(IN.)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>XS</th>
                                            <td>34-36</td>
                                            <td>27-29</td>
                                            <td>34.5-36.5</td>
                                        </tr>
                                        <tr>
                                            <th>S</th>
                                            <td>36-38</td>
                                            <td>29-31</td>
                                            <td>36.5-38.5</td>
                                        </tr>
                                        <tr>
                                            <th>M</th>
                                            <td>38-40</td>
                                            <td>31-33</td>
                                            <td>38.5-40.5</td>
                                        </tr>
                                        <tr>
                                            <th>L</th>
                                            <td>40-42</td>
                                            <td>33-36</td>
                                            <td>40.5-43.5</td>
                                        </tr>
                                        <tr>
                                            <th>XL</th>
                                            <td>42-45</td>
                                            <td>36-40</td>
                                            <td>43.5-47.5</td>
                                        </tr>
                                        <tr>
                                            <th>XXL</th>
                                            <td>45-48</td>
                                            <td>40-44</td>
                                            <td>47.5-51.5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </figure>
                        </div>
                        <div className="tab-pane" id="product-tab-reviews">
                            <div className="row">
                                <div className="col-lg-4 mb-6">
                                    <div className="avg-rating-container">
                                        <mark>5.0</mark>
                                        <div className="avg-rating">
                                            <span className="avg-rating-title">Average Rating</span>
                                            <div className="ratings-container mb-0">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{width:"100%"}}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                                <span className="rating-reviews">(2 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ratings-list mb-2">
                                        <div className="ratings-item">
                                            <div className="ratings-container mb-0">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{width:"100%"}}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                            <div className="rating-percent">
                                                <span style={{width:"100%"}}></span>
                                            </div>
                                            <div className="progress-value">100%</div>
                                        </div>
                                        <div className="ratings-item">
                                            <div className="ratings-container mb-0">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{width:"80%"}}></span>
                                                    <span className="tooltiptext tooltip-top">4.00</span>
                                                </div>
                                            </div>
                                            <div className="rating-percent">
                                                <span style={{width:"0%"}}></span>
                                            </div>
                                            <div className="progress-value">0%</div>
                                        </div>
                                        <div className="ratings-item">
                                            <div className="ratings-container mb-0">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{width:"60%"}}></span>
                                                    <span className="tooltiptext tooltip-top">4.00</span>
                                                </div>
                                            </div>
                                            <div className="rating-percent">
                                                <span style={{width:"0%"}}></span>
                                            </div>
                                            <div className="progress-value">0%</div>
                                        </div>
                                        <div className="ratings-item">
                                            <div className="ratings-container mb-0">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{width:"40%"}}></span>
                                                    <span className="tooltiptext tooltip-top">4.00</span>
                                                </div>
                                            </div>
                                            <div className="rating-percent">
                                                <span style={{width:"0%"}}></span>
                                            </div>
                                            <div className="progress-value">0%</div>
                                        </div>
                                        <div className="ratings-item">
                                            <div className="ratings-container mb-0">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{width:"20%"}}></span>
                                                    <span className="tooltiptext tooltip-top">4.00</span>
                                                </div>
                                            </div>
                                            <div className="rating-percent">
                                                <span style={{width:"0%"}}></span>
                                            </div>
                                            <div className="progress-value">0%</div>
                                        </div>
                                    </div>
                                    <a className="btn btn-dark btn-rounded submit-review-toggle" href="#">Submit
                                        Review</a>
                                </div>
                                <div className="col-lg-8 comments pt-2 pb-10 border-no">
                                    <nav className="toolbox">
                                        <div className="toolbox-left">
                                            <div className="toolbox-item">
                                                <a href="#" className="btn btn-outline btn-rounded">All Reviews</a>
                                            </div>
                                            <div className="toolbox-item">
                                                <a href="#" className="btn btn-outline btn-rounded">With Images</a>
                                            </div>
                                            <div className="toolbox-item">
                                                <a href="#" className="btn btn-outline btn-rounded">With Videos</a>
                                            </div>
                                        </div>
                                        <div className="toolbox-right">
                                            <div className="toolbox-item toolbox-sort select-box text-dark">
                                                <label>Sort By :</label>
                                                <select name="orderby" className="form-control">
                                                    <option value="">Default Order</option>
                                                    <option value="newest" select="selected">Newest Reviews
                                                    </option>
                                                    <option value="oldest">Oldest Reviews</option>
                                                    <option value="high_rate">Highest Rating</option>
                                                    <option value="low_rate">Lowest Rating</option>
                                                    <option value="most_likely">Most Likely</option>
                                                    <option value="most_unlikely">Most Unlikely</option>
                                                </select>
                                            </div>
                                        </div>
                                    </nav>
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment">
                                                <figure className="comment-media">
                                                    <a href="#">
                                                        <img src="/images/blog/comments/1.jpg" alt="avatar"/>
                                                    </a>
                                                </figure>
                                                <div className="comment-body">
                                                    <div className="comment-rating ratings-container">
                                                        <div className="ratings-full">
                                                            <span className="ratings" style={{width:"100%"}}></span>
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>
                                                    </div>
                                                    <div className="comment-user">
                                                        <span className="comment-date">by <span
                                                                className="font-weight-semi-bold text-uppercase text-dark">John
                                                                Doe</span> on
                                                            <span className="font-weight-semi-bold text-dark">Nov 22,
                                                                2018</span></span>
                                                    </div>

                                                    <div className="comment-content mb-5">
                                                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor
                                                            libero sodales leo,
                                                            eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                                                            justo.
                                                            Suspendisse potenti.
                                                            Sed egestas, ante et vulputate volutpat, eros pede
                                                            semper
                                                            est, vitae luctus metus libero eu augue.</p>
                                                    </div>
                                                    <div className="file-input-wrappers">

                                                        <img className="btn-play btn-img pwsp"
                                                            src="/images/products/product1.jpg" width="280"
                                                            height="315" alt="product" />


                                                        <img className="btn-play btn-img pwsp"
                                                            src="/images/products/product3.jpg" width="280"
                                                            height="315" alt="product" />

                                                        <a className="btn-play btn-iframe"
                                                            style={{backgroundImage: "url(images/product/product.jpg)", backgroundSize: "cover"}}
                                                            href="video/memory-of-a-woman.mp4">
                                                            <i className="d-icon-play-solid"></i>
                                                        </a>
                                                    </div>
                                                    <div className="feeling mt-5">
                                                        <button
                                                            className="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                                            <i className="fa fa-thumbs-up"></i>
                                                            Like (<span className="count">0</span>)
                                                        </button>
                                                        <button
                                                            className="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike">
                                                            <i className="fa fa-thumbs-down"></i>
                                                            Unlike (<span className="count">0</span>)
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment">
                                                <figure className="comment-media">
                                                    <a href="#">
                                                        <img src="/images/blog/comments/2.jpg" alt="avatar"/>
                                                    </a>
                                                </figure>

                                                <div className="comment-body">
                                                    <div className="comment-rating ratings-container">
                                                        <div className="ratings-full">
                                                            <span className="ratings" style={{width:"100%"}}></span>
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>
                                                    </div>
                                                    <div className="comment-user">
                                                        <span className="comment-date">by <span
                                                                className="font-weight-semi-bold text-uppercase text-dark">John
                                                                Doe</span> on
                                                            <span className="font-weight-semi-bold text-dark">Nov 22,
                                                                2018</span></span>
                                                    </div>

                                                    <div className="comment-content">
                                                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor
                                                            libero sodales leo, eget blandit nunc tortor eu nibh.
                                                            Nullam
                                                            mollis.
                                                            Ut justo. Suspendisse potenti. Sed egestas, ante et
                                                            vulputate volutpat,
                                                            eros pede semper est, vitae luctus metus libero eu
                                                            augue.
                                                            Morbi purus libero,
                                                            faucibus adipiscing, commodo quis, avida id, est. Sed
                                                            lectus. Praesent elementum
                                                            hendrerit tortor. Sed semper lorem at felis. Vestibulum
                                                            volutpat.</p>
                                                    </div>
                                                    <div className="feeling mt-5">
                                                        <button
                                                            className="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                                            <i className="fa fa-thumbs-up"></i>
                                                            Like (<span className="count">0</span>)
                                                        </button>
                                                        <button
                                                            className="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike">
                                                            <i className="fa fa-thumbs-down"></i>
                                                            Unlike (<span className="count">0</span>)
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </li>
                                    </ul>
                                    <nav className="toolbox toolbox-pagination justify-content-end">
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <a className="page-link page-link-prev" href="#" aria-label="Previous"
                                                    tabIndex="-1" aria-disabled="true">
                                                    <i className="d-icon-arrow-left"></i>Prev
                                                </a>
                                            </li>
                                            <li className="page-item active" aria-current="page"><a className="page-link"
                                                    href="#">1</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item page-item-dots"><a className="page-link" href="#">6</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link page-link-next" href="#" aria-label="Next">
                                                    Next<i className="d-icon-arrow-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            
                            {/* <!-- End Comments --> */}
                            <div className="review-form-section">
                                <div className="review-overlay"></div>
                                <div className="review-form-wrapper">
                                    <div className="title-wrapper text-left">
                                        <h3 className="title title-simple text-left text-normal">Add a Review</h3>
                                        <p>Your email address will not be published. Required fields are marked *
                                        </p>
                                    </div>
                                    <div className="rating-form">
                                        <label htmlFor="rating" className="text-dark">Your rating * </label>
                                        <span className="rating-stars selected">
                                            <a className="star-1" href="#">1</a>
                                            <a className="star-2" href="#">2</a>
                                            <a className="star-3" href="#">3</a>
                                            <a className="star-4 active" href="#">4</a>
                                            <a className="star-5" href="#">5</a>
                                        </span>

                                        <select name="rating" id="rating" required="" style={{display: "none"}}>
                                            <option value="">Rate…</option>
                                            <option value="5">Perfect</option>
                                            <option value="4">Good</option>
                                            <option value="3">Average</option>
                                            <option value="2">Not that bad</option>
                                            <option value="1">Very poor</option>
                                        </select>
                                    </div>
                                    <form action="#">
                                        <textarea id="reply-message" cols="30" rows="6" className="form-control mb-4"
                                            placeholder="Comment *" required></textarea>

                                        <div className="review-medias">
                                            <div className="file-input form-control image-input"
                                                style={{backgroundImage: "url(images/product/placeholder.png)"}}>
                                                <div className="file-input-wrapper">
                                                </div>
                                                <label className="btn-action btn-upload" title="Upload Media">
                                                    <input type="file" accept=".png, .jpg, .jpeg"
                                                        name="riode_comment_medias_image_1"/>
                                                </label>
                                                <label className="btn-action btn-remove" title="Remove Media">
                                                </label>
                                            </div>
                                            <div className="file-input form-control image-input"
                                                style={{backgroundImage: "url(images/product/placeholder.png)"}}>
                                                <div className="file-input-wrapper">
                                                </div>
                                                <label className=" btn-action btn-upload" title="Upload Media">
                                                    <input type="file" accept=".png, .jpg, .jpeg"
                                                        name="riode_comment_medias_image_2"/>
                                                </label>
                                                <label className="btn-action btn-remove" title="Remove Media">
                                                </label>
                                            </div>
                                            <div className="file-input form-control video-input"
                                                style={{backgroundImage: "url(images/product/placeholder.png)"}}>
                                                <video className="file-input-wrapper" controls=""></video>
                                                <label className="btn-action btn-upload" title="Upload Media">
                                                    <input type="file" accept=".avi, .mp4"
                                                        name="riode_comment_medias_video_1"/>
                                                </label>
                                                <label className="btn-action btn-remove" title="Remove Media">
                                                </label>
                                            </div>
                                        </div>
                                        <p>Upload images and videos. Maximum count: 3, size: 2MB</p>
                                        <button type="submit" className="btn btn-primary btn-rounded">Submit<i
                                                className="d-icon-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- End Reply --> */}
                        </div>
                    </div>
                </div>

                <section className="pt-3 mt-10">
                    <h2 className="title justify-content-center">Related Products</h2>

                    <div className="owl-carousel owl-theme owl-nav-full row cols-2 cols-md-3 cols-lg-4"
                        data-owl-options="{
                        'items': 5,
                        'nav': false,
                        'loop': false,
                        'dots': true,
                        'margin': 20,
                        'responsive': {
                            '0': {
                                'items': 2
                            },
                            '768': {
                                'items': 3
                            },
                            '992': {
                                'items': 4,
                                'dots': false,
                                'nav': true
                            }
                        }
                    }">
                    {
                     relatedproduct ? relatedproduct.map(el=>
                       <div key={el.product_id} className="product-wrap mt-6" id="product_detail">

                        <div className="product">
                            <figure className="product-media">
                                <a href={"/ProductDetail/"+ el.product_id} >
                                    <img src={el.base64Arr} alt="product" style={{width:'280px', height:'200px'}}  />
                                </a>
                                <div className="product-label-group">
												<label className="product-label label-new">
                                                    {el.verified==1?"verified":''}
                                                    </label>
											</div>
                                            
                                {/* <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                                        data-target="#addCartModal" title="Add to cart"><i
                                            className="d-icon-bag"></i></a>
                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i
                                            className="d-icon-heart"></i></a>
                                </div> */}

                                <div className="product-action">
												<a href={"/ProductDetail/"+ el.product_id} className="btn-product btn-quickview" title="Quick View">Quick
													View</a>
											</div>
                            </figure>
                            <div className="product-details">
                                <div className="product-cat">
                                    <a href={"/ProductDetail/"+el.product_id} value={el.category_id}>{catrecord ? catrecord.category_name : 'No value'}</a>
                                </div>
                                <h3 className="product-name">
                                <a href={"/ProductDetail/"+ el.product_id}>{el.product_name}</a>
                                </h3>
                                <div className="product-price"><a href={"/ProductDetail/"+ el.product_id}><span style={{fontFamily:'bold'}}> 
                                RS : </span>{el.price}</a></div>

                                {/* <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{width:"100%"}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                    <a href="#" className="rating-reviews">( <span className="review-count">12</span>
                                        reviews
                                        )</a>
                                </div> */}

                                <div className="product-description">
                                <a href={"/ProductDetail/"+ el.product_id}>
                                    <span className="description">{el.description}</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                        </div>)
                        :
                        <div/>
                        

} 
                    </div>
                </section>
            </div>
        </div>
        
    </main>
    {/* <!-- End Main --> */}
    
    {/* <!-- End Footer --> */}
</div>
{/* <!-- Sticky Footer --> */}

{/* is pa kam karna pary ga  */}

{/* <div className="sticky-footer sticky-content fix-bottom">
    <Link to="/" className="sticky-link">
        <i className="d-icon-home"></i>
        <span>Home</span>
    </Link>
    <Link to="/CategoryList" className="sticky-link">
        <i className="d-icon-volume"></i>
        <span>Categories</span>
    </Link>
    <a href="wishlist.html" className="sticky-link">
        <i className="d-icon-heart"></i>
        <span>Wishlist</span>
    </a>
    <a href="account.html" className="sticky-link">
        <i className="d-icon-user"></i>
        <span>Account</span>
    </a>
    <div className="header-search hs-toggle dir-up">
        <a href="#" className="search-toggle sticky-link">
            <i className="d-icon-search"></i>
            <span>Search</span>
        </a>
        <form action="#" className="input-wrapper">
            <input type="text" className="form-control" name="search" autoComplete="off"
                placeholder="Search your keyword..." required />
            <button className="btn btn-search" type="submit">
                <i className="d-icon-search"></i>
            </button>
        </form>
    </div>
</div> */}

{/* <!-- Scroll Top --> */}
<a id="scroll-top" href="#top" title="Top" role="button" className="scroll-top"><i className="d-icon-arrow-up"></i></a>

{/* <!-- Root element of PhotoSwipe. Must have class pswp. --> */}
<div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">

    {/* <!-- Background of PhotoSwipe. It's a separate element as animating opacity is faster than rgba(). --> */}
    <div className="pswp__bg"></div>

    {/* <!-- Slides wrapper with overflow:hidden. --> */}
    <div className="pswp__scroll-wrap">

        {/* <!-- Container that holds slides.
        PhotoSwipe keeps only 3 of them in the DOM to save memory.
        Don't modify these 3 pswp__item elements, data is added later on. --> */}
        <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
        </div>

        {/* <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. --> */}
        <div className="pswp__ui pswp__ui--hidden">

            <div className="pswp__top-bar">

                {/* <!--  Controls are self-explanatory. Order can be changed. --> */}

                <div className="pswp__counter"></div>

                <button className="pswp__button pswp__button--close" aria-label="Close (Esc)"></button>
                <button className="pswp__button pswp__button--zoom" aria-label="Zoom in/out"></button>

                <div className="pswp__preloader">
                    <div className="loading-spin"></div>
                </div>
            </div>

            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip"></div>
            </div>

            <button className="pswp__button--arrow--left" aria-label="Previous (arrow left)"></button>
            <button className="pswp__button--arrow--right" aria-label="Next (arrow right)"></button>

            <div className="pswp__caption">
                <div className="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>

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
                <a href="/">Home</a>
            </li>
         
            <li>
                <a href="/ProductList" className="active">Products</a>
               
            </li>
           <li>
            <a href="/aboutus">About Us</a>
           </li>
           <li href="/contactus"> Contact Us</li>
           
           
            <li><a href="https://d-themes.com/buynow/riodehtml">Buy Riode!</a></li>
        </ul>
        {/* <!-- End MobileMenu --> */}
    </div>
</div>
{/* <!-- sticky icons--> */}
<div className="sticky-icons-wrapper">
    {/* <div className="sticky-icon-links">
        <ul>
            <li><a href="#" className="demo-toggle"><i className="fas fa-home"></i><span>Demos</span></a></li>
            <li><a href="documentation.html"><i className="fas fa-info-circle"></i><span>Documentation</span></a>
            </li>
            <li><a href="https://themeforest.net/downloads/"><i className="fas fa-star"></i><span>Reviews</span></a>
            </li>
            <li><a href="https://d-themes.com/buynow/riodehtml"><i className="fas fa-shopping-cart"></i><span>Buy
                        now!</span></a></li>
        </ul>
    </div> */}
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
{/* <!-- Plugins JS File --> */}
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/sticky/sticky.min.js"></script>
<script src="vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
<script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="vendor/owl-carousel/owl.carousel.min.js"></script>
<script src="vendor/elevatezoom/jquery.elevatezoom.min.js"></script>
<script src="vendor/photoswipe/photoswipe.min.js"></script>
<script src="vendor/photoswipe/photoswipe-ui-default.min.js"></script>

{/* <!-- Main JS File --> */}
<script src="js/main.min.js"></script>
</div>

}

export default ProductDetail;