import { ProductfeaturesConstants } from "./Constants/ProductfeaturesConstants";


const INITIAL_STATE= {size:'',expiry:'',weight:'',quality:'',isLoading:false,error:'',
ProductfeatureArr:[],ProductfeatureRecord:null,dataAdded:false}

function ProductfeatureReducer(state=INITIAL_STATE,action){
    
    switch(action.type){

        case ProductfeaturesConstants.PRODUCTFEATURE_FORM_UPDATE:
            return{
                ...state,
                [action.payload.prop]:action.payload.value,
            } 

        case ProductfeaturesConstants.PRODUCTFEATURE_ADDING:
            return {
                ...state,
                isLoading:true,
                dataAdded:false,
            }

        case ProductfeaturesConstants.PRODUCTFEATURE_FETCH:
            return {
                ...state,
                isLoading:false,
                ProductfeatureArr:action.payload,
            }   

        case ProductfeaturesConstants.PRODUCTFEATURE_ADDED_SUCCESSFULLY:
            return {
                ...state,
                isLoading:false,
                dataAdded:true,
                error:'',
            }     
         
        case ProductfeaturesConstants.PRODUCTFEATURE_ADDING_FAILED:
            return{
                ...state,
                isLoading:false,
                error:action.payload,
            }    
    }

    return state
}

export default ProductfeatureReducer;