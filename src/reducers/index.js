import { combineReducers } from 'redux';

import { CategoryReducer } from './CategoryReducers';

import { ContactUsReducers } from './ContactUsReducers';

import ProductfeatureReducer from './ProductfeaturesReducers';

import { ProductReducer } from './ProductReducers';

import {SubcategoryReducer} from './SubcategoryReducers';

import { UsersReducers } from './UsersReducers';

import { UsertypeReducers } from './UsertypeReducers';




 const globalreducer= combineReducers({
  
   category:CategoryReducer,
   
   subcategory:SubcategoryReducer,

   product:ProductReducer,

   usertype:UsertypeReducers,

   users:UsersReducers,

   pfeatures:ProductfeatureReducer,

   contactus:ContactUsReducers,

 });

 export default globalreducer;