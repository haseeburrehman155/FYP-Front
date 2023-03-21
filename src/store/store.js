import { createStore  , applyMiddleware  } from "redux";
import thunkMiddleware from 'redux-thunk';
import globalreducer from "../reducers";


export const store=createStore(
    globalreducer,
    applyMiddleware(thunkMiddleware)
);

