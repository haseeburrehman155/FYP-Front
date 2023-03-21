// import logo from '../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';

function Navbar(){
return  <div className="container-fluid navbar-style py-3">
<div className="row">
  <div className="col-md-10 col-12 mx-auto">
<nav className="navbar navbar-expand-lg bg-light">
<div className="container-fluid">
  <a className="navbar-brand" id="logo" href="#">Cheebo</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
    <ul className="navbar-nav ml-auto" id="navbarleft" >
      <li className="nav-item active">
        <Link to="/" className="nav-link">
                            Home
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/CategoryList" className={"nav-link"}>
        Categories
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/SubcategoryAdd" className={"nav-link"}>
        SubCategories
        </Link>
      </li>
     
      <li className="nav-item">
        <Link to="/ProductList" className={"nav-link"}>
                            Products
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/ProductfeatureList" className={"nav-link"}>
                            Productfeatures
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/UsertypeList" className={"nav-link"}>
                            Usertype
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/UserList" className={"nav-link"}>
                            Users
        </Link>
      </li>
      
    </ul>
  </div>
</div>
</nav>
  </div>

</div>
</div>

}

export default Navbar;
