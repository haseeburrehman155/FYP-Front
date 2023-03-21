import axios from "axios";
import { SubcategoryConstants } from "../reducers/Constants/SubcategoryConstants";


export const SubcategoryAction={
    SubcategoryUpdate,
    GetSubcategory,
    PostSubcategoryData,
    GetSubcategoryById,
    UpdateSubcategoryData,
    DeleteSubcategoryData,
}


function SubcategoryUpdate(prop,value){
    return dispatch=>{
        dispatch({
            type:SubcategoryConstants.SUBCATEGORY_UPDATED,
            payload:{prop,value},
        })
    }
}

function GetSubcategory(){
    return dispatch=>{
        dispatch({
            type:SubcategoryConstants.SUBCATEGORY_ADDING,
        })

        axios.get('api/getsubcategory').then((res)=>{
            console.log(res);
            dispatch({
                type:SubcategoryConstants.SUBCATEGORY_FETCHED,
                 payload: res.data.result
            });


        }).catch((error)=>{
            console.log('error is ' , error );

            dispatch({
                type:SubcategoryConstants.SUBCATEGORY_ADDING_FAILED,
            })
        })
    }
}

function PostSubcategoryData(Obj,navigate){
    return dispatch=>{
        dispatch({
            type:SubcategoryConstants.SUBCATEGORY_ADDING,
        })

        axios.post('api/savesubcategory',Obj).then((res)=>{
            console.log(res);


            if(res.data.success === true){
                dispatch({
                    type:SubcategoryConstants.SUBCATEGORY_ADDED_SUCCESSFULLY,
                    payload:Obj,
                });

            localStorage.setItem("subcategory",JSON.stringify(res.data.result))

                navigate("/SubcategoryList");

            }else{
                dispatch({
                    type:SubcategoryConstants.SUBCATEGORY_ADDING_FAILED,
                    payload:res.data.message
                });
                
            }
        }).catch((error)=>{
            console.log('error is ',error);

            dispatch({
                type:SubcategoryConstants.SUBCATEGORY_ADDING_FAILED,
                payload:error.toString(),
            })
        })
    }
}

function GetSubcategoryById(subcategory_id){
    return dispatch =>{
        dispatch({
            type:SubcategoryConstants.SUBCATEGORY_ADDING,

        });
        var obj = {subcategory_id:subcategory_id}
        axios.get(`/api/getsubcategorybyid/${subcategory_id}`)
        .then((res)=>{
            console.log(res);

                    var selectedsubcategory = null;

                    if(res.data.result.length>0)
                    {
                        var array = res.data.result;
                        selectedsubcategory = array[0];
                    }      

                    
                    if (res.data.success === true && selectedsubcategory){
                        dispatch({
                            type:SubcategoryConstants.SUBCATEGORY_UPDATED,
                            payload: {prop:'SubcategoryRecord',value:selectedsubcategory},
                        });
                        dispatch({
                            type:SubcategoryConstants.SUBCATEGORY_UPDATED,
                            payload: {prop:'isLoading',value:false},
                        });
                        dispatch({
                            type:SubcategoryConstants.SUBCATEGORY_UPDATED,
                            payload: {prop:'subcategory_name',value:selectedsubcategory.subcategory_name},
                            });
                            dispatch({
                                type:SubcategoryConstants.SUBCATEGORY_UPDATED,
                                payload: {prop:'categoryIds',value:selectedsubcategory.categoryIds},
                                });

                    }
                    else{
                        dispatch({
                            type:SubcategoryConstants.SUBCATEGORY_ADDING_FAILED,
                            payload:res.data.message,
                        })
                    }
 
        })
        .catch((err)=>{
                console.log(err);

                dispatch({
                    type:SubcategoryConstants.SUBCATEGORY_ADDING_FAILED,
                    payload:err.toString(),
                })
        });
    }
}

function UpdateSubcategoryData(Obj,navigate){
    return dispatch =>{
dispatch({
    type:SubcategoryConstants.SUBCATEGORY_ADDING,
})

axios.post("/api/updatesubcategory",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success ==false)
    {
        dispatch({
            type:SubcategoryConstants.SUBCATEGORY_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        dispatch({
            type:SubcategoryConstants.SUBCATEGORY_ADDED_SUCCESSFULLY,
            payload:Obj
        })
        
        navigate("/Subcategorylist");
    }
    
    
    }).catch((err)=>{
        console.log('error',err);
        dispatch({
            type:SubcategoryConstants.SUBCATEGORY_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}

function DeleteSubcategoryData(Obj){
    return dispatch =>{
dispatch({
    type:SubcategoryConstants.SUBCATEGORY_ADDING,
})

axios.post("/api/deletesubcategory",Obj)
    .then((res)=>
    {
    console.log(res);
    
    if(res.data.success === false)
    {
        dispatch({
            type:SubcategoryConstants.SUBCATEGORY_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        window.location.reload();// = "/categorylist";
    }
    
    
    }).catch((err)=>{
        console.log('error',err);
        dispatch({
            type:SubcategoryConstants.SUBCATEGORY_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}