import axios from "axios";
import { ProductfeaturesConstants } from "../reducers/Constants/ProductfeaturesConstants";

export const ProductfeatureAction={
    ProductfeatureUpdate,
    GetProductfeatures,
    PostProductfeaturesData,
    UpdateProductfeatureData,
    GetProductfeatureById,
    DeleteProductfeatureData,
}

function ProductfeatureUpdate(prop,value){
    return dispatch=>{
        dispatch({
            type:ProductfeaturesConstants.PRODUCTFEATURE_FORM_UPDATE,
            payload:{prop,value},
        })
    }
}


function GetProductfeatures(){
    return dispatch=>{
        dispatch({
            type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING,
        })
        axios.get('/api/getproductfeatures')
        .then((res)=>{
            console.log("response is ",res);
            dispatch({
                type:ProductfeaturesConstants.PRODUCTFEATURE_FETCH,
                payload:res.data.result,
            })

        }).catch((err)=>{
            console.log("error is ",err);

            dispatch({
                type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING_FAILED,
            })
        })
    }
}

function PostProductfeaturesData(obj){
    return dispatch=>{
        dispatch({
            type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING,
        })
        axios.post('/api/saveproductfeatures',obj)
        .then((res)=>{
            console.log(" save api response is ",res);

            if (res.data.success === true ){
                dispatch({
                    type:ProductfeaturesConstants.PRODUCTFEATURE_ADDED_SUCCESSFULLY,
                    payload:obj,
                })
                window.location.href = "/ProductfeatureList";
            }
            else{
                dispatch({
                    type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING_FAILED,
                    payload:res.data.message,
                })
            }
        })
        .catch((err)=>{
            console.log("error in save api is " ,err);

            dispatch({
                type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING_FAILED,
                payload:err.toString(),
            })
        })
    }
}

function UpdateProductfeatureData(Obj,naviagte){
    return dispatch =>{
dispatch({
    type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING
})

axios.post("/api/updateproductfeatures",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success === false)
    {
        dispatch({
            type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        dispatch({
            type:ProductfeaturesConstants.PRODUCTFEATURE_ADDED_SUCCESSFULLY,
            payload:Obj
        })
        
        naviagte("/ProductfeatureList");
    }
    
    
    }).catch((err)=>{

        console.log('error',err);
        dispatch({
            type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}


function GetProductfeatureById(feature_id){
    return dispatch =>{
        dispatch({
            type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING,

        });
        var obj = {feature_id:feature_id}
        axios.get(`/api/getproductfeaturebyid/${feature_id}`)
        .then((res)=>{
            // 
            console.log(res);

                    var selectedproductfeature = null;
                    //array
                    if(res.data.result.length>0)
                    {
                        var array = res.data.result;
                        selectedproductfeature = array[0];
                    }

                    if (res.data.success === true && selectedproductfeature){
                        dispatch({
                            type:ProductfeaturesConstants.PRODUCTFEATURE_FORM_UPDATE,
                            payload: {prop:'ProductfeatureRecord',value:selectedproductfeature},

                        });
                        dispatch({
                            type:ProductfeaturesConstants.PRODUCTFEATURE_FORM_UPDATE,
                            payload: {prop:'isLoading',value:false},
                        });
                        dispatch({
                            type:ProductfeaturesConstants.PRODUCTFEATURE_FORM_UPDATE,
                            payload: {prop:'size',value:selectedproductfeature.size},
                            });
                        dispatch({
                            type:ProductfeaturesConstants.PRODUCTFEATURE_FORM_UPDATE,
                            payload: {prop:'expiry',value:selectedproductfeature.expiry},
                            }); 
                            
                        dispatch({
                            type:ProductfeaturesConstants.PRODUCTFEATURE_FORM_UPDATE,
                            payload: {prop:'weight',value:selectedproductfeature.weight},
                            });   
                            dispatch({
                                type:ProductfeaturesConstants.PRODUCTFEATURE_FORM_UPDATE,
                                payload: {prop:'quality',value:selectedproductfeature.quality},
                                });   

                    }
                    else{
                        dispatch({
                            type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING_FAILED,
                            payload:res.data.message
                        })
                    }
       
        })
        .catch((err)=>{
                console.log(err);

                dispatch({
                    type:ProductfeaturesConstants.PRODUCT_ADDING_FAILED,
                    payload:err.toString()
                })
        });
    }
}

function DeleteProductfeatureData(Obj){
    return dispatch =>{
dispatch({
    type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING
})

axios.post("/api/deleteproductfeatures",Obj)
    .then((res)=>
    {
    //           
    console.log(res);
    
    if(res.data.success == false)
    {
        dispatch({
            type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        window.location.reload();// = "/featurelist";
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:ProductfeaturesConstants.PRODUCTFEATURE_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}
