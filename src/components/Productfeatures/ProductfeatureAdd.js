import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { ProductfeatureAction } from '../../actions/ProductfeaturesAction';
import Sidebar from '../Sidebar';
import Headers from '../Common/Headers';
import { Link } from 'react-router-dom';
import MobileMenu from '../Common/Menu';

function ProductfeatureAdd(){

    const dispatch=useDispatch();
    
    const productfeaturedata=useSelector(state=>state.pfeatures);

     ///get PRoduct reducer
     var productdata = useSelector(state=> state.product);
     const {productArr} = productdata;
    
     const {size,expiry,weight,quality,isLoading,product_id,
        error,ProductfeatureArr,dataAdded}=productfeaturedata;

        function RenderButton(){
            return isLoading ?
            <div className="spinner-border text-danger" role="status">
            </div>
            :
       <button type="button" onClick={ButtonClicked}
         className="btn btn-out-line-success" style={{marginTop:'1rem'}}
         to="/ProductfeatureList">
            Add
        </button>
        }

        function ButtonClicked(){

            var values={size,expiry,weight,quality,product_id}

            if (!size  && !expiry && !weight && !quality && !product_id){
                alert("please fill the form");
            }else{
                dispatch(ProductfeatureAction.PostProductfeaturesData(values));
            }
        }

    
        return <main className="main">
        {Headers()}
        <div className="page-header"
                            style={{
                                backgroundImage: require('../../images/shop/page-header-back.jpg'),
                                backgroundColor: '#3C63A4'}}>
                           
                            <ul className="breadcrumb">
                                <li><Link to="/"><i className="d-icon-home"></i></Link></li>
                                <li className="delimiter">/</li>
                                <li><Link to="/ProductfeatureList">Productfeatures</Link></li>
                                <li className="delimiter">/</li>
                            </ul>
                        </div>
        
        <section>
               <div className="row gutter-no">
                   <div className="col-lg-12 col-xxl-content">
                       <div className="page-content ">
                       <div className="row">
                <div className="col-md-6 col-12 mx-auto">
                    <form>
                        <div className="form-group">
                            <label >Size</label>
                            <input type="text"
                             className="form-control" id="exampleInputPassowrd1" 
                             placeholder="Add Size" name="productfeatures" style={{marginTop: '0.5em'}}
                             value={size} 
                             onChange={(text)=>
                                 dispatch(
                                    ProductfeatureAction.ProductfeatureUpdate('size',text.target.value))}
                             ></input>

                        </div>


                        {/* <div className="form-group" style={{marginTop: '1.5em'}}>
                            <label >Color</label>
                            <input type="text"
                             className="form-control" id="exampleInputPassowrd1" 
                             placeholder="Add Color" name="Color" style={{marginTop: '0.5em'}}
                             value={color} 
                             onChange={(text)=>
                                 dispatch(
                                    ProductfeatureAction.ProductfeatureUpdate('color',text.target.value))}
                             ></input>

                        </div>  */}
                       
                        <div className="form-group" style={{marginTop: '1.5em'}}>
                            <label >Expiry</label>
                            <input type="date"
                             className="form-control" id="exampleInputPassowrd1" 
                             placeholder="Add Expiry" name="Expiry" style={{marginTop: '0.5em'}}
                             value={expiry} 
                             onChange={(text)=>
                                 dispatch(
                                    ProductfeatureAction.ProductfeatureUpdate('expiry',text.target.value))}
                             ></input>

                        </div>
                        <div className="form-group" style={{marginTop: '1.5em'}}>
                            <label >Weight</label>
                            <input type="text"
                             className="form-control" id="exampleInputPassowrd1" 
                             placeholder="Add Weight" name="Weight" style={{marginTop: '0.5em'}}
                             value={weight} 
                             onChange={(text)=>
                                 dispatch(
                                    ProductfeatureAction.ProductfeatureUpdate('weight',text.target.value))}
                             ></input>

                        </div>
                        <div className="form-group" style={{marginTop: '1.5em'}}>
                            <label >Quality</label>
                            <input type="text"
                             className="form-control" id="exampleInputPassowrd1" 
                             placeholder="Add Quality" name="Quality" style={{marginTop: '0.5em'}}
                             value={quality} 
                             onChange={(text)=>
                                 dispatch(
                                    ProductfeatureAction.ProductfeatureUpdate('quality',text.target.value))}
                             ></input>

                        </div>
                        <div className="form-group" style={{marginTop: '1.5em'}}>
                            <label >Product</label>
                       <select className='form-control'
                         onChange={(text)=>
                            dispatch(
                               ProductfeatureAction.ProductfeatureUpdate('product_id',text.target.value))}
                       
                       >
                        <option value={""}>Select Product</option>
                        {productArr.map((el,index)=>
                            <option key={index} value={el.product_id}>{el.product_name}</option>
                            )}
                       </select>
                        </div>


                        {RenderButton()}
                        
                        
                        

                    


<div className='row mt-3'>
{dataAdded ?  <span className='alert'>Productfeatures added succcessfully</span> : 

(!dataAdded && error ? <span className='alert'>{error}</span> 
:<div/>
)
}
</div>


                    </form>
                </div>

            </div>
                  
                    
                       </div>
            
                   </div>
               </div>
           </section>
                      {/* <!-- End recent product --> */}
                      
                       {/* <!-- End Footer --> */}
                       {MobileMenu()}
        </main>
           
        
        


}

export default ProductfeatureAdd;