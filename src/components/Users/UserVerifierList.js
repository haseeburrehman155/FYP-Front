import {useSelector,useDispatch} from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { UsersAction } from '../../actions/UsersAction';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';

function UserVerifierList(){

    var dispatch = useDispatch();


// var gloabl = useSelector(state=> state);

var userdata = useSelector(state=> state.users);
const {UserArr,isLoading} = userdata;
debugger;
    // 

    React.useEffect(()=>{
        // var url = process.env.API_URL;
        // // 
      dispatch(UsersAction.GetUsers(true))
      },[]);
debugger;
   
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
                                <li><Link to="/UserVerifierList">UserVerifier List</Link></li>

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
                              <th>Name</th>
                              <th>Address</th>
                              <th>City</th>
                              <th>Email</th>
                              <th>Type</th>
                              <th>Verifier Category</th>
                            </tr>
                          </thead>
                          <tbody>
                        {
                        UserArr.filter(a=>a.user_type_id==22 && a.active==1).map((el,index)=> 
                        
                          <tr key={index} style={{textAlign:'center'}}>
                            
                            <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                            <td>{el.user_id}</td>
                            <td>{el.user_name}</td>
                            <td>{el.address}</td>
                            <td>{el.city}</td>
                            <td>{el.user_email}</td>
                            <td>{el.user_type_name}</td>
                            <td value={el.category_id}>{el.category_name}</td>                 
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
export default UserVerifierList;