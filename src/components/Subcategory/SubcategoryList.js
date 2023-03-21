import {useSelector,useDispatch} from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencil,faRemove} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { SubcategoryAction } from '../../actions/SubcategoryAction';
import { Link } from 'react-router-dom';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';


function SubcategoryList(){

  var dispatch = useDispatch();


var subcategorydata = useSelector(state=> state.subcategory);
const {subcategoryArr,isLoading,SubcategoryRecord} = subcategorydata;


//user reducer
const userdata=useSelector(state=>state.users);
const {UserRecord} =userdata;

    React.useEffect(()=>{
        
      dispatch(SubcategoryAction.GetSubcategory())
      },[]);

   function OnDeleteClick(id){
    if(window.confirm('Are you sure you want to delete')){
      dispatch(SubcategoryAction.DeleteSubcategoryData({subcategory_id:id}));
    }else{
      alert('Nu ye delete  kawe ')
    }
   }


    return (
      isLoading ? <div className="spinner-border text-danger" role="status">
</div>:
   <main className="main">
   {Headers(UserRecord)}
   <div className="page-header"
                            style={{
                                backgroundImage: require('../../images/shop/page-header-back.jpg'),
                                backgroundColor: '#3C63A4'}}>
                           
                            <ul className="breadcrumb">
                                <li><Link to="/"><i className="d-icon-home"></i></Link></li>
                                <li className="delimiter">/</li>
                                <li><Link to="/SubcategoryList">SubCategories</Link></li>
                                <li className="delimiter">/</li>
                            </ul>
                        </div>
  
   <section>
          <div className="row gutter-no">
              <div className="col-lg-12 col-xxl-content" style={{padding:"50px"}}>
                  <div className="page-content">
                    
                  <Link to="/SubcategoryAdd" className='btn btn-out-line-success'>Add</Link>
        
                       <table className='table' style={{marginTop:50,borderColor:'black', borderWidth:1}}><thead>
                           <tr style={{height:50, backgroundColor:'beige'}}>
                             <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                             <th>Subcategory_id</th>
                              <th>subcategory_name</th>
                              <th>category_name</th>
                              <th>  </th>
                                            
                           </tr>
                         </thead>
                         <tbody>
                       {
                       subcategoryArr.map((el,index)=> 
                         <tr key={index} style={{textAlign:'center'}}>
                           <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                           <th>{el.subcategory_id}</th>
                            <td>{el.subcategory_name}</td>
                            <td>{el.category_name}</td>

                           <td style={{textAlign:'right'}}>

                               <Link to={"/SubcategoryEdit/" +el.subcategory_id} 
                               style={{textDecoration:'none'}} 
                               className="btn btn-outline-danger">
                                              <FontAwesomeIcon icon={faPencil}  >
  
                                              </FontAwesomeIcon> 
                               </Link>
                               <Link className='btn btn-outline-danger' 
                               style={{marginLeft:10}} 
                               to="#"
                               onClick={()=> OnDeleteClick(el.subcategory_id)}
                               >
                                 <FontAwesomeIcon icon={faRemove}  >
  
                                 </FontAwesomeIcon>
                               </Link>
                           </td>
  
                           
                         </tr>
                     
                         )
                         }
                         </tbody>
                         </table>
                  
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
export default SubcategoryList;