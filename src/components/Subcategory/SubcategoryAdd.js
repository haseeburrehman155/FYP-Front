import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useState } from "react";
import { SubcategoryAction } from '../../actions/SubcategoryAction';
import Sidebar from '../Sidebar';
import Headers from '../Common/Headers';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from '../Common/Menu';

function Subcategory(){

      const dispatch=useDispatch();
    var navigate=useNavigate();


    const subcategorydata=useSelector(state=>state.subcategory);
    const {subcategory_name,categoryIds,isLoading ,error,dataAdded} =subcategorydata;

    // addd category reducer

    var categorydata = useSelector(state=> state.category);
    const {categoryArr} = categorydata;


    function RenderButton(){
        return  isLoading ?
           <div className="spinner-border text-danger" role="status">
           </div>
           :
          <button type="button" onClick={ButtonClicked} style={{marginTop:'1rem'}}
            className="btn btn-out-line-success">
               Add
           </button>
       }
   
       function ButtonClicked(){
           var values ={subcategory_name,categoryIds}
                   // 
           if (!subcategory_name && !categoryIds){
               alert ("please fill the form ")
           }else {
               dispatch(SubcategoryAction.PostSubcategoryData(values,navigate));
               console.log("data add ho gaya ");
           }
       }

           

return (
    <main className="main">
{Headers()}
<div className="page-header"
                            style={{
                                backgroundImage: require('../../images/shop/page-header-back.jpg'),
                                backgroundColor: '#3C63A4'}}>
                           
                            <ul className="breadcrumb">
                                <li><Link to="/"><i className="d-icon-home"></i></Link></li>
                                <li className="delimiter">/</li>
                                <li><Link to="/SubcategoryList">SubCategory-List</Link></li>
                                <li className="delimiter">/</li>
                            </ul>
                        </div>

<section>
       <div className="row gutter-no">
           <div className="col-lg-12 col-xxl-content">
               <div className="page-content ">
               <div className="row">
        <div className="col-md-6 col-12 mx-auto">
            {/* <form action='/contact' method='POST'> */}
            <form style={{marginTop:"2rem"}}>
                <div className="form-group">
                    <label >SubCategory</label>
                    <input type="text"
                     className="form-control" id="exampleInputPassowrd1" 
                     placeholder="Add Subcategory" name="Category" style={{marginTop: '1em'}}
                     value={subcategory_name} 
                     onChange={(text)=>
                         dispatch(
                            SubcategoryAction.SubcategoryUpdate('subcategory_name',text.target.value))}
                     ></input>

                </div>

                <div className="form-group" style={{marginTop: '1.5em'}}>
                                <label >Category</label>
                           <select className='form-control'
                             onChange={(text)=>
                                dispatch(
                                   SubcategoryAction.SubcategoryUpdate('categoryIds',text.target.value))} >
                            <option value={""}>Select Category</option>
                            {categoryArr.map((el,index)=>
                                <option key={index} value={el.category_id}>{el.category_name}</option>
                                )}
                           </select>
                            </div>
                




                {RenderButton()}

<div className='row mt-3'>
{dataAdded ?  <span className='alert'>SubCategory added succcessfully</span> : 

(!dataAdded && error ? <span className='alert'>{error}</span> 
:<div/>
)
}
</div>


                        </form>
                    </div>

            </div>
          
            
               </div>
    
           </div>
       </div>
   </section>
              {/* <!-- End recent product --> */}
               {/* <!-- End Footer --> */}
               {MobileMenu()}
</main>

    
     


)}

export default Subcategory;
