import axios from 'axios';
import { ProductConstants } from '../reducers/Constants';
import { CategoryConstant } from '../reducers/Constants/CategoryConstants';
import { ProductfeaturesConstants } from '../reducers/Constants/ProductfeaturesConstants';
import { SubcategoryConstants } from '../reducers/Constants/SubcategoryConstants';


export const HomeAction={
    GetHomeData
};


function GetHomeData(urlParams){
    //page no params
    var myParam = urlParams.get('pageNo');
    var myParam2 = !urlParams.get('search') ? '' : urlParams.get('search');
    var pageNo = myParam && !isNaN(myParam)? myParam : 1;


    return dispatch =>{
        dispatch({
            type:CategoryConstant.CATEGORY_ADDING,

        })
        // 
        axios.get(`/api/getHomeData/{"pageNo":${pageNo}, "search":"${myParam2}"}`)
        .then((res)=>{
            debugger; 
            console.log(res);

                dispatch({
                    type:CategoryConstant.CATEGORY_FETCHED,
                    payload: res.data.result
                });
                dispatch({
                    type:SubcategoryConstants.SUBCATEGORY_FETCHED,
                    payload: res.data.result2
                })

                dispatch({
                    type:ProductConstants.PRODUCT_FETCHED,
                     payload: res.data.result3
                });
                dispatch({
                    type:ProductfeaturesConstants.PRODUCTFEATURE_FETCH,
                     payload: res.data.result5
                });
                
                dispatch({
                    type:ProductConstants.PRODUCT_FORM_UPDATED,
                     payload: {prop:'productsCount',value:res.data.result4[0] ? res.data.result4[0].count : 0}
                });
                
                localStorage.setItem("category",JSON.stringify(res.data.result));  
                localStorage.setItem("subcategory",JSON.stringify(res.data.result2));  
      
        })
        .catch((err)=>{
            console.log(err);

            dispatch({
                type:CategoryConstant.CATEGORY_ADDING_FAILED,
            })
        });
    }
}