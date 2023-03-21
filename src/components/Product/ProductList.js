import {useSelector,useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencil,faRemove} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { ProductAction } from '../../actions/ProductAction';
import { Link } from 'react-router-dom';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';

function ProductList(){

  var dispatch = useDispatch();



var productdata = useSelector(state=> state.product);
const {productArr,isLoading} = productdata;

//get user from memory
let userMem = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : null;

//user reducer
const userdata=useSelector(state=>state.users);
const {UserRecord} =userdata;

var usercate = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")).category_id :0;


    React.useEffect(()=>{
      dispatch(ProductAction.GetProduct())
      },[]);

   



   function OnDeleteClick(id){
    if(window.confirm('Are you sure you want to delete')){

      dispatch(ProductAction.DeleteProductData({product_id:id}));
    }else{
      alert('Nu ye delete  kawe ')
    }
   }


    return (
      isLoading ? <div className="spinner-border text-danger" role="status">
    </div>:

 <main className="main">
 {Headers(UserRecord)}
 
 
                      <div className="page-header"
                            style={{
                                backgroundImage: require('../../images/shop/page-header-back.jpg'),
                                backgroundColor: '#3C63A4'}}>
                           
                            <ul className="breadcrumb">
                                <li><Link to="/"><i className="d-icon-home"></i></Link></li>
                                <li className="delimiter">/</li>
                                <li><Link to="/ProductList">Products List</Link></li>
                                <li className="delimiter">/</li>
                            </ul>
                        </div>
 
        
                        <div className="container">
                                <div className="row gutter-lg main-content-wrap">
            <div className="col-lg-12 col-xxl-content">
                <div className="page-content" style={{padding:10}}>
                  
                <Link to="/ProductAdd" className='btn btn-out-line-success'>Add</Link>
      
                     <table className='table' style={{marginTop:50,borderColor:'black', borderWidth:1}}><thead>
                         <tr style={{height:50, backgroundColor:'beige'}}>
                           <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                           <th>Image</th>
                            <th>product_name</th>
                            <th>price</th>
                            <th>manufacture</th>
                            <th>category Name</th>
                            <th>Verified?</th>
                            <th></th>
                           
                         </tr>
                       </thead>
                       <tbody>
                     {
                     productArr.filter(a=> usercate == 0 ? a.category_id > 0 : 
                      a.category_id == usercate).map((el,index)=> 

                       <tr key={index} style={{textAlign:'center',backgroundColor:el.verified == 0 ?
                        "pink": "white"}}>
                         <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                         <td>{<img style={{height:50, width:50, objectFit:'cover'}} 
                         src={!el.ImageUrl? "http://localhost:8084/un.png": el.ImageUrl}/>}
                         </td>
                          <td>{el.product_name}</td>
                          <td>{el.price}</td>
                          <td>{el.manufacture}</td>
                          <td>{el.category_name}</td>
                          <td>{el.verified == 0 ?"No":"Yes"}</td>

                         <td style={{textAlign:'right'}}>
                             <Link to={"/ProductEdit/" +el.product_id} 
                             style={{textDecoration:'none'}} 
                             className="btn btn-outline-danger">
                                            <FontAwesomeIcon icon={faPencil}  >

                                            </FontAwesomeIcon> 
                             </Link>
                             
                            {userMem && userMem.user_type_name== "Admin" ?
                            <Link className='btn btn-outline-danger' 
                             style={{marginLeft:10}} 
                             to="#" onClick={()=> OnDeleteClick(el.product_id)}                             >
                               <FontAwesomeIcon icon={faRemove}  >

                               </FontAwesomeIcon>
                             </Link>:<div/>}
                         </td>

                         
                       </tr>
                   
                       )
                       }
                       </tbody>
                       </table>
                
                </div>
     
            </div>
        </div>
        </div>
   
               {/* <!-- End recent product --> */}
              
                {/* <!-- End Footer --> */}
                {MobileMenu()}
</main>
    )
    
}
export default ProductList;