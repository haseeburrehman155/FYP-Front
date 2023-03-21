import axios from "axios";
import { UsersConstants } from "../reducers/Constants";
export const UsersAction={
    userformupdate,
    GetUsers,
    PostUsersData,
    UpdateUserData,
    GetUserById,
    DeleteUserData,
    LoginUser,
    GetfilterCity
}


function userformupdate(prop,value){
    return dispatch=>{
        dispatch({
            type:UsersConstants.USER_FORM_UPDATE,
            payload:{prop,value},
        })
    }

}

function GetUsers(getAll){
    return dispatch=>{
        dispatch({
            type:UsersConstants.USER_ADDING,
        })
        axios.get('/api/getusers')
        .then((res)=>{
            console.log("res is ", res);
            console.log(res.data.result);

            dispatch({
                type:UsersConstants.USER_FETCH,
                payload:res.data.result,
            })
           
           
        }).catch((err)=>{
            console.log("error is ", err);
            dispatch({
                type:UsersConstants.USER_ADDING_FAILED,
            })
        })
    }
}

function GetfilterCity(cityfilter){
    return dispatch =>{
        dispatch({
            type:UsersConstants.USER_ADDING,
        })
        axios.post('/api/getFilteredcity',{cityfilter:cityfilter})
        .then((res)=>{
            console.log(res);

        dispatch({
            type:UsersConstants.USER_FETCH,
             payload: res.data.cityresult
        })
        })
        .catch((err)=>{
            console.log(err);

            dispatch({
                type:UsersConstants.USER_ADDING_FAILED,
            })
        });
    }
}

function LoginUser(obj,navigate){
    //const navigate = useNavigate();
    console.log('user obj is', obj);
    return dispatch=>{
        dispatch({
            type:UsersConstants.USER_ADDING,
        })
        axios.post('/api/login',obj)
        .then((res)=>{
            console.log("res is ", res);
            console.log(res.data.result);
           // 
            if(res.data.success)
            {
                if(res.data.result && res.data.result.length > 0){
                          //check user type id from table
                      var verifierId = 22; //from db
                    if(res.data.result[0].active== 0 || res.data.result[0].active== 2){
                        alert('Your account is still in process/No Active.You will recieve an email when your acccount got verified/Rejected')
                    return;
                    }
                    dispatch(
                        {
                          type: UsersConstants.USER_FORM_UPDATE,
                          payload: {prop:'UserRecord', value: res.data.result[0]} 
                        })
                    localStorage.setItem("users", JSON.stringify(res.data.result[0]));
                    navigate("/")
                }
                else{
                alert(res.data.message);
                return;
              }
            }
            else
             alert('Incorrect UserName OR Password');
           
        }).catch((err)=>{
            console.log("error is ", err);
            dispatch({
                type:UsersConstants.USER_ADDING_FAILED,
            })
        })
    }
}

function PostUsersData(Obj,navigate){
    return dispatch =>{
        dispatch({
            type:UsersConstants.USER_ADDING,
        })

axios.post('/api/saveusers',Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success === false)
    {
        dispatch({
            type:UsersConstants.USER_ADDING_FAILED,
            payload: res.data.message
        })
    }else
    {
        dispatch({
            type:UsersConstants.USER_ADDED_SUCCESSFULLY,
            payload:Obj
        })
        
        navigate("/UserList")
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:UsersConstants.USER_ADDING_FAILED,
            payload: err.toString()
        })
    });
  }
}

function UpdateUserData(Obj,navigate){
    return dispatch =>{
dispatch({
    type:UsersConstants.USER_ADDING,
})

axios.post("/api/updateuser",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success ==false)
    {
        dispatch({
            type:UsersConstants.USER_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        dispatch({
            type:UsersConstants.USER_ADDED_SUCCESSFULLY,
            payload:Obj
        })
        
        alert("User Successfully updated")
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:UsersConstants.USER_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}


function GetUserById(user_id){
    return dispatch =>{
        dispatch({
            type:UsersConstants.USER_ADDING,

        });
        var obj = {user_id:user_id}
        axios.get(`/api/getuserbyid/${user_id}`)
        .then((res)=>{
            // 
            console.log(res);

                    var selecteduser = null;
                    //array
                    if(res.data.result.length>0 )
                    {
                        var array = res.data.result;
                        selecteduser = array[0];
                       
                    }

                    

                    
                    if (res.data.success === true && selecteduser){
                        dispatch({
                            type:UsersConstants.USER_FORM_UPDATE,
                            payload: {prop:'UsersRecord',value:selecteduser},

                        });
                       

                        dispatch({
                            type:UsersConstants.USER_FORM_UPDATE,
                            payload: {prop:'isLoading',value:false},
                        });
                        dispatch({
                            type:UsersConstants.USER_FORM_UPDATE,
                            payload: {prop:'full_name',value:selecteduser.full_name},
                            });
                        dispatch({
                            type:UsersConstants.USER_FORM_UPDATE,
                            payload: {prop:'user_name',value:selecteduser.user_name},
                            });
                        dispatch({
                            type:UsersConstants.USER_FORM_UPDATE,
                            payload: {prop:'user_phone',value:selecteduser.user_phone},
                            }); 
                            dispatch({
                                type:UsersConstants.USER_FORM_UPDATE,
                                payload: {prop:'city',value:selecteduser.city},
                                }); 
                            dispatch({
                                type:UsersConstants.USER_FORM_UPDATE,
                                payload: {prop:'active',value:selecteduser.active},
                                }); 
                        dispatch({
                            type:UsersConstants.USER_FORM_UPDATE,
                            payload: {prop:'user_email',value:selecteduser.user_email},
                            });     
                            dispatch({
                                type:UsersConstants.USER_FORM_UPDATE,
                                payload: {prop:'category_id',value:selecteduser.category_id},
                                }); 

                    }
                    else{
                        dispatch({
                            type:UsersConstants.USER_ADDING_FAILED,
                            payload:res.data.message
                        })
                    }
       
        })
        .catch((err)=>{
                console.log(err);

                dispatch({
                    type:UsersConstants.USER_ADDING_FAILED,
                    payload:err.toString()
                })
        });
    }
}

function DeleteUserData(Obj){
    return dispatch =>{
dispatch({
    type:UsersConstants.USER_ADDING
})

axios.post("/api/deleteuser",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success == false)
    {
        dispatch({
            type:UsersConstants.USER_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        window.location.reload();// = "/UserList";
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:UsersConstants.USER_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}