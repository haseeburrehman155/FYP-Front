import { ContactUsConstants } from "./Constants";

const INITIAL_STATE={name:'',ContactArr:[],isLoading:false,error:'',contactemail:'',
dataAdded:false,message:'',ContactRecored:null};

export function ContactUsReducers(state=INITIAL_STATE,action){
    switch(action.type){

    case ContactUsConstants.CONTACTUS_FORM_UPDATED:
        return{
            ...state,
            [action.payload.prop]:action.payload.value,
        } 


    case ContactUsConstants.CONTACTUS_ADDING:
        return{
            ...state,
            isLoading:true,
            dataAdded:false,
        }

        case ContactUsConstants.CONTACTUS_FETCHED:
            return{
                ...state,
                isLoading:false,
                ContactArr:action.payload,
            }

    case ContactUsConstants.CONTACTUS_ADDED_SUCCESSFULLY:
        return{
            ...state, 
            isLoading:false,
            dataAdded:true,
            error:'',
        } 
        
     case ContactUsConstants.CONTACTUS_ADDING_FAILED:
        return{
            ...state,
            isLoading:false,
            error:action.payload
        } 
        
   }
   return state;

}