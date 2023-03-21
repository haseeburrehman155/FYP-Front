import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { UsertypeAction } from '../../actions/UsertypeAction';
import Sidebar from '../Sidebar';
import Headers from '../Common/Headers';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from '../Common/Menu';





function Usertype(){
       

    const dispatch=useDispatch();
    var navigate=useNavigate();



    //usertype reducer
    const usertypedata=useSelector(state=>state.usertype);
    const {user_type_name,isLoading ,error,dataAdded} =usertypedata;
   



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
        var values = {user_type_name} 

        if(!user_type_name){
            alert ("please fill the form ")
        }else {
             dispatch(UsertypeAction.PostUsertype(values,navigate));

            console.log("data add ho gaya ");
        }
    }
    

    return   <main className="main">
    {Headers()}
    <div className="page-header"
                            style={{
                                backgroundImage: require('../../images/shop/page-header-back.jpg'),
                                backgroundColor: '#3C63A4'}}>
                           
                            <ul className="breadcrumb">
                                <li><Link to="/"><i className="d-icon-home"></i></Link></li>
                                <li className="delimiter">/</li>
                                <li><Link to="/UsertypeList">Usertype-List</Link></li>
                                <li className="delimiter">/</li>
                            </ul>
                        </div>
   
    <section>
           <div className="row gutter-no">
               <div className="col-lg-12 col-xxl-content" style={{paddingTop:"50px",paddingButtom:"50px"}}>
                   <div className="page-content ">
                   <div className="row">
                    <div className="col-md-6 col-12 mx-auto">
                        {/* <form action='/contact' method='POST'> */}
                        <form>
                            <div className="form-group">
                                <label >Usertype</label>
                                <input type="text"
                                 className="form-control" id="exampleInputPassowrd1" 
                                 placeholder="Add Usertype" name="Usertype" style={{marginTop: '0.5em'}}
                                 value={user_type_name} 
                                 onChange={(text)=>
                                     dispatch(
                                         UsertypeAction.userformupdate('user_type_name',text.target.value)
                                         )}
                                 ></input>

                            </div>

                            {RenderButton()}
                            


<div className='row mt-3'>
{dataAdded ?  <span className='alert'>Usertype added succcessfully</span> : 

(!dataAdded && error ? <span className='alert'>{error}</span> 
:<div/>
)
}
</div>


                        </form>
                    </div>

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


export default Usertype;