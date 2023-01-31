import React, { Fragment, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import Metadata from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";


const Home = () => {
    const dispatch = useDispatch();
    const { loading,  products, } = useSelector(
        state => state.products
    );
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    return (
        <Fragment>
            {loading ? (
                <Loader/>
                ) : (
                <Fragment>
                    <Metadata title="BRAND'S FACTORY" />
                    <div className="banner">
                        <p>Welcome to BRAND'S FACTORY</p>
                        <h1>FIND AMAZING PRODUCTS BELOW</h1>
                        <a href="#container">
                            <button>
                                Scroll
                            </button>
                        </a>
                    </div>
                    <h2 className="homeHeading">Featured Products</h2>
                    <div className="container" id="container">
                        {products && products.map((product) => <Product product={product} />)}
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
};
export default Home;