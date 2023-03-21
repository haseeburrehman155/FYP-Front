import { SubcategoryConstants } from "./Constants/SubcategoryConstants";


const INITIAL_STATE={subcategory_name:'',categoryIds:'',isLoading:false,error:'',dataAdded:false,
subcategoryArr:[],SubcategoryRecord:null}



export function  SubcategoryReducer(state=INITIAL_STATE,action){

    switch(action.type){
        case SubcategoryConstants.SUBCATEGORY_ADDING:
            return {
                ...state,
                isLoading:true,
                dataAdded:false,
            }
        case SubcategoryConstants.SUBCATEGORY_ADDED_SUCCESSFULLY:
            return {
                ...state,
                isLoading:false,
                dataAdded:true,
                error:'',
            }    
        case SubcategoryConstants.SUBCATEGORY_FETCHED:
            return{
                ...state,
                subcategoryArr:action.payload,
                isLoading:false,
            }  
            
        case SubcategoryConstants.SUBCATEGORY_UPDATED:
            return {
                ...state,
                [action.payload.prop]:action.payload.value,
            }
        case SubcategoryConstants.SUBCATEGORY_ADDING_FAILED:
            return{
                ...state,
                isLoading:false,
                error:action.payload,
            }    
    }

    return state

}

 