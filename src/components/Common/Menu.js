import { Link } from "react-router-dom";



function MobileMenu(){

    
  
const urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('pageNo');
var url = `${window.location.origin}?pageNo=${1}`;
let userMem = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : null;


function RenderProductsMenu(){
          return !userMem ? <div/> : userMem && userMem.user_type_name== "Admin"   ?  
          <li  className={window.location.pathname == "/CategoryList"? "active" : null} >
                                  <a href="/ProductList" >
                                         Products
                                  </a>
                                        <ul>
                                            <li>
                                            <a href="/CategoryList" >
                                                    Categories
                                            </a>
                                                <ul>
                                                    <li>
                                                    <a href="/SubcategoryList">
                                                        SubCategories
                                                        </a>

                                                    </li>
                                                </ul>
                                                </li>
                                        </ul>
                              </li>: 
                                !userMem ? <div/> : userMem && userMem.user_type_name== "User"   ? 
                                ''
                                :
                              
              <li  className={window.location.pathname == "/CategoryList"? "active" : null} >

                    <a href="/ProductList" >
                            Products
                    </a>
                        
                </li>
                
}

function RenderUser(){
    return  !userMem ? <div/> : userMem && userMem.user_type_name== "Admin"   ?  
    
    <li  className={window.location.pathname == "/UserList"? "active" : null} >
               <a href="/UserList" >
                      Users
               </a>
                     <ul>
                     <li>
                         <a href="/VerifierList" >
                                 Verifier Request
                         </a>
                     </li>
                         <li>
                         <a href="/UserTypeList" >
                                 UserType
                         </a>
                             
                             </li>
                     </ul>
               
           </li>:
           
           
           
<div/>

}




  return <div className="mobile-menu-wrapper">
  <div className="mobile-menu-overlay">
  </div>
  {/* <!-- End Overlay --> */}
  <a className="mobile-menu-close" href=""><i className="d-icon-times"></i></a>
  {/* <!-- End CloseButton --> */}
  <div className="mobile-menu-container scrollable">
      <form action="#" className="input-wrapper">
          <input type="text" className="form-control" name="search" autoComplete="off"
              placeholder="Search your keyword..." required />
          <button className="btn btn-search" type="submit">
              <i className="d-icon-search"></i>
          </button>
      </form>
      {/* <!-- End Search Form --> */}
      <ul className="mobile-menu mmenu-anim">
                        <li className={window.location.pathname == "/"? "active" : null}>
                            <a href="/" >Home</a>
                        </li>
                        
                        {RenderProductsMenu()}

                        <li className={window.location.pathname == "/AboutUs"? "active" : null}>
                        <a href="/AboutUs">About Us</a>
                        </li>
                        <li className={window.location.pathname == "/ContactUs"? "active" : null}>
                        <a href="/ContactUs">Contact Us</a>
                        </li>
                        <li className={window.location.pathname == "/ContactUs"? "active" : null}>
                        <a href="/UserVerifierList">UserVerifier List</a>
                        </li>
                        <li className={window.location.pathname == "/ContactUs"? "active" : null}>
                        <a href="/TermAndCondition">Term And Condition</a>
                        </li>
                       

                        {RenderUser()}
                        {
                            !userMem ? <div/> : userMem && userMem.user_type_name== "Admin"   ?  
                            <li>
                              <a href="/ContactUsList">
                                 Contact List
                                 </a>
                            </li>
                            :
                            <div/>
                        }
                    
          
      </ul>
      {/* <!-- End MobileMenu --> */}
  </div>
</div>
}

export default MobileMenu;