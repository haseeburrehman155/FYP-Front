import axios from 'axios';
import { CategoryConstant } from '../reducers/Constants/CategoryConstants';
import { SubcategoryConstants } from '../reducers/Constants/SubcategoryConstants';


export const CategoryAction={
    formupdate, 
    GetCategory,
    PostCategoryData,
    GetCategoryById,
    UpdateCategoryData,
    DeleteCategoryData

}


function formupdate(prop,value){
    // 
    return dispatch=>{
        dispatch({
            type:CategoryConstant.CATEGORY_UPDATED,
            payload:{prop,value}
        })
    }
}

function GetCategory(){
    return dispatch =>{
        dispatch({
            type:CategoryConstant.CATEGORY_ADDING,
        })
        // 
        axios.get('/api/getcategory')
        .then((res)=>{
            // 
            console.log(res);

                dispatch({
                    type:CategoryConstant.CATEGORY_FETCHED,
                    payload: res.data.result
                });
                dispatch({
                    type:SubcategoryConstants.SUBCATEGORY_FETCHED,
                    payload: res.data.result2
                });
                   
        })
        .catch((err)=>{
            console.log(err);

            dispatch({
                type:CategoryConstant.CATEGORY_ADDING_FAILED,
            })
        });
    }
}

function PostCategoryData(Obj,navigate){
    return dispatch =>{
dispatch({
    type:CategoryConstant.CATEGORY_ADDING
})

axios.post("/api/savecategory",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success ==false)
    {
        dispatch({
            type:CategoryConstant.CATEGORY_ADDING_FAILED,
            payload: res.data.message
        })
    }else
    {
        dispatch({
            type:CategoryConstant.CATEGORY_ADDED_SUCCESSFULLY,
            payload:Obj
        });
        // localStorage.setItem("category",JSON.stringify(res.data.result)); 

        navigate("/categorylist")
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:CategoryConstant.CATEGORY_ADDING_FAILED,
            payload: err.toString()
        })
    });
  }
}

function GetCategoryById(category_id,navigate){
    return dispatch =>{
        dispatch({
            type:CategoryConstant.CATEGORY_ADDING,

        });
        var obj = {category_id:category_id}
        // 
        axios.get(`/api/getcategorybyid/${category_id}`)
        .then((res)=>{
            // 
            console.log(res);

                    var selectedcategory = null;
                    //array
                    if(res.data.result.length>0)
                    {
                        var array = res.data.result;
                        selectedcategory = array[0];
                    }
                 
                    if (res.data.success === true && selectedcategory){
                        dispatch({
                            type:CategoryConstant.CATEGORY_UPDATED,
                            payload: {prop:'categoryrecord',value:selectedcategory},
                        });
                        dispatch({
                            type:CategoryConstant.CATEGORY_UPDATED,
                            payload: {prop:'isLoading',value:false},
                        });
                        dispatch({
                            type:CategoryConstant.CATEGORY_UPDATED,
                            payload: {prop:'category_name',value:selectedcategory.category_name},
                            });
                        dispatch({
                            type:CategoryConstant.CATEGORY_UPDATED,
                            payload: {prop:'categoryimage',value:selectedcategory.categoryimage},
                            });

                    }
                    else{
                        dispatch({
                            type:CategoryConstant.CATEGORY_ADDING_FAILED,
                            payload:res.data.message,
                        })
                    }
       
        })
        .catch((err)=>{
                console.log(err);

                dispatch({
                    type:CategoryConstant.CATEGORY_ADDING_FAILED,
                    payload:err.toString(),
                })
        });
    }
}

function UpdateCategoryData(Obj,navigate){
    return dispatch =>{
dispatch({
    type:CategoryConstant.CATEGORY_ADDING
})

axios.post("/api/updatecategory",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success ==false)
    {
        dispatch({
            type:CategoryConstant.CATEGORY_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        dispatch({
            type:CategoryConstant.CATEGORY_ADDED_SUCCESSFULLY,
            payload:Obj
        })
        
        navigate("/Categorylist") ;
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:CategoryConstant.CATEGORY_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}

function DeleteCategoryData(Obj){
    return dispatch =>{
dispatch({
    type:CategoryConstant.CATEGORY_ADDING
})

axios.post("/api/deletecategory",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success ==false)
    {
        dispatch({
            type:CategoryConstant.CATEGORY_ADDING_FAILED,
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
            type:CategoryConstant.CATEGORY_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}





