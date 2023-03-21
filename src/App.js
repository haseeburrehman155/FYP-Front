import logo from './logo.svg';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Category from './components/Category/CategoryAdd';
import CategoryList from './components/Category/CategoryList';
import CategoryEdit from './components/Category/CategoryEdit';

import ProductMainPage from './components/Product/ProductMainPage';
import ProductList from './components/Product/ProductList';
import ProductEdit from './components/Product/ProductEdit';

import Home from './components/Home/Home';

import Usertype from './components/Usertype/UsertypeAdd';
import UsertypeList from './components/Usertype/UsertypeList';
import UsertypeEdit from './components/Usertype/UsertypeEdit';

import Users from './components/Users/UserAdd';
import UserList from './components/Users/UserList';
import UserEdit from './components/Users/UserEdit';

import ProductfeatureAdd from './components/Productfeatures/ProductfeatureAdd';
import ProductfeatureList from './components/Productfeatures/ProductfeatureList';
import ProductfeatureEdit from './components/Productfeatures/ProductfeatureEdit';


import Imgtry from './components/imgtry';

import Subcategory from './components/Subcategory/SubcategoryAdd';
import SubcategoryList from './components/Subcategory/SubcategoryList';
import SubcategoryEdit from './components/Subcategory/SubcategoryEdit';
import Login from './components/Users/Login';
import history from './history';
import ProductQuickView from './components/Product/ProductQuickView';
import ProductDetail from './components/Common/ProductDetail';
import AboutUs from './components/Home/AboutUs';
import ContactUs from './components/Common/ContactUs';
import ContactUsList from './components/Common/ContactUsList';
import VerifierList from './components/Users/VerifierList';
import MobileMenu from './components/Common/Menu';
import TermAndCondition from './components/Common/TermAndCondition';
import UserVerifierList from './components/Users/UserVerifierList';
import ReportButton from './components/Common/Report';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes >
                <Route path="/"  element={<Home />} />
                <Route path="/Account/Login"  element={<Login />} />
                <Route path="/quickview"  element={<ProductQuickView />} />
                
                <Route path="/CategoryAdd"  element={<Category />} />
                <Route path="/CategoryList"  element={<CategoryList />} />
                <Route path="/CategoryEdit/:id"  element={<CategoryEdit />} />


                <Route path="/ProductAdd"  element={<ProductMainPage />} />
                <Route path="/ProductList"  element={<ProductList />} />
                <Route path="/ProductEdit/:id"  element={<ProductEdit />} />


                <Route path="/ProductfeatureAdd"  element={<ProductfeatureAdd />} />
                <Route path="/ProductfeatureList"  element={<ProductfeatureList />} />
                <Route path="/ProductfeatureEdit/:id"  element={<ProductfeatureEdit />} />
                
                                



                <Route path="/UsertypeAdd"  element={<Usertype />} />
                <Route path="/UsertypeList"  element={<UsertypeList />} />
                <Route path="/UsertypeEdit/:id"  element={<UsertypeEdit />} />


                <Route path="/UserAdd"  element={<Users />} />
                <Route path="/UserList"  element={<UserList />} />
                <Route path="/UserEdit/:id"  element={<UserEdit />} />

                <Route path="/Imgtry"  element={<Imgtry /> } />

                <Route path="/SubcategoryAdd"  element={<Subcategory/>} />
                <Route path="/SubcategoryList"  element={<SubcategoryList/>} />
                <Route path="/SubcategoryEdit/:id"  element={<SubcategoryEdit />} />


                <Route path="/productdetail/:id"  element={<ProductDetail />} />


                <Route path="/AboutUs"  element={<AboutUs />} />
                <Route path="/VerifierList"  element={<VerifierList />} />
                <Route path="/UserVerifierList"  element={<UserVerifierList />} />

                <Route path="/ContactUs"  element={<ContactUs />} />
                <Route path="/ContactUsList"  element={<ContactUsList />} />
                <Route path="/TermAndCondition"  element={<TermAndCondition />} />
                <Route path="/TermAndCondition"  element={<TermAndCondition />} />
                {/* <Route path="/ReportButton"  element={<ReportButton />} /> */}

          </Routes>
    </BrowserRouter>
    {/* {CategoryMainpage()} */}
    

  
    </div>
  );
}

export default App;
