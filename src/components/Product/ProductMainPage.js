import Product from "./ProductAdd";
import Navbar from "../Common/navbar";

function ProductMainPage(){
    return(
    <div className="app">
        {Product()}
    </div>
)
}

export default ProductMainPage;