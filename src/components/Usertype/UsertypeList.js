import {useSelector,useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencil,faRemove} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Link } from 'react-router-dom';
import { UsertypeAction } from '../../actions/UsertypeAction';
import Sidebar from '../Sidebar';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';

function UsertypeList(){

    var dispatch = useDispatch();


var usertypedata = useSelector(state=> state.usertype);
const {usertypeArr,isLoading} = usertypedata;

    // 

    React.useEffect(()=>{
    
      dispatch(UsertypeAction.GetUsertype())
      },[]);

      function OnDeleteClick(id){
        if(window.confirm('Are you sure you want to delete')){
          dispatch(UsertypeAction.DeleteUsertypeData({user_type_id:id}));
        }else{
          alert('nada v delete')
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
                                <li><Link to="/UsertypeList">Usertype-List</Link></li>
                                <li className="delimiter">/</li>
                            </ul>
                        </div>
     
      <section>
             <div className="row gutter-no">
                 <div className="col-lg-12 col-xxl-content" style={{paddingBottom:"50px",paddingLeft:"50px",paddingRight:"50px"}}>
                     <div className="page-content" style={{padding:"10px"}}>
                       
                     <Link to="/UsertypeAdd" className='btn btn-out-line-success'>Add</Link>
           
                          <table className='table' style={{marginTop:50,borderColor:'black', borderWidth:1}}><thead>
                              <tr style={{height:50, backgroundColor:'beige'}}>
                                <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                                <th>Usertype_id</th>
                                <th>Usertype_name</th>
                                <th>No Of Users</th>
                                <th></th>
                                
                              </tr>
                            </thead>
                            <tbody>
                          {
                          usertypeArr.map((el,index)=> 
                            <tr key={index} style={{textAlign:'center'}}>
                              <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                              <td>{el.user_type_id}</td>
                              <td>{el.user_type_name}</td>
                              <td>{el.Count}</td> 
                              <td style={{textAlign:'right'}}>
                                  <Link to={"/UsertypeEdit/" +el.user_type_id} 
                                  style={{textDecoration:'none'}} 
                                  className="btn btn-outline-danger">
                                                 <FontAwesomeIcon icon={faPencil}  >
     
                                                 </FontAwesomeIcon> 
                                  </Link>
                                  <Link className='btn btn-outline-danger' 
                                  style={{marginLeft:10}} 
                                  to="#"
                                  onClick={()=> OnDeleteClick(el.user_type_id)}
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

export default UsertypeList;