import axios from "axios";
import { UsertypeConstants } from "../reducers/Constants";


export const UsertypeAction={
    userformupdate,
    GetUsertype,
    PostUsertype,
    UpdateUsertypeData,
    GetUsertypeById,
    DeleteUsertypeData,
    


}

function userformupdate(prop,value){
    return dispatch=> {
        dispatch({
            type:UsertypeConstants.USER_TYPE_UPDATED,
            payload:{prop,value}
        })        
    }
}

//to get usertype from api/getusertype

function GetUsertype(){
    return dispatch=>{
        dispatch({
            type:UsertypeConstants.USER_TYPE_ADDING,
        })
      
        axios.get('/api/getusertype')
        .then((res)=>{
            console.log(res);
            dispatch({
                type:UsertypeConstants.USER_TYPE_FETCH,
                payload:res.data.result
            })

        }).catch((err)=>{
            console.log("error", err);

            dispatch({
                type:UsertypeConstants.USER_TYPE_ADDING_FAILED,
            })
        });
    }

}

//to post usertype from api/getusertype

function PostUsertype(obj,navigate){
    return dispatch=>{
        dispatch({
            type:UsertypeConstants.USER_TYPE_ADDING,
        })

        axios.post('/api/saveusertype',obj)
        .then((res)=>{
            console.log(res);

            if(res.data.success === true){
                dispatch({
                    type:UsertypeConstants.USER_TYPE_ADDED_SUCCESSFULLY,
                    payload:obj
                })
                navigate("/UsertypeList")
                
            }else{
                dispatch({
                    type:UsertypeConstants.USER_TYPE_ADDING_FAILED,
                    payload:res.data.message
                })
                
            }
        }).catch((err)=>{
            console.log("error",err);

            dispatch({
                type:UsertypeConstants.USER_TYPE_ADDING_FAILED,
                payload:err.toString(),
            })
        })
    }

}

//to update usertype from api/getusertype

function UpdateUsertypeData(Obj,navigate){
    return dispatch =>{
dispatch({
    type:UsertypeConstants.USER_TYPE_ADDING
})

axios.post("/api/updateusertype",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success == false)
    {
        dispatch({
            type:UsertypeConstants.USER_TYPE_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        dispatch({
            type:UsertypeConstants.USER_TYPE_ADDED_SUCCESSFULLY,
            payload:Obj
        })
        
        navigate("/UsertypeList")
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:UsertypeConstants.USER_TYPE_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}

// get data by id

function GetUsertypeById(user_type_id){
    return dispatch =>{
        dispatch({
            type:UsertypeConstants.USER_TYPE_ADDING,

        });
        var obj = {user_type_id:user_type_id}
        axios.get(`/api/getusertypebyid/${user_type_id}`)
        .then((res)=>{
            // 
            console.log(res);

                    var selectedusertype = null;
                    //array
                    if(res.data.result.length>0)
                    {
                        var array = res.data.result;
                        selectedusertype = array[0];
                    }

                    

                    
                    if (res.data.success === true && selectedusertype){
                        dispatch({
                            type:UsertypeConstants.USER_TYPE_UPDATED,
                            payload: {prop:'UsertypeRecord',value:selectedusertype},

                        });
                        dispatch({
                            type:UsertypeConstants.USER_TYPE_UPDATED,
                            payload: {prop:'isLoading',value:false},
                        });
                        dispatch({
                            type:UsertypeConstants.USER_TYPE_UPDATED,
                            payload: {prop:'user_type_name',value:selectedusertype.user_type_name},
                            });       

                    }
                    else{
                        dispatch({
                            type:UsertypeConstants.USER_TYPE_ADDING_FAILED,
                            payload:res.data.message
                        })
                    }
       
        })
        .catch((err)=>{
                console.log(err);

                dispatch({
                    type:UsertypeConstants.USER_TYPE_ADDING_FAILED,
                    payload:err.toString()
                })
        });
    }
}


//delete usertype from api /deleteusertype 

function DeleteUsertypeData(Obj){
    return dispatch =>{
dispatch({
    type:UsertypeConstants.USER_TYPE_ADDING
})

axios.post("/api/deleteusertype",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success == false)
    {
        dispatch({
            type:UsertypeConstants.USER_TYPE_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        window.location.reload();// = "/categorylist";
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:UsertypeConstants.USER_TYPE_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}