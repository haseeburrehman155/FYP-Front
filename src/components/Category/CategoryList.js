import {useSelector,useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencil,faRemove} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import { CategoryAction } from '../../actions/CategoryAction';
import Headers from '../Common/Headers';
import MobileMenu from '../Common/Menu';


function CategoryList(){

  var dispatch = useDispatch();


var categorydata = useSelector(state=> state.category);
const {categoryArr,isLoading} = categorydata;


const userdata=useSelector(state=>state.users);
const {UserRecord} =userdata;

    React.useEffect(()=>{
        
      dispatch(CategoryAction.GetCategory())
      },[]);

   function OnDeleteClick(id){
    if(window.confirm('Are you sure you want to delete')){
      dispatch(CategoryAction.DeleteCategoryData({category_id:id}));
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
                                <li><Link to="/CategoryList">Category-List</Link></li>
                                <li className="delimiter">/</li>
                            </ul>
                        </div>
     
      <section>
             <div className="row gutter-no">
                 <div className="col-lg-12 col-xxl-content" style={{paddingBottom:"50px",paddingLeft:"50px",paddingRight:"50px"}}>
                     <div className="page-content" style={{padding:"10px"}}>
                <Link to="/CategoryAdd" className='btn btn-out-line-success'>Add</Link>


                          <table className='table' style={{marginTop:50,borderColor:'black', borderWidth:1}}><thead>
                              <tr style={{height:50, backgroundColor:'beige'}}>
                                <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                                <th>#</th>
                                <th>Image</th>
                                <th>category_name</th>
                                <th>No Of Products</th>
                                <th>No Of Sub Categories</th>
                                <th> </th>
                                
                              </tr>
                            </thead>

                            <tbody>
                          {
                          categoryArr.map((el,index)=> 
                            <tr key={index} style={{textAlign:'center',marginTop:10}}>
                              <th><input type="checkbox" style={{WebkitAppearance: 'checkbox'}}/></th>
                              <th>{index+1}</th>

                              <th>
                                <img src={el.categoryimage} style={{height:30, 
                                width:30, objectFit:'cover'}}/>
                                </th>
                                
                              <td>{el.category_name}</td>
                              <td>{el.ProductsCount}</td>
                              <td>{el.SubCategoriesCount}</td>
                              <td style={{textAlign:'right'}}>
                                  <Link to={"/CategoryEdit/" +el.category_id} 
                                  style={{textDecoration:'none'}} 
                                  className="btn btn-outline-danger">
                                                 <FontAwesomeIcon icon={faPencil}  >

                                                 </FontAwesomeIcon> 
                                  </Link>
                                  <Link className='btn btn-outline-danger' 
                                  style={{marginLeft:10}} 
                                  to="#"
                                  onClick={()=> OnDeleteClick(el.category_id)}
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
                   
                   {/* footer */}
                   {MobileMenu()}
    </main>

    )
    
    }
export default CategoryList;