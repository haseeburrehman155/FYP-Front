import '../../App.css';
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { CategoryAction } from '../../actions/CategoryAction';
import { useState } from "react";
import Sidebar from '../Sidebar';
import Headers from '../Common/Headers';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from '../Common/Menu';




function Category(){
       

    const dispatch=useDispatch();
    var navigate=useNavigate();

    const [categoryimage,setcategoryimage] = useState('');
     
    const handlechange=(e)=>{
        console.log(e.target.files);
        // 
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
          }
          getBase64(img.data, (result) => {
               img.base64 = result;
               var image = document.getElementById('image'+e.target.name);
               image.src= result;
               setcategoryimage(result);
          });
       
        }

        function getBase64(file, cb) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                cb(reader.result)
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
        

        const categorydata=useSelector(state=>state.category);

        const {category_name,isLoading ,error,dataAdded} =categorydata;

        //user reducer
        const userdata=useSelector(state=>state.users);
        const {UserRecord} =userdata;


    function RenderButton(){
     return  isLoading ?
        <div class="spinner-border text-danger" role="status">
        </div>
        :
       <button type="button" onClick={ButtonClicked}
         className="btn btn-out-line-success">
            Add
        </button>
    }

    function ButtonClicked(){
        var values ={category_name,categoryimage}
// 
        if (!category_name && !categoryimage){
            alert ("please fill the form ")
        }else {
            dispatch(CategoryAction.PostCategoryData(values,navigate));
            console.log("data add ho gaya ");
        }
    }
    

return  <main className="main">
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
           <div className="col-lg-12 col-xxl-content" 
           style={{paddingBottom:"50px",paddingTop:"50px"}}>
               <div className="page-content ">
               <div className="row">
                    <div className="col-md-6 col-12 mx-auto">
                        {/* <form action='/contact' method='POST'> */}
                        <form>
                            <div className="form-group">
                                <label >Category</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add Category" name="Category" style={{marginTop: '1.5em'}}
                                 value={category_name} 
                                 onChange={(text)=>
                                     dispatch(
                                        CategoryAction.formupdate('category_name',text.target.value))}
                                 ></input>

                            </div>
                         
                <div className='form-group' style={{marginTop:'1rem'}}>
                {
               <img id={"image"} src={require('../../images/un.png')} style={{height:"150px",width:"40%"}}  />
               }
               <br/>
                <input type="file"   onChange={handlechange}
                 style={{marginTop: '1.5em',marginBottom:'1.5rem'}} />
                </div>
                
                            {RenderButton()}

<div className='row mt-3'>
{dataAdded ?  <span className='alert'>Category added succcessfully</span> : 

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
                
        

}


export default Category;