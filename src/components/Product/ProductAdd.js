import React from 'react';
import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { ProductAction } from '../../actions/ProductAction';
import Headers from '../Common/Headers';
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from '../Common/Menu';





function Product(){
       

    const dispatch=useDispatch();
    const navigate = useNavigate();



    const [image,setimage] = useState({ preview: '', data: '' });
    const [base64Arr,setimageBase64Arr] = useState([]);
     
    const handlechange=(e)=>{
        console.log(e.target.files);
        // 
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
               base64Arr[parseInt(e.target.name)] = result;
               setimageBase64Arr(base64Arr);
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
        

    //method no 2
//  const globalreducer = useSelector(state=> state);
// var productsreducersss = globalreducer.product;
// var cateforyreducerssa = globalreducer.category;


//method number 1
    //product reducer
    const productdata=useSelector(state=>state.product);
    const {product_name,price,manufacture,size,weight,expiry,quality,description,phone,city,color,
        category_id,subcategory_id,isLoading ,error,dataAdded} =productdata;
   
    ///get category reducer
    var categorydata = useSelector(state=> state.category);
    const {categoryArr} = categorydata;

     var subcategorydata = useSelector(state=> state.subcategory);
     const {subcategoryArr} = subcategorydata;

    


    function RenderButton(){
         return  isLoading ?
            <div className="spinner-border text-danger" role="status">
            </div>
            :
            <button type="button" onClick={ButtonClicked}
         className="btn btn-out-line-success" style={{marginTop:'1rem'}}>
            Add
        </button>
    }

    function ButtonClicked(){

        var values ={category_id,subcategory_id,product_name,
            price,manufacture,description,phone,city,size,weight,expiry,color,quality,base64Arr}
        
        if (!product_name || !manufacture || !description || !phone ||
             !city || !price || !category_id || !base64Arr || !size ||
            !weight || !quality || !color){
            alert ("please fill the form ")
        }else {

             dispatch(ProductAction.PostProductData(values,navigate));
           
            console.log("Productdata  add ho gaya ");
        }
    }

    function CategoryChanged(text)
    {
        var subcats = document.getElementsByClassName('ddlSubCategory');
        for (let index = 0; index < subcats.length; index++) {
            var el = subcats[index];
            if(el.getAttribute('categoryid') == text.target.value){
                el.style.setProperty("display","block")
            }else{
                el.style.setProperty("display","none")
            }
        }
        

            dispatch(
                ProductAction.formupdate('category_id',text.target.value))

    }
    

    return     <main className="main">
    {Headers()}
    <div className="page-header"
                            style={{
                                backgroundImage: require('../../images/shop/page-header-back.jpg'),
                                backgroundColor: '#3C63A4'}}>
                           
                            <ul className="breadcrumb">
                                <li><a href="/"><i className="d-icon-home"></i></a></li>
                                <li className="delimiter">/</li>
                                <li><Link to="">Product Add</Link></li>
                                <li className="delimiter">/</li>
                            </ul>
                        </div>
   
    <section>
           <div className="row gutter-no">
               <div className="col-lg-11 col-xxl-content" style={{paddingTop:"50px",paddingButtom:"50px",paddingLeft:"50px"}} >
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
                                <label >description</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add description" name="description" style={{marginTop: '0.5em'}}
                                 value={description} 
                                 onChange={(text)=>
                                     dispatch(
                                        ProductAction.formupdate('description',text.target.value))}
                                 ></input>

                            </div>
                            <div className="col-md-4">
                                <label >phone</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add phone" name="phone" style={{marginTop: '0.5em'}}
                                 value={phone} 
                                 onChange={(text)=>
                                     dispatch(
                                        ProductAction.formupdate('phone',text.target.value))}
                                 ></input>
                            </div>
                            <div className="col-md-4">
                                <label >city</label>
                              
                                 <select required className='form-control' onChange={(text)=>
                                     dispatch(
                                        ProductAction.formupdate('city',text.target.value))}>
                                    <option>Select City</option>
                                    <option>Faisalabads</option>
                                    <option>Bannu</option>
                                    <option>Peshawer</option>
                                    <option>Lahore</option>
                                 </select>
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
                            <div className="col-md-4">
                                <label >Color</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add manufacture" name="manufacture" style={{marginTop: '0.5em'}}
                                 value={color} 
                                 onChange={(text)=>
                                     dispatch(
                                        ProductAction.formupdate('color',text.target.value))}
                                 ></input>

                            </div>

                                 <div className="col-md-4" >
                                        <label >Category</label>
                                        <select className='form-control'
                                            onChange={(text)=> CategoryChanged(text)} >
                                            <option value={""}>Select Category</option>
                                            {categoryArr.map((el,index)=>
                                                <option key={index} value={el.category_id}>{el.category_name}</option>
                                                )}
                                        </select>
                                 </div>  

                                 <div className="col-md-4" >
                                        <label >Sub Category</label>
                                        <select className='form-control'
                                        id='ddlSubCategory'
                                            onChange={(text)=>
                                                dispatch(
                                                ProductAction.formupdate('subcategory_id',text.target.value))} >
                                            <option value={"0"}>Select Category</option>
                                            {subcategoryArr.map((el,index)=>
                                                <option style={{display:'none'}} className='ddlSubCategory' key={index} categoryid={el.categoryIds} value={el.subcategory_id}>{el.subcategory_name}</option>
                                                )}
                                        </select>
                                 </div>  

                                 <div className="col-md-4">
                                        <label >Size</label>
                                        <input type="text"
                                        className="form-control" id="exampleInputPassowrd1" 
                                        placeholder="Add size" name="size" 
                                        value={size} 
                                        onChange={(text)=>
                                            dispatch(
                                                ProductAction.formupdate('size',text.target.value))}

                                        ></input>
                                </div>

                            <div className="col-md-4">
                                <label >Weight</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add Weight" name="Weight" 
                                 value={weight} 
                                 onChange={(text)=>
                                     dispatch(
                                        ProductAction.formupdate('weight',text.target.value))}

                                 ></input>

                            </div>

                            <div className="col-md-4">
                                <label >Expiry</label>
                                <input type="date"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add Expiry" name="Expiry" 
                                 value={expiry} 
                                 onChange={(text)=>
                                     dispatch(
                                        ProductAction.formupdate('expiry',text.target.value))}

                                 ></input>

                            </div>

                            <div className="col-md-4">
                                <label >Quality</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add Quality" name="Quality" 
                                 value={quality} 
                                 onChange={(text)=>
                                     dispatch(
                                        ProductAction.formupdate('quality',text.target.value))}

                                 ></input>

                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>

                                
                                    {
                                    [0,1,2,3,4,5].map(el=>
                                    <div className="col-md-4" style={{padding:"30px"}} key={el}>
                                    
                                    <img className='form-control' id={"image"+el} src={require('../../images/un.png')}  style={{height:"320px",width:"100%"}}  />
                                
                                    <input className='form-control' name={el.toString()} type="file" onChange={handlechange}
                                    />
                                    </div>
                                        
                                    
                                )}



                           

                            {RenderButton()}

                            <div className='row mt-3'>
                                    {dataAdded ?  <span className='alert'>Product added succcessfully</span> : 

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
       </section>
                  {/* <!-- End recent product --> */}
                
                   {/* <!-- End Footer --> */}
                   {MobileMenu()}
  </main>

}


export default Product;