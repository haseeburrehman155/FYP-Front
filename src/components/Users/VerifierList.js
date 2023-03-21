import {useSelector,useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencil,faRemove} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Link } from 'react-router-dom';
import { UsersAction } from '../../actions/UsersAction';
import Sidebar from '../Sidebar';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';

function VerifierList(){

    var dispatch = useDispatch();


// var gloabl = useSelector(state=> state);

var userdata = useSelector(state=> state.users);
const {UserArr,isLoading} = userdata;

    // 

    React.useEffect(()=>{
        // var url = process.env.API_URL;
        // // 
      dispatch(UsersAction.GetUsers(false))
      },[]);

   function OnDeleteClick(id){
    if(window.confirm('Are you sure you want to delete')){

      dispatch(UsersAction.DeleteUserData({user_id:id}));
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
                                <li><Link to="/UserList">User List</Link></li>
                                <li className="delimiter">/</li>
                                <li><Link to="/VerifierList">Verifier List</Link></li>

                            </ul>
                        </div>
   
    <section>
           <div className="row gutter-no">
               <div className="col-lg-12 col-xxl-content" style={{paddingBottom:"50px",paddingLeft:"50px",paddingRight:"50px"}}>
                   <div className="page-content" style={{padding:"10px"}}>
                     
                   {/* <Link to="/UserAdd" className='btn btn-out-line-success'>Add</Link> */}
                   
                        <table className='table' style={{marginTop:50,borderColor:'black', borderWidth:1}}><thead>
                            <tr style={{height:50, backgroundColor:'beige'}}>
                              <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                              <th>User Id</th>
                              <th>User Name</th>
                              <th>User Phone</th>
                              <th>User Email</th>
                              <th>User Type</th>
                              <th>Verifier Category</th>
                              <th>Status</th>
                              <th> </th>
                              
                            </tr>
                          </thead>
                          <tbody>
                        {
                        UserArr.filter(a=>a.user_type_id==22).map((el,index)=> 
                          <tr key={index} style={{textAlign:'center'}}>
                            <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                            <td>{el.user_id}</td>
                            <td>{el.user_name}</td>
                            <td>{el.user_phone}</td>
                            <td>{el.user_email}</td>
                            <td>{el.user_type_name}</td>
                            <td value={el.category_id}>{el.category_name}</td>
                            <td>{el.active == 0 ?<span className='alert-danger p-3' style={{
                                                      color: 'black',
                                                      padding: 5,
                                                      borderRadius: 5,
                                                      fontSize: 11
                            }}>Pending</span>:el.active == 1 ? <span className='alert-success p-3' style={{
                              color: 'black',
                              padding: 5,
                              borderRadius: 5,
                              fontSize: 11
    }}>Verified</span>:el.active==2 ?<span className='alert-danger p-3' style={{
                              color: 'black',
                              padding: 5,
                              borderRadius: 5,
                              fontSize: 11
    }}>Block</span>:<div/>}
                      </td>
                            <td style={{textAlign:'right'}}>
                                <Link to={"/UserEdit/" +el.user_id} 
                                style={{textDecoration:'none'}} 
                                className="btn btn-outline-danger">
                                               <FontAwesomeIcon icon={faPencil}  >
   
                                               </FontAwesomeIcon> 
                                </Link>
                                <Link className='btn btn-outline-danger' 
                                style={{marginLeft:10}} 
                                to="#"
                                onClick={()=> OnDeleteClick(el.user_id)}
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
export default VerifierList;