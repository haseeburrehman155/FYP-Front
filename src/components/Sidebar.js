
function Sidebar(categoryArr,subcategoryArr){
    
     

return    <aside className="col-lg-3 sidebar sidebar-fixed
 sidebar-toggle-remain shop-sidebar sticky-sidebar-wrapper">

<div className="sidebar-overlay"></div>
<a className="sidebar-close"  ><i className="d-icon-times"></i></a>
<div className="sidebar-content">
    <div className="sticky-sidebar" data-sticky-options="{'top': 10}">
        <div className="filter-actions mb-4">
            <a   className="sidebar-toggle-btn toggle-remain btn btn-outline btn-primary 
                    btn-rounded btn-icon-right">Filter<i className="d-icon-arrow-left"></i></a>
            <a   className="filter-clean">Clean All</a>
        </div>
        <div className="widget widget-collapsible">
            <h3 className="widget-title">All Categories</h3>
            <ul className="widget-body filter-items search-ul">
                <li><a  >Accessosries</a></li>
                <li>
                    <a  >Bags</a>
                    <ul>
                        <li><a  >Backpacks {'&'} Fashion Bags</a></li>
                    </ul>
                </li>
                <li>
                    <a  >Electronics</a>
                    <ul>
                        <li><a  >Computer</a></li>
                        <li><a  >Gaming {'&'} Accessosries</a></li>
                    </ul>
                </li>
                <li><a  >For Fitness</a></li>
                <li><a  >Home {'&'} Kitchen</a></li>
                <li><a  >Men's</a></li>
                <li><a  >Shoes</a></li>
                <li><a  >Sporting Goods</a></li>
                <li><a  >Summer Season's</a></li>
                <li><a  >Travel {'&'} Clothing</a></li>
                <li><a  >Watches</a></li>
                <li><a  >Women’s</a></li>
            </ul>
        </div>
        <div className="widget widget-collapsible">
            <h3 className="widget-title">Filter by Price</h3>
            <div className="widget-body mt-3">
                <form action="#">
                    <div className="filter-price-slider"></div>

                    <div className="filter-actions">
                        <div className="filter-price-text mb-4">Price:
                            <span className="filter-price-range"></span>
                        </div>
                        <button type="submit"
                            className="btn btn-dark btn-filter btn-rounded">Filter</button>
                    </div>
                </form>
                {/* <!-- End Filter Price Form --> */}
            </div>
        </div>
        <div className="widget widget-collapsible">
            <h3 className="widget-title">Size</h3>
            <ul className="widget-body filter-items">
                <li><a  >Extra Large</a></li>
                <li><a  >Large</a></li>
                <li><a  >Medium</a></li>
                <li><a  >Small</a></li>
            </ul>
        </div>
        <div className="widget widget-collapsible">
            <h3 className="widget-title">Color</h3>
            <ul className="widget-body filter-items">
                <li><a  >Black</a></li>
                <li><a  >Blue</a></li>
                <li><a  >Green</a></li>
                <li><a  >White</a></li>
            </ul>
        </div>
        <div className="widget widget-collapsible">
            <h3 className="widget-title">Brands</h3>
            <ul className="widget-body filter-items">
                <li><a  >Cinderella</a></li>
                <li><a  >Comedy</a></li>
                <li><a  >Rightcheck</a></li>
                <li><a  >SkillStar</a></li>
                <li><a  >SLS</a></li>
            </ul>
        </div>
    </div>
</div>
</aside>

}

export default Sidebar;