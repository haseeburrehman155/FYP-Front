import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UsersAction } from '../../actions/UsersAction';
import { UsertypeAction } from '../../actions/UsertypeAction';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';



function Users(){
       

    const dispatch=useDispatch();
    var navigate=useNavigate();
   


    //users reducer
    const userdata=useSelector(state=>state.users);
    const {category_id,full_name,city,user_address,password,user_name,user_phone,user_email,
        user_type_id,isLoading,error,dataAdded,UserArr} =userdata;
   
    ///get category reducer
    var usertypedata = useSelector(state=> state.usertype);
    const {usertypeArr} = usertypedata;

    var categorydata = useSelector(state=> state.category);
    const {categoryArr} = categorydata;
    var categories =  localStorage.getItem("category") ? JSON.parse(localStorage.getItem("category")) : [];

    React.useEffect(()=>{
    
        dispatch(UsertypeAction.GetUsertype())
        },[]);

    function RenderButton(){
         return  isLoading ?
            <div className="spinner-border text-danger" role="status">
            </div>
            :
       <button type="button" onClick={ButtonClicked}
         className="btn btn-out-line-success" style={{marginTop:'1rem'}}>
            Add
        </button>
    }

    function ButtonClicked(){
        var values ={category_id,user_name,city,user_phone,user_email,user_type_id,full_name,user_address,password}
        debugger;
        if (!user_name || !user_phone || !user_email || !city){
            alert ("please fill the form ")
        }else {
             dispatch(UsersAction.PostUsersData(values,navigate));
            console.log("data add ho gaya ");
        }
    }
    

    return   <main className="main">
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
                            </ul>
                        </div>
    
    <section>
           <div className="row gutter-no" style={{paddingTop:"20px"}}>
               <div className="col-lg-12 col-xxl-content">
                   <div className="page-content ">
                   <div className="row">
                    <div className="col-md-6 col-12 mx-auto">
                        {/* <form action='/contact' method='POST'> */}
                        <form>
                        <div className="form-group" >
                                <label >Full Name</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add user_name" name="User_name" style={{marginTop: '0.5em'}}
                                 value={full_name} 
                                 onChange={(text)=>
                                     dispatch(
                                        UsersAction.userformupdate('full_name',text.target.value))}
                                 ></input>

                            </div>

                            <div className="form-group mt-3" >
                                <label >User Name</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add user_name" name="User_name" style={{marginTop: '0.5em'}}
                                 value={user_name} 
                                 onChange={(text)=>
                                     dispatch(
                                        UsersAction.userformupdate('user_name',text.target.value))}
                                 ></input>

                            </div>

                            <div className="form-group mt-3" >
                                <label >Password</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add password" name="User_name" style={{marginTop: '0.5em'}}
                                 value={password} 
                                 onChange={(text)=>
                                     dispatch(
                                        UsersAction.userformupdate('password',text.target.value))}
                                 ></input>

                            </div>


                            <div className="form-group" style={{marginTop: '1.5em'}}>
                                <label >Contact No</label>
                                <input type="number"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add user_phone" name="user_phone" style={{marginTop: '0.5em'}}
                                 value={user_phone} 
                                 onChange={(text)=>
                                     dispatch(
                                        UsersAction.userformupdate('user_phone',text.target.value))}
                                 ></input>

                            </div> 
                           
                            <div className="form-group" style={{marginTop: '1.5em'}}>
                                <label >Email</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add user_email" name="user_email" style={{marginTop: '0.5em'}}
                                 value={user_email} 
                                 onChange={(text)=>
                                     dispatch(
                                       UsersAction.userformupdate('user_email',text.target.value))}
                                 ></input>

                            </div>
                            <div className="form-group" style={{marginTop: '1.5em'}}>
                                <label >City</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add city" name="city" style={{marginTop: '0.5em'}}
                                 value={city} 
                                 onChange={(text)=>
                                     dispatch(
                                       UsersAction.userformupdate('city',text.target.value))}
                                 ></input>

                            </div>
                            <div className="form-group" style={{marginTop: '1.5em'}}>
                                <label >Address</label>
                                <textarea 
                                rows={3}
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add user_email" name="user_email" style={{marginTop: '0.5em'}}
                                 value={user_address} 
                                 onChange={(text)=>
                                     dispatch(
                                       UsersAction.userformupdate('user_address',text.target.value))}
                                 ></textarea>

                            </div>

                            <div className="form-group" style={{marginTop: '1.5em'}}>
                                <label >User Type</label>
                                <select className='form-control'
                                    onChange={(text)=>
                                        dispatch(
                                        UsersAction.userformupdate ('user_type_id',text.target.value))}
                                
                                >
                                    {usertypeArr.map((el,index)=>
                                        <option key={index}
                                        value={el.user_type_id}>
                                            {el.user_type_name}
                                            </option>
                                        )}
                                </select>
                            </div>

                         {usertypeArr.find(a=>a.user_type_id == user_type_id)
                          && usertypeArr.find(a=>a.user_type_id == user_type_id).user_type_name == "Verifier" 
                          ? <div className="form-group" style={{marginTop: '1.5em'}}>
                                    <label >Category Expert</label>
                                    <select className='form-control'
                                        onChange={(text)=>
                                            dispatch(UsersAction.userformupdate ('category_id',text.target.value))}>                                                       
                                                {categories.map((el,index)=>
                                                    <option key={index}  value={el.category_id}>
                                                    {el.category_name}
                                                    </option>
                                                )}
                                    </select>
                            </div>
                         :<div/>
                        }   




                            {RenderButton()}
                            
                            

<div className='row mt-3'>
{dataAdded ?  <span className='alert'>User added succcessfully</span> : 

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


export default Users;