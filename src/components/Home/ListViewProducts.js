import { Link } from "react-router-dom";

function ListViewProducts(productArr){
return(
    <div className="product-lists product-wrapper">
				{productArr ?
									productArr.map(el=>
										<div key={el.product_id} 
										 className="product-wrap">
											<div className="product product-list">
									<figure className="product-media">
									<a href={"/ProductDetail/"+ el.product_id}>
											<img src={el.product_image} alt="product" style={{width:"260px",height:"293px"}}/>
										</a>
										<div className="product-label-group">
												{el.verified?<label className="product-label label-new">Verified</label>:<div/>}
											</div>
									</figure>
									<div className="product-details">
									<div className="product-cat">
												<a href={"/ProductDetail/"+ el.product_id}>{el.category_name}  {el.subcategory_name ? '('+el.subcategory_name+')' : ''}</a>
											</div>
										<h3 className="product-name">
											<a href={"/ProductDetail/"+ el.product_id}>{el.product_name}</a>
										</h3>
										{/* <div className="product-price">
										<a href={"/ProductDetail/"+ el.product_id}><ins className="new-price">{el.price}.00</ins><del className="old-price"></del></a>
											</div> */}
									
										<div className="product-short-desc">
                                    	<a href={"/ProductDetail/"+ el.product_id}>	<span className="description">{el.description}
										</span></a>
                                		</div>

										<div className="product-action">
										<div className="product-price">
                                    			<a href={"/ProductDetail/"+ el.product_id}> RS : <span className="price">{el.price}</span></a>
                                		</div>
											<a href={"/ProductDetail/"+ el.product_id} className="btn-product-icon" title="Add to wishlist"><i
													className="d-icon-phone" style={{marginLeft:"20px"}}>{el.phone}</i></a>
											<a  className="btn-product-icon " href={"/ProductDetail/"+ el.product_id} title="Quick View"><i
													className="d-icon-home" style={{marginLeft:"20px"}}></i>{el.city}</a>
										</div>
									</div>
								</div>
								   </div>
										):
									<div/>
									
				}
								
							</div>
)

}

export default ListViewProducts;