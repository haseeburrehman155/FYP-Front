import {useSelector,useDispatch} from 'react-redux';
import React, { useState } from 'react';
import Headers from '../Common/Headers';
import GridViewProducts from './GridViewProducts';
import ListViewProducts from './ListViewProducts';
import { HomeAction } from '../../actions/HomeAction';
import { Link } from 'react-router-dom';
import { ProductAction } from '../../actions/ProductAction';
import MobileMenu from '../Common/Menu';

function Home(){

    const [SelectedView, SetSeectedView] = useState('GridView')
    let [selectedTags, SetselectedTags] = useState([])
    var dispatch = useDispatch();

    //category reducer
    var categorydata = useSelector(state=> state.category);
    const {categoryArr,isLoading,categoryrecord} = categorydata;

    //subcategory reducer
     var subcategorydata = useSelector(state=> state.subcategory);
     const {subcategoryArr} = subcategorydata;

  //users reducer
    const userdata=useSelector(state=>state.users);
    const {user_name,password,UserRecord} =userdata;

    // product reducer
    var productdata = useSelector(state=> state.product);
    const {productArr,productsCount} = productdata;

    //for pagination we create url
    const urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get('pageNo');
    var url = `${window.location.origin}?pageNo=${1}`;

    let userMem = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : null;

      React.useEffect(()=>{      
       dispatch(HomeAction.GetHomeData(urlParams))
      },[]);

      function OnBtnFilterNowClick(){

        var selectedtags = selectedTags;
        var selecteColors = [];
        var selecteSize = [];
        var selectCity=[];


        var filterDiv=document.getElementsByClassName("filter-price")[0].children;
        var filterDivcolor=document.getElementsByClassName("filter-color")[0].children;
        var filterDivsize=document.getElementsByClassName("filter-size")[0].children;
        var filterDivcity=document.getElementsByClassName("filter-city")[0].children;

        var priceQuery = " ";

        for (let index = 0; index < filterDiv.length; index++) {
            const element = filterDiv[index];
            // console.log(filterDiv[index],"filtercheck");
          if(element.className.includes("active")){
                if(!element.innerText.includes("-") && !element.innerText.includes("+")){
                    priceQuery = " ";
                }else if (element.innerText.includes("-")){
                    var text = element.innerText.replaceAll("Rs","").replaceAll("+","").replaceAll("-","and").trim();
                    priceQuery = " p.price between " + text;
                }else if (element.innerText.includes("+")){
                    var text = element.innerText.replaceAll("Rs","").replaceAll("+","").trim();
                    priceQuery = " p.price >= " + text;
                }
          }
        }

        // for color selection 

        for (let index=0;index<filterDivcolor.length;index++){
            const element = filterDivcolor[index];

            if (element.className.includes("active")){
                selecteColors.push(`'${element.innerText}'`)
            }
        }

        // create color query for database 
        var colorfilter = selecteColors.length>0 ?` and p.color IN(${selecteColors.toString()})`: ' ';
        console.log(priceQuery);

        console.log(` p.category_id IN(${selectedtags.toString()})`);


            //size selection area 

        for (let index=0;index<filterDivsize.length;index++){
            const element = filterDivsize[index];

            if (element.className.includes("active")){
                selecteSize.push(`'${element.innerText}'`)
            }
        }

          // create size query for database 
          var sizefilter = selecteSize.length>0 ?` and p.size IN(${selecteSize.toString()})`: ' ';
          console.log(sizefilter);
  

          
         //city selection area 

         for (let index=0;index<filterDivcity.length;index++){
            const element = filterDivcity[index];

            if (element.className.includes("active")){
                selectCity.push(`'${element.innerText}'`)
            }
        }

          // create size query for database 
          var cityfilter = selectCity.length>0 ?` and p.city IN(${selectCity.toString()})`: ' ';
          console.log(cityfilter);        



        //combine query for database
        
        var combinefilter = (priceQuery == " " ? " " : priceQuery + " and ") + 

        (selectedtags.length > 0 ? ` p.category_id IN(${selectedtags.toString()})` :
        " p.category_id > 0  ") + colorfilter + sizefilter + cityfilter;
       
        console.log(combinefilter);
        console.log(cityfilter +"city query is")
        // console.log(colorquery);
        //ProductAction.GetfilterProduct()
        dispatch(ProductAction.GetfilterProduct(combinefilter))
       
  }

    function RenderProductsView(){
      return productArr.length <1 ? <div className='text-center'>
            <span className='text-center'>No Product Found</span>
           </div>: 
           SelectedView == "GridView" ? GridViewProducts(productArr) : ListViewProducts(productArr)
 }

   
   function GetActiveClass(pageNo){
    var myParam = urlParams.get('pageNo');
    return pageNo==1 && !myParam?'page-item active': (myParam  && myParam == pageNo) ? 'page-item active': 'page-item'; 
   }

    function RenderPagination(){
        
        var myParam = urlParams.get('pageNo');
        var url = myParam ? `${window.location.origin}?pageNo=${myParam}`: window.location.origin;
        var noOfPages = Math.ceil(productsCount/12); // 3
        var pageno = !myParam || isNaN(myParam) ?1: parseInt(myParam); 
        var noOfbuttonsPerPage = 6;

        
        return  productArr.length <1 ? <div className='text-center m-6'/>
                : <nav className="toolbox toolbox-pagination">
                        <p className="show-info">Showing <span>{myParam ? `${myParam*12} `: '12'} of {productsCount}</span> Products</p>
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex="-1"
                                    aria-disabled="true">
                                    <i className="d-icon-arrow-left"></i>Prev
                                </a>
                            </li>
                            {
                                [1,2,3,4,5,6].map(el=>
                                    noOfPages >= el ? <li key={el} className={GetActiveClass(el)} aria-current="page">
                                        <a className="page-link" href={`${window.location.origin}?pageNo=${el}`}>{el}</a>
                                        </li>: null
                                )
                                }
                           

                            <li className="page-item">    
                                <a className="page-link page-link-next" aria-label="Next">
                                    Next<i className="d-icon-arrow-right"></i>       </a>
                            </li>
                        </ul>
                    </nav>
    }

    return (
      isLoading ? <div className="spinner-border text-danger" role="status"></div>:
        <div>
            {Headers(UserRecord)}
           
            <main className="main">
                
                        <div className="page-header" 
                          style={{backgroundImage: "url(images/page-header/home.png)"}}>
                

                            <ul className="breadcrumb" style={{fontSize:"20px",fontWeight:"bold"}}>
                                <li > <a href="/" style={{color:"black"}} ><i className="d-icon-home"></i></a></li>
                                <li className="delimiter">/</li>
                                <li ><a href="/AboutUs" >About Us</a></li>
                                <li className="delimiter">/</li>
                            </ul>
                        </div>
                        
                        {/* <!-- End PageHeader --> */}
                        <div className="page-content mb-10 pb-6">
                            <div className="container">
                            <div className="toolbox-wrap">
                               

{/* filter area  */}
                                    <aside id='filerBar' className="sidebar sidebar-fixed shop-sidebar closed">
                                        <div className="sidebar-overlay"></div>
                                        <a className="sidebar-close" href="#"><i className="d-icon-times"></i></a>
                                        <div className="sidebar-content">
                                            <div className="mb-0 mb-lg-4">
                                                <div className="filter-actions">
                                                    <a href="#"
                                                        className="sidebar-toggle-btn toggle-remain btn btn-sm btn-outline btn-rounded btn-primary">Filterss<i
                                                            className="d-icon-arrow-left"></i></a>
                                                    <a onClick={()=> window.location.href = "/"} id='filerclean' href='' className="filter-clean">Clean All</a>
                                                </div>
                                               
                                                <div className="row cols-lg-4">
                                                    <div className="widget">
                                                        <h3 className="widget-title">Size</h3>
                                                        <ul className="widget-body filter-items filter-size">
                                                            <li><a href="#">Extra Large</a></li>
                                                            <li><a href="#">Large</a></li>
                                                            <li><a href="#">Medium</a></li>
                                                            <li><a href="#">Small</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div className="widget color-with-count">
                                                        <h3 className="widget-title">Color</h3>
                                                        <ul className="widget-body filter-items filter-color">
                                                        
                                                            <li><a href="#">Black</a></li>
                                                            <li><a href="#">Blue</a></li>
                                                            <li><a href="#">Brown</a></li>
                                                            <li><a href="#">Green</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="widget price-with-count">
                                                        <h3 className="widget-title">Price</h3>
                                                        <ul className="widget-body filter-items filter-price">
                                                            <li className="active"><a href="#">All</a></li>
                                                            <li><a href="#">Rs0 - Rs5000</a></li>
                                                            <li><a href="#">Rs5000 - Rs10000</a></li>
                                                            <li><a href="#">Rs10000 +</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="widget city-with-count">
                                                        <h3 className="widget-title">City</h3>
                                                        <ul className="widget-body filter-items filter-city">
                                                            <li><a href="#">Faisalabad</a></li>
                                                            <li><a href="#">Bannu</a></li>
                                                            <li><a href="#">karachi</a></li>
                                                            <li><a href="#">Lahore</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="widget">
                                                        <h3 className="widget-title">Tags</h3>
                                                        <div className="widget-body pt-2">

                                                           {
                                                           categoryArr.map((el,index)=>
                                                            <button key={index} onClick={()=>{
                                                               var  tags = document.getElementsByClassName("tag");
                                                               if(selectedTags.includes(el.category_id)){
                                                                  var filtertags = selectedTags.filter(a=>a!= el.category_id);
                                                                  for(let i=0;i< tags.length;i++){
                                                                   if(tags[i].innerText == el.category_name){
                                                                    tags[i].style.backgroundColor = "transparent";
                                                                   }
                                                                  }
                                                                  SetselectedTags(filtertags);
                                                               }else{
                                                                    var newtags = selectedTags;
                                                                    newtags.push(el.category_id);
                                                                    for(let i=0;i< tags.length;i++){
                                                                        if(tags[i].innerText == el.category_name){
                                                                         tags[i].style.backgroundColor = "lightgray";
                                                                        }
                                                                       }
                                                                    SetselectedTags(newtags);
                                                               }
                                                            }}
                                                             className="tag">{el.category_name}</button>
                                                            )} 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='text-center'>
                                                    <button onClick={OnBtnFilterNowClick} className='btn'>Filter Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </aside> 
                                    
                                    <div className="toolbox sticky-toolbox sticky-content fix-top">
                                        <div className="toolbox-left">
                                            <a onClick={()=>{
// $("#filerBar").fadeToggle("slow");
                                                var filerclean= document.getElementById("filerclean");
                                                var sidebar =document.getElementById("filerBar");
                                                var toolboxhide=document.getElementById('toolboxhide');

                                                if(sidebar.className.includes("closed")){
                                                    sidebar.className = "sidebar sidebar-fixed shop-sidebar";
                                                    filerclean.style = "display: inline;"
                                                    toolboxhide.style="display:none";
                                                 }
                                                else{
                                                sidebar.className = "sidebar sidebar-fixed shop-sidebar closed";
                                                filerclean.style = "display: none;"
                                                toolboxhide.style="display:transparent";
                                               }
                                            }} 
                                            className="toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-rounded btn-icon-left font-primary"><i
                                                    className="d-icon-filter-2"></i>Filter
                                                    </a>
                                        </div>

                                        <div className="toolbox-right" id='toolboxhide' >
                                          <label style={{fontWeight:"bold",color:"black"}}> View Style: </label>
                                            <div className="toolbox-item toolbox-layout mr-lg-0">
                                                    <a  onClick={()=> SetSeectedView("ListView")} 
                                                    className={SelectedView== "ListView" ?
                                                    "d-icon-mode-list btn-layout active":"d-icon-mode-list btn-layout"}></a>
                                                   
                                                    <a  onClick={()=> SetSeectedView("GridView")} 
                                                    className={SelectedView== "GridView" ?
                                                    "d-icon-mode-grid btn-layout active":"d-icon-mode-grid btn-layout"}></a>
                                                </div>
                                        </div>

                                    </div>
                                   

                                </div>

                                <div className="row gutter-lg main-content-wrap">
                                   
                                    <div className="col-lg-12 main-content">
                                    {/* {Sidebar(categoryArr,subcategoryArr)} */}
                                        {RenderProductsView()}
                                      {RenderPagination()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
            </main>
            {MobileMenu()}
        </div>
    )  
}

export default Home;