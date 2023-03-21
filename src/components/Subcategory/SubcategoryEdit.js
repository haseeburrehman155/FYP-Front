import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { SubcategoryAction } from '../../actions/SubcategoryAction';
import Sidebar from '../Sidebar';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';


function SubcategoryEdit(){
    var dispatch = useDispatch();
    const {id} = useParams();
    var navigate=useNavigate();

    var subcategorydata= useSelector(state=> state.subcategory);

    const {subcategory_name,isLoading ,error,dataAdded,SubcategoryRecord,categoryIds} =subcategorydata;
    
    // category reducer
    var categorydata = useSelector(state=> state.category);
    const {categoryArr} = categorydata;

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
        var values ={subcategory_name ,subcategory_id:id}

        if (!subcategory_name){
            alert ("please fill the form ")
        }else {
            dispatch(SubcategoryAction.UpdateSubcategoryData(values,navigate));
            console.log("data add ho gaya ");
        }
    }
   

    React.useEffect(()=>{
     
      dispatch(SubcategoryAction.GetSubcategoryById(id))
      },[]);





    return (  
        <main className="main">
        {Headers()}
       
        <section>
               <div className="row gutter-no">
                   <div className="col-lg-12 col-xxl-content">
                       <div className="page-content ">
                       <div className="row">
                    <div className="col-md-6 col-12 mx-auto">
                        <form>
                            <div className="form-group">
                                <label style={{marginTop: '1em',fontWeight:'bold'}}>Update Subcategory_Name</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Update Subcategory_Name" name="Subcategory" style={{marginTop: '1em'}}
                                 value={subcategory_name} 
                                 onChange={(text)=>
                                     dispatch(
                                        SubcategoryAction.SubcategoryUpdate('subcategory_name',text.target.value))}
                                 ></input>

                            </div>


                            <div className="form-group" style={{marginTop: '1.5em',fontWeight:'bold'}}>
                                <label >Category</label>
                           <select className='form-control'
                           defaultValue={categoryIds}
                             onChange={(text)=>
                                dispatch(
                                   SubcategoryAction.SubcategoryUpdate('category_id',text.target.value))} >
                            <option value={""}>Select Category</option>
                            {categoryArr.map((el,index)=>
                                 <option key={index} value={el.category_id}>{el.category_name}</option>
                                
                                )}
                           </select>
                            </div>


                            {RenderButton()}
                            
                            <div className='row mt-3'>
{dataAdded ?  <span className='alert'>SubCategory Update succcessfully</span> : 

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
                      <footer className="footer pl-4 pl-sm-6 pl-lg-8 pr-4 pr-sm-6 pr-lg-8 mt-30">
                           <div className="footer-middle">
                               <div className="row gutter-lg">
                                   <div className="col-lg-9">
                                       <div className="widget widget-newsletter">
                                           <div className="newsletter-info">
                                               <h3 className="widget-title">Get special offers and savings</h3>
                                               <p>Get all the latest information on Events, Sales and Offers.</p>
                                           </div>
                                           <form action="#"
                                               className="input-wrapper input-wrapper-inline input-wrapper-round">
                                               <input type="email" className="form-control" name="email" id="email"
                                                   placeholder="Email address here..." required />
                                               <button className="btn btn-primary" type="submit">Sign up</button>
                                           </form>
                                       </div>
                                       {/* <!-- End Newsletter --> */}
                                       <div className="row gutter-lg">
                                           <div className="col-lg-6">
                                               <div className="widget mb-6">
                                                   <h4 className="widget-title">Customer Service</h4>
                                                   <ul className="widget-body">
                                                       <li>
                                                           <a href="about-us.html">About us</a>
                                                       </li>
                                                       <li>
                                                           <a href="contact-us.html">Contact us</a>
                                                       </li>
                                                       <li>
                                                           <a href="#">My Account</a>
                                                       </li>
                                                       <li>
                                                           <a href="#">Order history</a>
                                                       </li>
                                                       <li>
                                                           <a href="#">Advabced search</a>
                                                       </li>
                                                       <li>
                                                           <a href="login.html">Login</a>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                           <div className="col-lg-6">
                                               <div className="widget widget-about">
                                                   <h4 className="widget-title">About Us</h4>
                                                   <ul className="widget-body">
                                                       <li>
                                                           <a href="#">Super Fast Wordpress Theme</a>
                                                       </li>
                                                       <li>
                                                           <a href="#">1st Fully Working Ajax Theme</a>
                                                       </li>
                                                       <li>
                                                           <a href="#">33 Unique Shop Layouts</a>
                                                       </li>
                                                       <li>
                                                           <a href="#">Powerful Admin Panel</a>
                                                       </li>
                                                       <li>
                                                           <a href="#">Mobile And Retina Optimized</a>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col-lg-3 order-lg-first">
                                       <div className="widget widget-contact">
                                           <h4 className="widget-title">Contact Info</h4>
                                           <ul className="widget-body">
                                               <li>
                                                   <label>Address:</label>
                                                   <a href="#">123 Street Name, City, England</a>
                                               </li>
                                               <li>
                                                   <label>Phone:</label>
                                                   <a href="tel:#">(123) 456-7890</a>
                                               </li>
                                               <li>
                                                   <label>Email:</label>
                                                   <a href="mailto:mail@riode.com">mail@example.com</a>
                                               </li>
                                               <li>
                                                   <label>WORKING DAYS / HOURS:</label>
                                                   <a href="#">Mon - Sun / 9:00 AM - 8:00 PM</a>
                                               </li>
                                           </ul>
                                       </div>
                                       {/* <!-- End Widget --> */}
                                   </div>
                               </div>
                           </div>
                           {/* <!-- End FooterMiddle --> */}
                           <div className="footer-bottom d-block text-center">
                               <p className="copyright">Riode eCommerce &copy; 2021. All Rights Reserved</p>
                           </div>
                           {/* <!-- End FooterBottom --> */}
                       </footer>
                       {/* <!-- End Footer --> */}
                       {MobileMenu()}
      </main>
   
              
       
    )
}

export default SubcategoryEdit;