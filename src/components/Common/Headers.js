import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";

function Headers(user){

    const user_type_name = user ? user.user_type_name: "";
  
    const urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get('pageNo');
    var url = `${window.location.origin}?pageNo=${1}`;
    let userMem = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : null;
    
    
    function RenderProductsMenu(){
              return !userMem ? <div/> : userMem && userMem.user_type_name== "Admin"   ?  
              <li  className={window.location.pathname == "/CategoryList"? "active" : null} >
                                      <Link to="/ProductList" >
                                             Products
                                      </Link>
                                            <ul>
                                                <li>
                                                <Link to="/CategoryList" >
                                                        Categories
                                                </Link>
                                                    <ul>
                                                        <li>
                                                        <Link to="/SubcategoryList">
                                                            SubCategories
                                                            </Link>
    
                                                        </li>
                                                    </ul>
                                                    </li>
                                            </ul>
                                  </li>: 
                                    !userMem ? <div/> : userMem && userMem.user_type_name== "User"   ? 
                                    ''
                                    :
                                  
                  <li  className={window.location.pathname == "/CategoryList"? "active" : null} >
    
                        <Link to="/ProductList" >
                                Products
                        </Link>
                            
                    </li>
                    
    
    }
    
    function RenderUser(){
        return  !userMem ? <div/> : userMem && userMem.user_type_name== "Admin"   ?  
        
        <li  className={window.location.pathname == "/UserList"? "active" : null} >
                   <Link to="/UserList" >
                          Users
                   </Link>
                         <ul>
                         <li>
                             <Link to="/VerifierList" >
                                     Verifier Request
                             </Link>
                         </li>
                             <li>
                             <Link to="/UserTypeList" >
                                     UserType
                             </Link>
                                 
                                 </li>
                         </ul>
                   
               </li>:
               
               
               
    <div/>
    
    }

function SearchProduct(e){
}

return (
    <header className="header">
    <div className="header-top">
        <div className="container">
            <div className="header-left">
                <p className="welcome-msg">Welcome to OrderBridge message or remove it!</p>
            </div>
            <div className="header-right">
               
                {/* <!-- End DropDown Menu --> */}
                <span className="divider"></span>
                <a href="/ContactUs" className="contact d-lg-show"><i className="d-icon-map"></i>Contact</a>
                <a href="#" className="help d-lg-show"><i className="d-icon-info"></i> Need Help</a>

                {
                !userMem ?
                <Link className="login-link" to="/account/login" data-toggle="login-modal"><i
                        className="d-icon-user"></i>Sign in</Link>
                        :
                        <i onClick={()=> 
                            {
                                localStorage.removeItem("users");
                                window.location.reload();
                            }
                        } className="fa fa-power-off login-link"></i>
                        }

                <span className="delimiter">/</span>
                <a className="register-link ml-0" href="ajax/login.html" data-toggle="login-modal">Register</a>

                {/* <!-- End of Login --> */}
            </div>
        </div>
    </div>
    {/* <!-- End HeaderTop --> */}
    <div className="header-middle sticky-header fix-top sticky-content">
        <div className="container">
            <div className="header-left">
                <a href="#" className="mobile-menu-toggle">
                    <i className="d-icon-bars2"></i>
                </a>
                <a href="/" className="logo">
                    <img src="/images/logo.png" alt="logo" width="153" height="44" />
                </a>
                {/* <!-- End Logo --> */}

                <div className="header-search hs-simple">
                    <form id='form1' className="input-wrapper">
                        <input id='searchBarH' type="text" className="form-control"  autoComplete="off"
                            placeholder="Search..." onKeyDown={(e)=>
                            {
                              if(e.keyCode ==13){
                              var url2 = url+'&search='+e.target.value;
                              window.location.href = url2;
                              return false;
                              }
                            }
                            }
                             onInput={(e)=> SearchProduct(e)} required />
                        <button onClick={(e,ee)=> {
                            e.preventDefault();
                             var url2 = url+'&search='+document.getElementById('searchBarH').value;
                             window.location.href = url2;
                            return;
                        }} 
                        className="btn btn-search" type="btnclicks">
                            <i className="d-icon-search"></i>
                        </button>
                    </form>
                </div>
                {/* <!-- End Header Search --> */}
            </div>
            <div className="header-right">
                <a href="/ContactUs" className="icon-box icon-box-side">
                    <div className="icon-box-icon mr-0 mr-lg-2">
                        <i className="d-icon-phone"></i>
                    </div>
                    <div className="icon-box-content d-lg-show">
                        <h4 className="icon-box-title">Call Us Now:</h4>
                        <p>03353956155</p>
                    </div>
                </a>
                <span className="divider"></span>
                <div className="dropdown cart-dropdown type2 mr-0 mr-lg-2">
                   
                      <div className='button'>
                        <button className='btn btn-out-line-success'>
                            <Link to='/productadd'>Add Product</Link> 
                            </button>
                      </div>
                   
                    {/* <!-- End Cart Toggle --> */}
                    
                    {/* <!-- End Dropdown Box --> */}
                </div>
                <div className="header-search hs-toggle mobile-search">
                    <a href="" className="search-toggle">
                        <i className="d-icon-search"></i>
                    </a>
                    <form action="#" className="input-wrapper">
                        <input type="text" className="form-control" name="search" autoComplete="off"
                            placeholder="Search your keyword..." required />
                        <button className="btn btn-search" type="submit">
                            <i className="d-icon-search"></i>
                        </button>
                    </form>
                </div>
                {/* <!-- End of Header Search --> */}
            </div>
        </div>

    </div>

    <div className="header-bottom d-lg-show">
        <div className="container">
            <div className="header-left">
                <nav className="main-nav">
                    <ul className="menu">
                        <li className={window.location.pathname == "/"? "active" : null}>
                            <a href="/" >Home</a>
                        </li>
                        
                        {RenderProductsMenu()}


                        {RenderUser()}
                        {
                            !userMem ? <div/> : userMem && userMem.user_type_name== "Admin"   ?  
                            <li>
                              <Link to="/ContactUsList">
                                 Contact List
                                 </Link>
                            </li>
                            :
                            <div/>
                        }
                        
                        <li className={window.location.pathname == "/AboutUs"? "active" : null}>
                        <a href="/AboutUs">About Us</a>
                        </li>
                        <li className={window.location.pathname == "/ContactUs"? "active" : null}>
                        <a href="/ContactUs">Contact Us</a>
                        </li>
                        <li className={window.location.pathname == "/ContactUs"? "active" : null}>
                        <a href="/UserVerifierList">UserVerifier List</a>
                        </li>
                        <li className={window.location.pathname == "/TermAndCondition"? "active" : null}>
                        <a href="/TermAndCondition">Term And Conditions</a>
                        </li>
                    </ul>
                </nav>
            </div>

        

        </div>
    </div>
</header>
)

}

export default Headers;