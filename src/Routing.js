import * as React from 'react';

export const navigationRef  =  React.createRef();

export function Navigate(name, params){
    navigationRef.current?.navigate(name,params)
}