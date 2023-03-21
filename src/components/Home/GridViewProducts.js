import ProductDetail from "../Common/ProductDetail";
import { Link } from 'react-router-dom';


function GridViewProducts(productArr){
   return <div className="row  cols-sm-4 product-wrapper">
								
							{productArr ?
							productArr.map(el=>
								<div key={el.product_id} className="product-wrap mt-6" id="product_detail">
									<div className="product">
										<figure className="product-media" style={{height:300}}>
											<a href={"/ProductDetail/"+ el.product_id}>
												<img src={el.product_image} alt="product" width="250" height="300"/>
											</a>
											<div className="product-label-group">
												{el.verified?<label className="product-label label-new">Verified</label>:<div/>}
											</div>
											
											<div className="product-action">
												<Link to={"/ProductDetail/"+ el.product_id} className="btn-product btn-quickview" title="Quick View">Quick
													View</Link>
											</div>
										</figure>
										<div className="product-details">
											<div className="product-cat">
												<a href={"/ProductDetail/"+ el.product_id}>{el.category_name}  {el.subcategory_name ? '('+el.subcategory_name+')' : ''}</a>
											</div>
											<h3 className="product-name">
												<a href={"/ProductDetail/"+ el.product_id}>{el.product_name}</a>
											</h3>
											<div className="product-price">
												<a href={"/ProductDetail/"+ el.product_id}><ins className="new-price">{el.price}.00</ins><del className="old-price"></del></a>
											</div>
											
										</div>
									</div>
								</div>
								):
							<div/>
							
						     }	
								
</div>
}

export default GridViewProducts;