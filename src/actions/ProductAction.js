import axios from 'axios';
import { ProductConstants } from '../reducers/Constants/ProductConstants';




export const ProductAction={
    formupdate, 
    GetProduct,
    PostProductData,
    GetProductById,
    UpdateProductData,
    DeleteProductData,
    GetfilterProduct
}


function formupdate(prop,value){
    // 
    return dispatch=>{
        dispatch({
            type:ProductConstants.PRODUCT_FORM_UPDATED,
            payload:{prop,value}
        })
    }
}

function GetProduct(){
    return dispatch =>{
        dispatch({
            type:ProductConstants.PRODUCT_ADDING,
        })
        axios.get('/api/getproduct')
        .then((res)=>{
            console.log(res);

        dispatch({
            type:ProductConstants.PRODUCT_FETCHED,
             payload: res.data.result
        })
        })
        .catch((err)=>{
            console.log(err);

            dispatch({
                type:ProductConstants.PRODUCT_ADDING_FAILED,
            })
        });
    }
}

function GetfilterProduct(filter){
    return dispatch =>{
        dispatch({
            type:ProductConstants.PRODUCT_ADDING,
        })
        axios.post('/api/getFilteredproduct',{filter:filter})
        .then((res)=>{
            console.log(res);

        dispatch({
            type:ProductConstants.PRODUCT_FETCHED,
             payload: res.data.result
        })
        })
        .catch((err)=>{
            console.log(err);

            dispatch({
                type:ProductConstants.PRODUCT_ADDING_FAILED,
            })
        });
    }
}


function PostProductData(Obj,navigate){
    return dispatch =>{
        dispatch({
            type:ProductConstants.PRODUCT_ADDING
        })

    axios.post("/api/saveproduct",Obj)
        .then((res)=>
    {
    console.log(res);
    
    if(res.data.success === false)
    {
        dispatch({
            type:ProductConstants.PRODUCT_ADDING_FAILED,
            payload: res.data.message
        })
    }else
    {
        dispatch({
            type:ProductConstants.PRODUCT_ADDED_SUCCESSFULLY,
            payload:Obj
        })
        
        navigate("/");
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:ProductConstants.PRODUCT_ADDING_FAILED,
            payload: err.toString()
        })
    });
  }
}

function UpdateProductData(Obj,navigate){
    return dispatch =>{
    dispatch({
        type:ProductConstants.PRODUCT_ADDING
    })

    axios.post("/api/updateproduct",Obj)
        .then((res)=>
        {
        //           
        console.log(res);
        
    if(res.data.success === false)
    {
        dispatch({
            type:ProductConstants.PRODUCT_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        dispatch({
            type:ProductConstants.PRODUCT_ADDED_SUCCESSFULLY,
            payload:Obj
        })
        
        navigate("/ProductList");
        
    }
    
    
    }).catch((err)=>{
        // 
        console.log('error',err);
        dispatch({
            type:ProductConstants.PRODUCT_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}


function GetProductById(product_id){
    return dispatch =>{
        dispatch({
            type:ProductConstants.PRODUCT_ADDING,
        });
        var obj = {product_id:product_id}
        axios.get(`/api/getproductbyid/${product_id}`)
        .then((res)=>{
            // 
            console.log(res);

                    var selectedproduct = null;
                    var selectcate = null;
                    var selectrelatedproduct=[];

                    //array
                    if(res.data.result.length>0 && res.data.cresult.length>0 
                        && res.data.relatedresult.length>0)
                    {
                        var array = res.data.result;
                        selectedproduct = array[0];

                        var cquery=res.data.cresult;
                        selectcate=cquery[0];

                        var relatedarray=res.data.relatedresult;
                        selectrelatedproduct=relatedarray;
                        
                    }

                    

                    
                    if (res.data.success === true && selectedproduct && selectcate 
                        && selectrelatedproduct){
                        dispatch({
                            type:ProductConstants.PRODUCT_FORM_UPDATED,
                            payload: {prop:'productrecord',value:selectedproduct},

                        });
                        dispatch({
                            type:ProductConstants.PRODUCT_FORM_UPDATED,
                            payload: {prop:'catrecord',value:selectcate},

                        });
                        dispatch({
                            type:ProductConstants.PRODUCT_FORM_UPDATED,
                            payload: {prop:'relatedproduct',value:selectrelatedproduct},

                        });
                    
                        dispatch({
                            type:ProductConstants.PRODUCT_FORM_UPDATED,
                            payload: {prop:'isLoading',value:false},
                        });
                        dispatch({
                            type:ProductConstants.PRODUCT_FORM_UPDATED,
                            payload: {prop:'product_name',value:selectedproduct.product_name},
                            });
                        dispatch({
                            type:ProductConstants.PRODUCT_FORM_UPDATED,
                            payload: {prop:'price',value:selectedproduct.price},
                            }); 
                            
                        dispatch({
                            type:ProductConstants.PRODUCT_FORM_UPDATED,
                            payload: {prop:'manufacture',value:selectedproduct.manufacture},
                            }); 
                        dispatch({
                            type:ProductConstants.PRODUCT_FORM_UPDATED,
                            payload: {prop:'category_id',value:selectedproduct.category_id},
                            }); 
                            dispatch({
                                type:ProductConstants.PRODUCT_FORM_UPDATED,
                                payload: {prop:'verified',value:selectedproduct.verified},
                                });
                                
                    if(res.data.imageresult.length>0)
                    {
                        var array2 = res.data.imageresult;
                        dispatch({
                                type:ProductConstants.PRODUCT_FORM_UPDATED,
                                payload: {prop:'base64Arr',value:res.data.imageresult},
                                }); 
                    }

                    }
                    else{
                        dispatch({
                            type:ProductConstants.PRODUCT_ADDING_FAILED,
                            payload:res.data.message
                        })
                    }
       
        })
        .catch((err)=>{
                console.log(err);

                dispatch({
                    type:ProductConstants.PRODUCT_ADDING_FAILED,
                    payload:err.toString()
                })
        });
    }
}


function DeleteProductData(Obj){
    return dispatch =>{
dispatch({
    type:ProductConstants.PRODUCT_ADDING
})

axios.post("/api/deleteproduct",Obj)
    .then((res)=>
    {
    console.log(res);
    
    if(res.data.success === false)
    {
        dispatch({
            type:ProductConstants.PRODUCT_ADDING_FAILED,
            payload:res.data.message
        })
    }else
    {
        window.location.reload();// = "/Productlist";
    }
    
    
    }).catch((err)=>{
        console.log('error',err);
        dispatch({
            type:ProductConstants.PRODUCT_ADDING_FAILED,
            payload:err.toString()
        })
    });
  }
}
