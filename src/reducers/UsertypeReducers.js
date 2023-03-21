import { UsertypeConstants } from "./Constants";


 const INITIAL_STATE={user_type_name:'',isLoading:false,error:'',
 usertypeArr:[],UsertypeRecord:null,dataAdded:false};


 export function UsertypeReducers(state=INITIAL_STATE,action){
    switch(action.type){
        case UsertypeConstants.USER_TYPE_UPDATED:
            return {
                ...state,
            [action.payload.prop]:action.payload.value
            }
        case UsertypeConstants.USER_TYPE_ADDING:
            return{ 
                ...state,
                isLoading:true,
                dataAdded:false,

            }   
            case UsertypeConstants.USER_TYPE_FETCH:
                return{
                    ...state,
                    isLoading:false,
                    usertypeArr:action.payload
                } 

        case UsertypeConstants.USER_TYPE_ADDED_SUCCESSFULLY:
            return {
                ...state,
                isLoading:false,
                dataAdded:true,
                error:''
            }    
            
           
        case UsertypeConstants.USER_TYPE_ADDING_FAILED:
            return{
                ...state,
                 isLoading:true,
                error:action.payload 
            }    
   
    }
    return state;
 }