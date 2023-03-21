import Category from "./CategoryAdd";
import Navbar from "../Common/navbar";

function CategoryMainpage(){
    return (
        <div className="App">
    {Navbar()}
     {Category()}
     </div>
    )
}

export default CategoryMainpage;