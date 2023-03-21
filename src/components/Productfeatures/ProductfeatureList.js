import {useSelector,useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencil,faRemove} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Link } from 'react-router-dom';
import { ProductfeatureAction } from '../../actions/ProductfeaturesAction';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';

function ProductfeatureList(){

    var dispatch = useDispatch();

    const productfeturedata=useSelector(state=>state.pfeatures);
    const {ProductfeatureArr,isLoading}=productfeturedata;



    React.useEffect(()=>{
        dispatch(ProductfeatureAction.GetProductfeatures());

    },[]);

    function OnDeleteClick(id){
        if(window.confirm('Are you sure you want to delete')){
    
          dispatch(ProductfeatureAction.DeleteProductfeatureData({feature_id:id}));
        }else{
          alert('Nu ye delete  kawe ')
        }
       }



    return (
        isLoading ? <div className="spinner-border text-danger" role="status">
      </div>:
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
                 <div className="col-lg-12 col-xxl-content" style={{paddingLeft:"50px",paddingRight:"50px",paddingBottom:"50px"}}>
                     <div className="page-content ">
                       
                     <Link to="/ProductfeatureAdd" className='btn btn-success'>Add</Link>
           
                          <table className='table' style={{marginTop:50,borderColor:'black', borderWidth:1}}><thead>
                              <tr style={{height:50, backgroundColor:'beige'}}>
                                <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                                <th>Product_Name</th>
                                <th>Size</th>
                                <th>Expiry</th>
                                <th>Weight</th>
                                <th>Quality</th>
                                <th></th>
                                
                              </tr>
                            </thead>
                            <tbody>

                          {
                          ProductfeatureArr.map((el,index)=> 
                            <tr key={index} style={{textAlign:'center'}}>
                              <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                              <td>{el.product_name}</td>
                              <td>{el.size}</td>
                              <td>{el.expiry}</td>
                              <td>{el.weight}</td>
                              <td>{el.quality}</td>
                              <td style={{textAlign:'right'}}>
                                  <Link to={"/ProductfeatureEdit/" +el.feature_id} 
                                  style={{textDecoration:'none'}} 
                                  className="btn btn-outline-danger">
                                                 <FontAwesomeIcon icon={faPencil}  >
     
                                                 </FontAwesomeIcon> 
                                  </Link>
                                  <Link className='btn btn-outline-danger' 
                                  style={{marginLeft:10}} 
                                  to="#"
                                  onClick={()=> OnDeleteClick(el.feature_id)}
                                  >
                                    <FontAwesomeIcon icon={faRemove}  >
     
                                    </FontAwesomeIcon>
                                  </Link>
                              </td>
     
                              
                            </tr>
                        
                            )
                            }
                            </tbody>
                            </table>
                     
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

export default ProductfeatureList;
