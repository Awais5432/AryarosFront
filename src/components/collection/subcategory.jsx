import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import Filter from "./common/filter";
import FilterBar from "./common/filter-bar";
import ProductListing from "./common/product-listing";
import StickyBox from "react-sticky-box";
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';


import { getTotal, getCartProducts } from '../../reducers'
import { addToCart, addToWishlist, addToCompare } from '../../actions'
import { getVisibleproducts } from '../../services';
import ProductListItem from "./common/product-list-item";

class SubCategory extends Component {

    // state = {
    //     layoutColumns: 3,
    //     products: [],
    //     symbol: 'AED'
    // }

    constructor(props) {
        super(props);
        this.state = {
            layoutColumns: 3,
            products: [],
            symbol: 'AED',
            hasMoreItems: true
        }
    }


    // fetchMoreItems = () => {
    //     if (this.state.limit >= this.state.products.length) {
    //         this.setState({ hasMoreItems: false });
    //         return;
    //     }
    //     // a fake async api call
    //     setTimeout(() => {
    //         this.setState({
    //             limit: this.state.limit + 5
    //         });
    //     }, 3000);


    // }
    LayoutViewClicked(colums) {
        this.setState({
            layoutColumns: colums
        })
    }

    openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }

    componentDidMount() {
        // this.fetchMoreItems();
        let id = this.props.match.params.id;
        // console.log(id);
        axios.get(`https://store.squarepakistan.com/public/api/${id}/getProductBySubCategory`)
            .then(function (response) {
                const products = response.data.data;
                console.log(products);
                this.setState({
                    products: products
                })
            }.bind(this))

    }

    render() {
        const { addToCart, symbol, addToWishlist, addToCompare, colSize } = this.props;
        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>Aryarose | Shop</title>
                    <meta name="description" content="Aryarose || E-Store" />
                </Helmet>
                {/*SEO Support End */}

                {/* <Breadcrumb title={'Collection'}/> */}

                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                {/* <div className="col-sm-3 collection-filter"> */}

                                {/* <StickyBox offsetTop={20} offsetBottom={20}>
                                        <div>
                                            <Filter />
                                            <NewProduct /> */}
                                {/* <div className="collection-sidebar-banner">
                                                <a href="#">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/side-banner.png`} className="img-fluid" alt="" />
                                                </a>
                                            </div> */}
                                {/* </div>
                                    </StickyBox> */}
                                {/*side-bar banner end here*/}
                                {/* </div> */}
                                <div className="collection-content col">
                                    <div className="page-main-content ">
                                        <div className="">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    {/* <div className="top-banner-wrapper">
                                                        <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpg`} className="img-fluid" alt="" /></a>
                                                        <div className="top-banner-content small-section">
                                                            <h4>fashion</h4>
                                                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                                        </div>
                                                    </div> */}
                                                    <div className="collection-product-wrapper">
                                                        <div className="product-top-filter">
                                                            <div className="container-fluid p-0">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="filter-main-btn">
                                                                            <span onClick={this.openFilter}
                                                                                className="filter-btn btn btn-theme"><i
                                                                                    className="fa fa-filter"
                                                                                    aria-hidden="true"></i> Filter</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <FilterBar onLayoutViewClicked={(colmuns) => this.LayoutViewClicked(colmuns)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/*Products Listing Component*/}
                                                        {/* <ProductListing colSize={this.state.layoutColumns} /> */}
                                                        <div className="product-wrapper-grid">
                                                            <div className="container-fluid">
                                                                {this.state.products.length > 0 ?
                                                                    <InfiniteScroll
                                                                        dataLength={this.state.limit} //This is important field to render the next data
                                                                        next={this.fetchMoreItems}
                                                                        hasMore={this.state.hasMoreItems}
                                                                        loader={<div className="loading-cls"></div>}
                                                                        endMessage={
                                                                            <p className="seen-cls seen-it-cls">
                                                                                <b>Yay! You have seen it all</b>
                                                                            </p>
                                                                        }
                                                                    >
                                                                        <div className="row">
                                                                            {this.state.products.slice(0, this.state.limit).map((product, index) =>
                                                                                <div className={`${this.state.layoutColumns === 3 ? 'col-xl-3 col-md-6 col-grid-box' : 'col-lg-' + this.state.layoutColumns}`} key={index}>
                                                                                    <ProductListItem product={product} symbol={symbol}
                                                                                        onAddToCompareClicked={() => addToCompare(product)}
                                                                                        onAddToWishlistClicked={() => addToWishlist(product)}
                                                                                        onAddToCartClicked={addToCart} key={index} />
                                                                                </div>)
                                                                            }
                                                                        </div>
                                                                    </InfiniteScroll>
                                                                    :
                                                                    <div className="row">
                                                                        <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" />
                                                                            <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>
                                                                            <p>Please check if you have misspelt something or try searching with other words.</p>
                                                                            <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">continue shopping</Link>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    products: getVisibleproducts(state.data, state.filters),
    symbol: state.data.symbol,
    none: state.data.products
})
export default connect(
    mapStateToProps, { addToCart, addToWishlist, addToCompare }
)(SubCategory)