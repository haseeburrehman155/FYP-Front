function ProductQuickView(){
return <div  className="product product-single row product-popup">
<div  className="col-md-6">
    <div  className="product-gallery">
        <div  className="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1">
            <figure  className="product-image">
                <img src="images/product/product-1-1-580x652.jpg"
                    data-zoom-image="images/product/product-1-1-800x900.jpg" alt="Blue Pinafore Denim Dress"
                    width="580" height="580"/>
            </figure>
            <figure  className="product-image">
                <img src="images/product/product-1-2-580x652.jpg"
                    data-zoom-image="images/product/product-1-2-800x900.jpg" alt="Blue Pinafore Denim Dress"
                    width="580" height="580"/>
            </figure>
            <figure  className="product-image">
                <img src="images/product/product-1-3-580x652.jpg"
                    data-zoom-image="images/product/product-1-3-800x900.jpg" alt="Blue Pinafore Denim Dress"
                    width="580" height="580"/>
            </figure>
            <figure  className="product-image">
                <img src="images/product/product-1-4-580x652.jpg"
                    data-zoom-image="images/product/product-1-4-800x900.jpg" alt="Blue Pinafore Denim Dress"
                    width="580" height="580"/>
            </figure>
        </div>
    </div>
</div>
<div  className="col-md-6">
    <div  className="product-details scrollable pr-0 pr-md-3">
        <h1  className="product-name mt-0">Converse Training Shoes</h1>
        <div  className="product-meta">
            SKU: <span  className="product-sku">12345670</span>
            BRAND: <span  className="product-brand">The Northland</span>
        </div>
        <div  className="product-price">$113.00</div>
        <div  className="ratings-container">
            <div  className="ratings-full">
                <span  className="ratings" style={{width:'80%'}}></span>
                <span  className="tooltiptext tooltip-top"></span>
            </div>
            <a href="#product-tab-reviews"  className="link-to-tab rating-reviews">( 11 reviews )</a>
        </div>
        <p  className="product-short-desc">Sed egestas, ante et vulputate volutpat, eros pede semper
            est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
            adipiscing.</p>

        <div  className="product-form product-color">
            <label>Color:</label>
            <div  className="product-variations">
                <a  className="color" data-src="images/demos/demo7/products/big1.jpg" href="#"
                    style={{backgroundColor: '#1e73be'}}></a>
                <a  className="color" data-src="images/demos/demo7/products/2.jpg" href="#"
                    style={{backgroundColor: '#56962e'}}></a>
                <a  className="color" data-src="images/demos/demo7/products/3.jpg" href="#"
                    style={{backgroundColor: '#965000'}}></a>
            </div>
        </div>
        <div  className="product-form product-size">
            <label>Size:</label>
            <div  className="product-form-group">
                <div  className="product-variations">
                    <a  className="size" href="#">M</a>
                    <a  className="size" href="#">L</a>
                </div>
                <a href="#"  className="product-variation-clean">Clean All</a>
            </div>
        </div>
        <div  className="product-variation-price">
            <span>$239.00</span>
        </div>

        <hr  className="product-divider"/>

        <div  className="product-form product-qty">
            <div  className="product-form-group">
                <div  className="input-group mr-2">
                    <button  className="quantity-minus d-icon-minus"></button>
                    <input  className="quantity form-control" type="number" min="1" max="1000000"/>
                    <button  className="quantity-plus d-icon-plus"></button>
                </div>
                <button  className="btn-product btn-cart text-normal ls-normal font-weight-semi-bold"><i
                         className="d-icon-bag"></i>Add to
                    Cart</button>
            </div>
        </div>

        <hr  className="product-divider mb-3"/>
        <div  className="product-footer">
            <div  className="social-links mr-4">
                <a href="#"  className="social-link social-facebook fab fa-facebook-f"></a>
                <a href="#"  className="social-link social-twitter fab fa-twitter"></a>
                <a href="#"  className="social-link social-pinterest fab fa-pinterest-p"></a>
            </div>
            <a href="#"  className="btn-product btn-wishlist mr-4"><i  className="d-icon-heart"></i>Add to wishlist</a>

            <a href="#"  className="btn-product btn-compare"><i  className="d-icon-compare"></i>Add
                to compare</a>

        </div>
    </div>
</div>
</div>

}

export default ProductQuickView;