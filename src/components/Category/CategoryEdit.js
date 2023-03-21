import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CategoryAction } from '../../actions/CategoryAction';
import {useSelector,useDispatch} from 'react-redux';
import Sidebar from '../Sidebar';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';


function CategoryEdit(){
    var dispatch = useDispatch();
    const {id} = useParams();
    var navigate=useNavigate();

    var categorydate= useSelector(state=> state.category);

    const {category_name,isLoading ,categoryimage,error,dataAdded,categoryrecord} =categorydate;

    //user reducer
    const userdata=useSelector(state=>state.users);
    const {UserRecord} =userdata;


    function RenderButton(){
     return  isLoading ?
        <div className="spinner-border text-danger" role="status">
        </div>
        :
       <button type="button" onClick={ButtonClicked}
         className="btn btn-out-line-success" style={{marginTop:'1rem'}}>
            Update
        </button>
    }

    function ButtonClicked(){
        var values ={category_name ,categoryimage,category_id:id}

        if (!category_name){
            alert ("please fill the form ")
        }else {
            dispatch(CategoryAction.UpdateCategoryData(values,navigate));
            console.log("data add ho gaya ");
        }
    }



    React.useEffect(()=>{
     
      dispatch(CategoryAction.GetCategoryById(id))
      },[]);





    return (  

        <main className="main">
        {Headers(UserRecord)}
        <div className="page-header"
                            style={{
                                backgroundImage: require('../../images/shop/page-header-back.jpg'),
                                backgroundColor: '#3C63A4'}}>
                           
                            <ul className="breadcrumb">
                                <li><Link to="/"><i className="d-icon-home"></i></Link></li>
                                <li className="delimiter">/</li>
                                <li><Link to="/CategoryList">Category-List</Link></li>
                                <li className="delimiter">/</li>
                            </ul>
                        </div>

       
        <section>
               <div className="row gutter-no">
                   <div className="col-lg-12 col-xxl-content" style={{paddingTop:"50px",paddingButtom:"50px"}}>
                       <div className="page-content ">
                       <div className="row">
                    <div className="col-md-6 col-12 mx-auto">
                        {/* <form action='/contact' method='POST'> */}
                        <form>
                            <div className="form-group">
                                <label style={{marginTop: '1em'}}>Category Name</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Update Category_Name" name="Category" style={{marginTop: '1em'}}
                                 value={category_name} 
                                 onChange={(text)=>
                                     dispatch(
                                        CategoryAction.formupdate('category_name',text.target.value))}
                                 ></input>

                            </div>
                            <div className='form-group' style={{marginTop:'1rem'}}>
                                {
                                    <img id={"image"} src={categoryrecord? categoryrecord.categoryimage:''} style={{height:"150px",width:"40%"}}  />
                                }
                                <br/>
                                    <input type="file"
                                    style={{marginTop: '1.5em',marginBottom:'1.5rem'}} />
                                    </div>
                            
                            {RenderButton()}
                            
                            <div className='row mt-3'>
                            {dataAdded ?  <span className='alert'>Category Update succcessfully</span> : 

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
    )
}

export default CategoryEdit;