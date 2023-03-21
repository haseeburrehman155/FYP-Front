import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { UsersAction } from '../../actions/UsersAction';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';

function UserEdit(){
    var dispatch = useDispatch();
    const {id} = useParams();
    var navigate=useNavigate();

    var userdate= useSelector(state=> state.users);
    const {active,user_name,category_id,user_phone,user_email,isLoading ,full_name,error,dataAdded,UsersRecord} =userdate;

    var usertypedata = useSelector(state=> state.usertype);
    const {usertypeArr} = usertypedata;

    var categories =  localStorage.getItem("category") ? JSON.parse(localStorage.getItem("category")) : [];



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
        var values ={active,user_name,full_name,user_phone,user_email,user_id:id,category_id}

        if (!user_name && !user_phone && !user_email && !full_name && !category_id){
            alert ("please fill the form ")
        }else {
            dispatch(UsersAction.UpdateUserData(values,navigate));
            console.log("data add ho gaya ");
        }
    }
   
    // console.log(searchParams);

    React.useEffect(()=>{

      dispatch(UsersAction.GetUserById(id))
      },[]);


    





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
                                <li><Link to="/UserList">User-List</Link></li>
                                <li className="delimiter">/</li>
                                <li><Link to="/VerifierList">Verifier List</Link></li>
                            </ul>
                        </div>
       
        <section>
               <div className="row gutter-no">
                   <div className="col-lg-12 col-xxl-content" style={{paddingBottom:"50px",paddingTop:"50px"}}>
                       <div className="page-content ">
                       <div className="row">
                    <div className="col-md-6 col-12 mx-auto">
                        {/* <form action='/contact' method='POST'> */}
                        <form>
                        <div className="form-group" style={{marginTop:20}}>
                                <label >Full Name</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                  name="User" style={{marginTop: '0.5em'}}
                                 value={full_name} 
                                 onChange={(text)=>
                                     dispatch(
                                        UsersAction.userformupdate('full_name',text.target.value))}
                                 ></input>
                            </div>

                            <div className="form-group">
                                <label style={{marginTop: '1em'}}>User Name</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                  name="User" style={{marginTop: '1em'}}
                                 value={user_name} 
                                 onChange={(text)=>
                                     dispatch(
                                        UsersAction.userformupdate('user_name',text.target.value))}
                                 ></input>

                            </div>

                            <div className="form-group" style={{marginTop:20}}>
                                <label >Contact No</label>
                                <input type="number"
                                 className="form-control" id="exampleInputPassowrd1" 
                                  name="User" style={{marginTop: '0.5em'}}
                                 value={user_phone} 
                                 onChange={(text)=>
                                     dispatch(
                                        UsersAction.userformupdate('user_phone',text.target.value))}
                                 ></input>

                            </div>
                            <div className="form-group" style={{marginTop:20}}>
                                <label >Email</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                  name="Category" style={{marginTop: '0.5em'}}
                                 value={user_email} 
                                 onChange={(text)=>
                                     dispatch(
                                        UsersAction.userformupdate('user_email',text.target.value))}
                                      
                                 ></input>

                            </div>

                            <div className="form-group" style={{marginTop:20}}>
                                <label>Activation</label>
                                <select type="text"
                                 className="form-control" id="Activation" 
                                  name="Acrivation" style={{marginTop: '0.5em'}}
                                 defaultValue={active} 
                                 onChange={(text)=>
                                     dispatch(
                                        UsersAction.userformupdate('active',text.target.value))}>
                                    <option value={0}>In Active</option>
                                    <option value={1}>Active</option>
                                    <option value={2}>Block</option>

                                 </select>  

                            </div>
                           

                     <div className="form-group" style={{marginTop: '1.5em'}}>
                                    <label >Category Expert</label>
                                    <select className='form-control'
                                        onChange={(text)=>
                                            dispatch(UsersAction.userformupdate ('category_id',text.target.value))}> 
                                            <option selected value="0">Select Category</option>                                                      
                                                {categories.map((el,index)=>
                                                    <option key={index}  value={el.category_id}>
                                                    {el.category_name}
                                                    </option>
                                                )}
                                    </select>
                            </div>
            
                            {RenderButton()}
                            
                            <div className='row mt-3'>
                                {dataAdded ?  <span className='alert'>User Update succcessfully</span> : 

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

export default UserEdit;