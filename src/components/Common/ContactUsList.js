import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ContactUsActions } from "../../actions/ContactUsActions";
import Headers from "./Headers";
import {faPencil,faRemove} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import MobileMenu from "./Menu";


function ContactUsList(){

    const dispatch=useDispatch();

    var contactusdata=useSelector(state=>state.contactus);

    const{ContactArr,isLoading}=contactusdata;
debugger;


    React.useEffect(()=>{
        dispatch(ContactUsActions.GetContactUs())
        },[]);
       

        function OnDeleteClick(id){
            if(window.confirm('Are you sure you want to delete')){
        
              dispatch(ContactUsActions.DeleteContactUsData({contact_id:id}));
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
                                          <li><Link to="/ContactUsList">Contact List</Link></li>
                                          <li className="delimiter">/</li>
                                      </ul>
                                  </div>
           
                  
                                  <div className="container">
                                          <div className="row gutter-lg main-content-wrap">
                      <div className="col-lg-12 col-xxl-content">
                          <div className="page-content" style={{padding:20}}>
                            
                          
                
                               <table className='table' style={{marginTop:50,borderColor:'black', borderWidth:1}}><thead>
                                   <tr style={{height:50, backgroundColor:'beige',paddingTop:'10px'}}>
                                    <th>Contact Id</th>
                                     <th>Name</th>
                                      <th>Contact Email</th>
                                      <th>Message</th>
                                      <th> Delete Contact</th>
                                   </tr>
                                 </thead>
                                 <tbody>
                          {
                          ContactArr.map((el,index)=> 
                            <tr key={index} style={{textAlign:'center',marginTop:10}}>
                              <td>{el.contact_id}</td>
                              <td>{el.name}</td>
                              <td>{el.contactemail}</td>
                              <td>{el.message}</td>

                              <td style={{textAlign:'right'}}>
                              <Link className='btn btn-outline-danger' 
                                style={{marginLeft:10}} 
                                to="#"
                                onClick={()=> OnDeleteClick(el.contact_id)}
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
                  </div>
             
                         {/* <!-- End recent product --> */}
                        
                          {/* <!-- End Footer --> */}
                          {MobileMenu()}
          </main>
              )


}


export default ContactUsList;
