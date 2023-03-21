import { CategoryConstant } from "./Constants/CategoryConstants"

const INITIAL_STATE={category_name:'',isLoading:false,error:'',categoryimage:'',
dataAdded:false,categoryArr:[],categoryimage:'',categoryrecord:null}


export function CategoryReducer(state=INITIAL_STATE,action){
    switch(action.type){

    case CategoryConstant.CATEGORY_UPDATED:
        return{
            ...state,
            [action.payload.prop]:action.payload.value,
        } 


    case CategoryConstant.CATEGORY_ADDING:
        return{
            ...state,
            isLoading:true,
            dataAdded:false,
        }

        case CategoryConstant.CATEGORY_FETCHED:
            return{
                ...state,isLoading:false,
                categoryArr:action.payload,
            }

    case CategoryConstant.CATEGORY_ADDED_SUCCESSFULLY:
        return{
            ...state, 
            isLoading:false,
            dataAdded:true,
            error:'',
        } 
        
     case CategoryConstant.CATEGORY_ADDING_FAILED:
        return{
            ...state,
            isLoading:false,
            error:action.payload
        } 
        
   }
   return state;

}