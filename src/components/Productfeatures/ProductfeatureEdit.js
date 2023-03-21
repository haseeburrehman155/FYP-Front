import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { ProductfeatureAction } from '../../actions/ProductfeaturesAction';
import Sidebar from '../Sidebar';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';

function ProductfeatureEdit(){

    const dispatch=useDispatch();

    const {id}=useParams();

    var naviagte=useNavigate();
    const productfeturedata=useSelector(state =>state.pfeatures);

    const {size,expiry,weight,quality,isLoading,error,dataAdded}=productfeturedata;

    function RenderButton(){
        return  isLoading ?
           <div className="spinner-border text-danger" role="status">
           </div>
           :
          <button type="button" onClick={ButtonClicked}
            className="btn btn-out-line-success" style={{marginTop:'1rem'}}>
               Update
           </button>
       }

       function ButtonClicked(){
        var values ={size,expiry,weight,quality,feature_id:id}

        if (!size && !expiry && !weight && !quality){
            alert ("please fill the form ")
        }else {
            dispatch(ProductfeatureAction.UpdateProductfeatureData(values,naviagte));
            console.log("data add ho gaya ");
        }
    } 

    React.useEffect(()=>{
        dispatch(ProductfeatureAction.GetProductfeatureById(id));
    },[])


    return (  
        <main className="main">
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
                   <div className="col-lg-12 col-xxl-content" style={{paddingTop:"50px"}}>
                       <div className="page-content ">
                       <div className="row">
                        <div className="col-md-6 col-12 mx-auto">
                            {/* <form action='/contact' method='POST'> */}
                            <form>
                                <div className="form-group">
                                    <label style={{marginTop: '1em'}}>Update Size</label>
                                    <input type="text"
                                     className="form-control" id="exampleInputPassowrd1" 
                                      name="Category" style={{marginTop: '1em'}}
                                     value={size} 
                                     onChange={(text)=>
                                         dispatch(
                                            ProductfeatureAction.ProductfeatureUpdate('size',text.target.value))}
                                     ></input>
    
                                </div>
                                <div className="form-group" style={{marginTop:20}}>
                                    <label >Update Expiry</label>
                                    <input type="date"
                                     className="form-control" id="exampleInputPassowrd1" 
                                      name="Category" style={{marginTop: '0.5em'}}
                                     value={expiry} 
                                     onChange={(text)=>
                                         dispatch(
                                            ProductfeatureAction.ProductfeatureUpdate('expiry',text.target.value))}
                                     ></input>
    
                                </div>
                                <div className="form-group" style={{marginTop:20}}>
                                    <label >Update Weight</label>
                                    <input type="text"
                                     className="form-control" id="exampleInputPassowrd1" 
                                      name="Category" style={{marginTop: '0.5em'}}
                                     value={weight} 
                                     onChange={(text)=>
                                         dispatch(
                                            ProductfeatureAction.ProductfeatureUpdate(
                                                'weight',text.target.value
                                                ))}
                                     ></input>
                                  <div className="form-group" style={{marginTop:20}}>
                                    <label >Update Quality</label>
                                    <input type="text"
                                     className="form-control" id="exampleInputPassowrd1" 
                                      name="Category" style={{marginTop: '0.5em'}}
                                     value={quality} 
                                     onChange={(text)=>
                                         dispatch(
                                            ProductfeatureAction.ProductfeatureUpdate(
                                                'quality',text.target.value
                                                ))}
                                     ></input> 
                                     </div>   
    
                                </div>
                                {RenderButton()}
                                
                                <div className='row mt-3'>
    {dataAdded ?  <span className='alert'>Productfeature Update succcessfully</span> : 
    
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
                   
            
     )



}

export default ProductfeatureEdit;