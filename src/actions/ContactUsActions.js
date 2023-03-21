import axios from 'axios';
import { ContactUsConstants } from '../reducers/Constants';



export const ContactUsActions={
    Contactusformupdate, 
    GetContactUs,
    PostContactUsData,
    DeleteContactUsData,
   

}

function Contactusformupdate(prop,value){
    // 
    return dispatch=>{
        dispatch({
            type:ContactUsConstants.CONTACTUS_FORM_UPDATED,
            payload:{prop,value}
        })
    }
}

function GetContactUs(){
    return dispatch =>{
        dispatch({
            type:ContactUsConstants.CONTACTUS_ADDING,
        })
        // 
        axios.get('/api/getcontactus')
        .then((res)=>{
            // 
            console.log(res);

                dispatch({
                    type:ContactUsConstants.CONTACTUS_FETCHED,
                    payload: res.data.contactresult
                });
               
                   
        })
        .catch((err)=>{
            console.log(err);

            dispatch({
                type:ContactUsConstants.CONTACTUS_ADDING_FAILED,
                payload:err.toString()
            })
        });
    }
}

function PostContactUsData(Obj,navigate){
    return dispatch =>{
dispatch({
    type:ContactUsConstants.CONTACTUS_ADDING
})

axios.post("/api/savecontactus",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success ==false)
    {
        dispatch({
            type:ContactUsConstants.CONTACTUS_ADDING_FAILED,
            payload: res.data.message
        })
    }else
    {
        dispatch({
            type:ContactUsConstants.CONTACTUS_ADDED_SUCCESSFULLY,
            payload:Obj
        });
        // localStorage.setItem("category",JSON.stringify(res.data.result)); 

        navigate('/');
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:ContactUsConstants.CONTACTUS_ADDING_FAILED,
            payload: err.toString()
        })
    });
  }
}

function DeleteContactUsData(Obj){
    return dispatch =>{
dispatch({
    type:ContactUsConstants.CONTACTUS_ADDING
})

axios.post("/api/deletecontactus",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success ==false)
    {
        dispatch({
            type:ContactUsConstants.CONTACTUS_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        window.location.reload();
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:ContactUsConstants.CONTACTUS_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}