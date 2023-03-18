import React from 'react'
import { Link, useLocation } from "react-router-dom"
import ReactStars from 'react-rating-stars-component';
const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation()
    return (
        <>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link to="/product/:id" className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src='images/wish.svg' alt='wishlist' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src='images/watch.jpg' className='img-fluid' alt='product image1' />
                        <img src='images/watch-1.jpg' className='img-fluid' alt='product image2' />
                    </div>

                    <div className='product-details'>
                        <h6 className='brand'>
                            Havels
                        </h6>
                        <h5 className='product-title'>
                            Kids headphones bulk 10 packs multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend
                            tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên
                            các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay.
                        </p>
                        <p className='price'>
                            5.000.000 VNĐ
                        </p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src='images/prodcompare.svg' alt='compare' />
                            </Link>
                            <Link>
                                <img src='images/view.svg' alt='view' />
                            </Link>
                            <Link>
                                <img src='images/add-cart.svg' alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link to="/product/:id" className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src='images/wish.svg' alt='wishlist' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src='images/watch.jpg' className='img-fluid' alt='product image3' />
                        <img src='images/watch-1.jpg' className='img-fluid' alt='product image4' />
                    </div>

                    <div className='product-details'>
                        <h6 className='brand'>
                            Havels
                        </h6>
                        <h5 className='product-title'>
                            Kids headphones bulk 10 packs multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend
                            tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên
                            các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay.
                        </p>
                        <p className='price'>
                            5.000.000 VNĐ
                        </p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src='images/prodcompare.svg' alt='compare' />
                            </Link>
                            <Link>
                                <img src='images/view.svg' alt='view' />
                            </Link>
                            <Link>
                                <img src='images/add-cart.svg' alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default ProductCard