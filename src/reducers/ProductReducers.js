import { ProductConstants } from "./Constants/ProductConstants"



const INITIAL_STATE={product_name:'',price:'',manufacture:'',size:'',weight:'',expiry:'',quality:'',
description:'',phone:'',color:'',city:'',category_id:'',subcategory_id:'0',isLoading:false,
error:'',dataAdded:false,productArr:[],productrecord:null,catrecord:null,base64Arr:[],
relatedproduct:[],productsCount:0,verified:false}


export function ProductReducer(state=INITIAL_STATE,action){
    switch(action.type){

    case ProductConstants.PRODUCT_FORM_UPDATED:
        return{
            ...state,
            [action.payload.prop]:action.payload.value
        } 


    case ProductConstants.PRODUCT_ADDING:
        return{
            ...state,isLoading:true,dataAdded:false,
        }

        case ProductConstants.PRODUCT_FETCHED:
            return{
                ...state,isLoading:false,
                productArr:action.payload
            }

    case ProductConstants.PRODUCT_ADDED_SUCCESSFULLY:
        return{
            ...state, isLoading:false,dataAdded:true,
            error:''
        } 
        
     case ProductConstants.PRODUCT_ADDING_FAILED:
        return{
            ...state,isLoading:false,error:action.payload
        } 

        
        
        
   }
   return  state;
}