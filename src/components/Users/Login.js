import { useDispatch,useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UsersAction } from "../../actions/UsersAction";

function Login(props){
    const dispatch=useDispatch();
    const navigate = useNavigate();

   function LoginClick(){

    
    dispatch( UsersAction.LoginUser({user_name,password},navigate))
   }


    //users reducer
    const userdata=useSelector(state=>state.users);
    const {user_name,password} =userdata;
   
    return(
        <main className="main">
        <nav className="breadcrumb-nav">
            <div className="container">
                <ul className="breadcrumb">
                    <li><Link to="/"><i className="d-icon-home"></i></Link></li>
                    <li><Link to="/">OrderBridge</Link></li>
                    <li>My Account</li>
                </ul>
            </div>
        </nav>
        <div className="page-content mt-6 pb-2 mb-10">
            <div className="container">
                <div className="login-popup">
                    <div className="form-box">
                        <div className="tab tab-nav-simple tab-nav-boxed form-tab">
                            <ul className="nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5"
                                role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active border-no lh-1 ls-normal" href="#signin">Login</a>
                                </li>
                                {/* <li className="delimiter">or</li>
                                <li className="nav-item">
                                    <a className="nav-link border-no lh-1 ls-normal" href="#register">Register</a>
                                </li> */}
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="signin">
                                    <form action="#">
                                        <div className="form-group mb-3">
                                            <input type="text" className="form-control" 
                                             placeholder="Username or Email Address *"
                                               value={user_name}  required
                                               onChange={(text)=>
                                                dispatch(
                                                    UsersAction.userformupdate('user_name',text.target.value))}
                                                 />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" 
                                               required
                                               placeholder="Password*.."
                                                value={password}  
                                                onChange={(text)=>
                                                dispatch( UsersAction.userformupdate('password',text.target.value))}
                                                />
                                        </div>
                                        <div className="form-footer">
                                            <div className="form-checkbox">
                                                <input type="checkbox" className="custom-checkbox" id="signin-remember"
                                                    name="signin-remember" />
                                                <label className="form-control-label" htmlFor="signin-remember">Remember
                                                    me</label>
                                            </div>
                                            <a href="/" className="lost-link">Sign-up Here?</a>
                                        </div>

                                        <button className="btn btn-dark btn-block btn-rounded"
                                            type="button"
                                            onClick={()=>LoginClick()}
                                            >Login</button>
                                    </form>

                                    <div className="form-choice text-center">
                                        <label className="ls-m">or Login With</label>
                                        <div className="social-links">
                                            <a href="#"
                                                className="social-link social-google fab fa-google border-no"></a>
                                            <a href="#"
                                                className="social-link social-facebook fab fa-facebook-f border-no"></a>
                                            <a href="#"
                                                className="social-link social-twitter fab fa-twitter border-no"></a>
                                        </div>
                                    </div>

                                </div>

                                <div className="tab-pane" id="register">
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="register-email"
                                                name="register-email" placeholder="Your Email address *" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="register-password"
                                                name="register-password" placeholder="Password *" required />
                                        </div>
                                        <div className="form-footer">
                                            <div className="form-checkbox">
                                                <input type="checkbox" className="custom-checkbox" id="register-agree"
                                                    name="register-agree" required />
                                                <label className="form-control-label" htmlFor="register-agree">I agree to
                                                    the privacy policy</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-dark btn-block btn-rounded"
                                            type="submit">Register</button>
                                    </form>
                                    <div className="form-choice text-center">
                                        <label className="ls-m">or Register With</label>
                                        <div className="social-links">
                                            <a href="#"
                                                className="social-link social-google fab fa-google border-no"></a>
                                            <a href="#"
                                                className="social-link social-facebook fab fa-facebook-f border-no"></a>
                                            <a href="#"
                                                className="social-link social-twitter fab fa-twitter border-no"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   
    </main>
    )

}

export default Login;