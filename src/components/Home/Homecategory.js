import { CategoryAction } from "../../actions/CategoryAction";
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';


function Homecategory(){

    // var categorydata = useSelector(state=> state.category);
    // const {categoryArr,isLoading,categoryrecord} = categorydata;

    return <div className="category-icons mt-10">
    <h2 className="title ls-m mb-0 pb-5 pt-5 lh-1">
        Popular Departments
    </h2>
    <div className="owl-carousel owl-theme row cols-xxl-6 cols-lg-4 cols-md-3 cols-2"
        data-owl-options="{
                'nav': false,
                'dots': true,
                'margin': 20,
                'responsive': {
                    '0': {
                        'items': 2
                    },
                    '768': {
                        'items': 3
                    },
                    '992': {
                        'items': 4
                    },
                    '1600': {
                        'items': 6
                    }
                    }
                }">
        <div className="category-wrap mb-4">
            <div className="category category-icon">
                <a href="market3-shop.html">
                    <figure className="categroy-media">
                        <i className="d-icon-t-shirt2"></i>
                    </figure>
                    <div className="category-content">
                        <h3 className="category-name">Fashion</h3>
                    </div>
                </a>
            </div>
        </div>
        <div className="category-wrap mb-4">
            <div className="category category-icon">
                <a href="market3-shop.html">
                    <figure className="categroy-media">
                        <i className="d-icon-cook"></i>
                    </figure>
                    <div className="category-content">
                        <h3 className="category-name">Home And Kitchen</h3>
                    </div>
                </a>
            </div>
        </div>
        <div className="category-wrap mb-4">
            <div className="category category-icon">
                <a href="market3-shop.html">
                    <figure className="categroy-media">
                        <i className="d-icon-desktop"></i>
                    </figure>
                    <div className="category-content">
                        <h3 className="category-name">Computer</h3>
                    </div>
                </a>
            </div>
        </div>
        <div className="category-wrap mb-4">
            <div className="category category-icon">
                <a href="market3-shop.html">
                    <figure className="categroy-media">
                        <i className="d-icon-officebag"></i>
                    </figure>
                    <div className="category-content">
                        <h3 className="category-name">Bag And Backpacks</h3>
                    </div>
                </a>
            </div>
        </div>
        <div className="category-wrap mb-4">
            <div className="category category-icon">
                <a href="market3-shop.html">
                    <figure className="categroy-media">
                        <i className="d-icon-basketball1"></i>
                    </figure>
                    <div className="category-content">
                        <h3 className="category-name">Sports</h3>
                    </div>
                </a>
            </div>
        </div>
        <div className="category-wrap">
            <div className="category category-icon">
                <a href="market3-shop.html">
                    <figure className="categroy-media">
                        <i className="d-icon-babycare"></i>
                    </figure>
                    <div className="category-content">
                        <h3 className="category-name">Toys And Babycare</h3>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
}

export default Homecategory;