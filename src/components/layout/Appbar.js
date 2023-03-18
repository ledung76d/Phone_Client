import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"

const AppBar = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Freeship cho đơn hàng lớn hơn 2 triệu</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white'>
                                Hotline:
                                <a className='text-white' href='tel: 0978569372'>0978569372</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h3>
                                <Link to="/" className='text-white'>
                                    <img
                                        src='images/logoVT.png'
                                        className='img-fluid gap-15'
                                        style={{ width: "80px", height: "80px" }}
                                        alt=""
                                    />
                                </Link>
                            </h3>
                        </div>
                        <div className='col-5'>
                            <div className="input-group">
                                <input
                                    type="text" className="form-control py-2"
                                    placeholder="Tìm kiếm sản phẩm ở đây..."
                                    aria-label="Tìm kiếm sản phẩm ở đây..."
                                    aria-describedby="basic-addon2" />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between '>
                                {/* <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/compare.svg' alt='compare'></img>
                                        <p className='mb-0'>Compare <br /> Products</p>

                                    </Link>
                                </div> */}
                                {/* <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/wishlist.svg' alt='wishlist'></img>
                                        <p className='mb-0'>Favourite <br /> wishlist</p>
                                    </Link>
                                </div> */}
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/user.svg' alt='user'></img>
                                        <p className='mb-0'>
                                            <Link className='text-white' to='/login'>Đăng nhập</Link>
                                            <br />
                                            Tài khoản
                                        </p>

                                    </Link>
                                </div>
                                <div>
                                    <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/cart.svg' alt='cart' />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>0 VND</p>
                                        </div>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-30'>
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <img src='/images/menu.svg' alt='' />
                                            <span className='me-5 d-inline-block'>Phân loại sản phẩm</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <Link to='/'>Trang chủ</Link>
                                        <Link to='/products'>Sản phẩm</Link>
                                        <Link to='/about'>Về chúng tôi</Link>
                                        <Link to='/blog'>Blogs</Link>
                                        <Link to='/contact'>Liên hệ</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}

export default AppBar