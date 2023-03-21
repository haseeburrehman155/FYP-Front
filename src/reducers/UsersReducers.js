import { UsersConstants } from "./Constants";



const INITIAL_STATE= {active:0,full_name:'',user_address:'',city:'',user_name:'',user_phone:'',user_email:'',user_type_id:'',password:'',
isLoading:false,error:'',UserArr:[],UserRecord:null,dataAdded:false,category_id:''};

export function UsersReducers(state=INITIAL_STATE,action){
    switch(action.type){

        case UsersConstants.USER_FORM_UPDATE:
            return{
                ...state,
                [action.payload.prop]:action.payload.value,
            }

        case UsersConstants.USER_ADDING:
            return{
                ...state,
                isLoading:true,
                dataAdded:false
            }
        case UsersConstants.USER_FETCH:
            return {
                ...state,
                isLoading:false,
                UserArr:action.payload,
                
            }    
        case UsersConstants.USER_ADDED_SUCCESSFULLY:
            return {
                ...state,
                isLoading:false,
                dataAdded:true,
                error:'',
            }   
            
        case UsersConstants.USER_ADDING_FAILED:
            return{
                ...state,
                isLoading:true,
                error:action.payload,
            }


    }
    return state;
   
}
