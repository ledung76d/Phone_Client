import React from 'react'
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee";
import BlogCard from '../Product/BlogCard';
import ProductCard from '../Product/ProductCard';
import SpecialProduct from '../Product/SpecialProduct'
const Home = () => {
    return (
        <>
            <section className='home-wrapper-1 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-banner position-relative'>
                                <img
                                    src='images/main-banner-1.jpg'
                                    className='img-fluid rounded-3'
                                    alt='main banner'
                                />
                                <div className='main-banner-content position-absolute'>
                                    <h4>Thế hệ Iphone  mới</h4>
                                    <h5>Iphone 14 series</h5>
                                    <p>Giá chỉ từ 19.990.000 VNĐ</p>
                                    <Link className='button'>Mua ngay</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                                <div className='small-banner position-relative '>
                                    <img
                                        src='images/catbanner-01.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Best seller</h4>
                                        <h5>Iphone 14 promax</h5>
                                        <p>Giá chỉ từ: <br /> 29.990.000 VNĐ</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative '>
                                    <img
                                        src='images/catbanner-02.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>New Arrival</h4>
                                        <h5>Buy Ipad Gen 10</h5>
                                        <p>Giá chỉ từ: <br /> 10.990.000 VNĐ</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative '>
                                    <img
                                        src='images/catbanner-03.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>New Arrival</h4>
                                        <h5>Buy Ipad Gen 10</h5>
                                        <p>Giá chỉ từ: <br /> 10.990.000 VNĐ</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative '>
                                    <img
                                        src='images/catbanner-04.jpg'
                                        className='img-fluid rounded-3'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>New Arrival</h4>
                                        <h5>Buy Ipad Gen 10</h5>
                                        <p>Giá chỉ từ: <br /> 10.990.000 VNĐ</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='servies d-flex align-items-center justify-content-between'>
                                <div className="d-flex align-items-center gap-15">
                                    <img src='images/service.png' alt='services' />
                                    <div>
                                        <h6>
                                            Miễn phí vận chuyển
                                        </h6>
                                        <p className="mb-0">
                                            Với các đơn hàng lớn hơn 2 triệu
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src='images/service-02.png' alt='services' />
                                    <div>
                                        <h6>
                                            Khuyến mại hot mỗi ngày
                                        </h6>
                                        <p className="mb-0">
                                            Tiết kiệm đến 25%
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src='images/service-03.png' alt='services' />
                                    <div>
                                        <h6>
                                            Hỗ trợ 24/7
                                        </h6>
                                        <p className="mb-0">
                                            Với đội ngũ kĩ thuật kinh nghiệm
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src='images/service-04.png' alt='services' />
                                    <div>
                                        <h6>
                                            Giá cả rẻ nhất thị trường
                                        </h6>
                                        <p className="mb-0">
                                            Bằng giá niêm yết của hãng
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src='images/service-05.png' alt='services' />
                                    <div>
                                        <h6>
                                            Thanh toán an toàn & tiện lợi
                                        </h6>
                                        <p className="mb-0">
                                            Đảm bảo tối đa
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Music&Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <div>
                                        <img src='images/headphone.jpg' alt='camera' />

                                    </div>
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Camera</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <div>
                                        <img src='images/camera.jpg' alt='camera' />

                                    </div>
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <div>
                                        <img src='images/tv.jpg' alt='camera' />

                                    </div>
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart watch</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <div>
                                        <img src='images/camera.jpg' alt='camera' />

                                    </div>
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Camera</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <div>
                                        <img src='images/camera.jpg' alt='camera' />

                                    </div>
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Camera</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <div>
                                        <img src='images/camera.jpg' alt='camera' />

                                    </div>
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Camera</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <div>
                                        <img src='images/camera.jpg' alt='camera' />

                                    </div>
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Camera</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <div>
                                        <img src='images/camera.jpg' alt='camera' />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='featured-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Bộ sản phẩm mới</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className='famous-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/famous-1.webp' className="img-fluid" alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5> Big Screen</h5>
                                    <h6>Apple watch series 8</h6>
                                    <p>Giá chỉ từ 9.990.000 VNĐ</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/famous-2.webp' className="img-fluid" alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='text-dark'> Studio Display</h5>
                                    <h6 className='text-dark'>600 nits of brightness</h6>
                                    <p className='text-dark'>27-inch 4k Retina display</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/famous-3.webp' className="img-fluid" alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='text-dark'> Smartphones</h5>
                                    <h6 className='text-dark'>Iphone 14 promax</h6>
                                    <p className='text-dark'>Giá chỉ từ 9.990.000 VNĐ</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/famous-4.webp' className="img-fluid" alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5 className='text-dark'> Home Speakers</h5>
                                    <h6 className='text-dark'>Room-filling sound</h6>
                                    <p className='text-dark'>Giá chỉ từ 9.990.000 VNĐ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="special-wrapper py-5 home-wrapper-2">
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Special Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                    </div>
                </div>
            </section>
            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our popular products</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className='marque-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-01.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-02.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-03.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-04.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-05.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-06.png' alt='brand' />
                                    </div>

                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-07.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-08.png' alt='brand' />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Blogs mới nhất của VT mobile</h3>
                        </div>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home