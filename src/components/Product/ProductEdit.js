import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { ProductAction } from '../../actions/ProductAction';
import Headers from '../Common/Headers';
import Sidebar from '../Sidebar';
import MobileMenu from '../Common/Menu';



function ProductEdit(){
    var dispatch = useDispatch();
    const {id} = useParams();
    var navigate=useNavigate();

            var productdate= useSelector(state=> state.product);
            const {product_name,price,manufacture,isLoading ,error,category_id,
            dataAdded,base64Arr,verified} =productdate;

              ///get category reducer
                var categorydata = useSelector(state=> state.category);
                const {categoryArr} = categorydata;
     
            const handlechange=(e)=>{
                console.log(e.target.files);
               // setimage(e.target.files[0]);
                const img = {
                    preview: URL.createObjectURL(e.target.files[0]),
                    data: e.target.files[0],
                  }
                //   let idCardBase64 = '';
                  getBase64(img.data, (result) => {
                      // idCardBase64 = result;
                       img.base64 = result;
                       var image = document.getElementById('image'+e.target.name);
                       image.src= result;
                       image.height = 50;
                       base64Arr[parseInt(e.target.name)] = {productId:id, base64Arr:result};
                      // setimageBase64Arr(base64Arr);
                       dispatch(
                        ProductAction.formupdate('base64Arr',base64Arr));
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
        
        var bArray = [];
        base64Arr.forEach(element => {
            bArray.push(element.base64Arr);
        });
       var isverified =  document.getElementById("verifief").checked ? 1: 0;
        var values ={product_name,price,manufacture,product_id:id,category_id,base64Arr:bArray,isverified}
        if (!product_name && !price && !manufacture){
            alert ("please fill the form ")
        }else {
            dispatch(ProductAction.UpdateProductData(values,navigate));
            console.log("data add ho gaya ");
        }
    }
   
    // console.log(searchParams);

    React.useEffect(()=>{
       
      dispatch(ProductAction.GetProductById(id))
      },[]);





    return (  
        <main className="main">
        {Headers()}
        <div className="page-header"
                            style={{
                                backgroundImage: require('../../images/shop/page-header-back.jpg'),
                                backgroundColor: '#3C63A4'}}>
                           
                            <ul className="breadcrumb">
                                <li><Link to="/"><i className="d-icon-home"></i></Link></li>
                                <li className="delimiter">/</li>
                                <li><Link to="/PRoductList">Products</Link></li>
                                <li className="delimiter">/</li>
                            </ul>
                        </div>
       
        <section>
               {isLoading ? <div/> : <div className="row gutter-no">
                   <div className="col-lg-11 col-xxl-content" 
                   style={{paddingLeft:"50px", paddingTop:"50px",paddingBottom:"50px"}}>
                       <div className="page-content ">
                       <div className="row">
                       
                            {/* <form action='/contact' method='POST'> */}
                            <form className="col-md-12 col-12 mx-auto">
                                <div className='row' >
                                <div className="col-md-4">
                                    <label >Product</label>
                                    <input type="text"
                                     className="form-control" id="exampleInputPassowrd1" 
                                     placeholder="Add Product" name="Product" style={{marginTop: '0.5em'}}
                                     value={product_name} 
                                     onChange={(text)=>
                                         dispatch(
                                            ProductAction.formupdate('product_name',text.target.value))}
                                     ></input>
    
                                </div>
                               
                                <div className="col-md-4" >
                                    <label >price</label>
                                    <input type="number"
                                     className="form-control" id="exampleInputPassowrd1" 
                                     placeholder="Add price" name="price" style={{marginTop: '0.5em'}}
                                     value={price} 
                                     onChange={(text)=>
                                         dispatch(
                                            ProductAction.formupdate('price',text.target.value))}
                                     ></input>
    
                                </div> 
                               
                                <div className="col-md-4">
                                    <label >manufacture</label>
                                    <input type="text"
                                     className="form-control" id="exampleInputPassowrd1" 
                                     placeholder="Add manufacture" name="manufacture" style={{marginTop: '0.5em'}}
                                     value={manufacture} 
                                     onChange={(text)=>
                                         dispatch(
                                            ProductAction.formupdate('manufacture',text.target.value))}
                                     ></input>
    
                                </div>
    
                                     <div className="col-md-4" >
                                            <label >Category</label>
                                            <select className='form-control'
                                            defaultValue={category_id}
                                                onChange={(text)=>
                                                    dispatch(
                                                    ProductAction.formupdate('category_id',text.target.value))} >
                                                <option value={""}>Select Category</option>
                                                {categoryArr.map((el,index)=>
                                                    <option  key={index} value={el.category_id}>{el.category_name}</option>
                                                    )}
                                            </select>
                                     </div>   
                                     <div className="col-md-4 pt-2">
                                        <br/>
                                    <label style={{fontWeight:'bolder'}} >Verified</label>
                                     {verified == 1? <input style={{WebkitAppearance: 'checkbox'}} type="checkbox" id="verifief" name="verified" defaultChecked={true}/>:
                                     <input style={{WebkitAppearance: 'checkbox'}} type="checkbox" id="verifief" name="verified" defaultChecked={false}/>}
                                </div>
                                <div className="col-md-4"></div>
                                     
                                        {[0,1,2,3,4,5].map(el=>{

                                      return  <div className="col-md-4" style={{paddingTop:"20px"}} key={el}>
                                        
                                            { base64Arr[el] ?
                                               <img className='form-control' id={"image"+el} src={base64Arr[el].base64Arr}   style={{height:"320px",width:"100%"}} />
                                            :
                                            <img className='form-control' id={"image"+el} src={require('../../images/un.png')}  style={{height:"320px",width:"100%"}} />

                                            }
                                            
                                                <input className='form-control' name={el.toString()} type="file" onChange={handlechange}
                                                />
                                        </div>
                                        }
                                            
                                        
                                    )}
    
    
    
                               
    
                                {RenderButton()}
    
                                <div className='row mt-3'>
                                {dataAdded ?  <span className='alert'>Product Updated succcessfully</span> : 
    
                                (!dataAdded && error ? <span className='alert'>{error}</span> 
                                :<div/>
                                )
                                }
                                </div>
     </div>
                            </form>
                       
    
                </div>
                  
                    
                       </div>
            
                   </div>
               </div>
               }
           </section>
                      {/* <!-- End recent product --> */}
                     
                       {/* <!-- End Footer --> */}
                       {MobileMenu()}
      </main>
    )
}

export default ProductEdit;