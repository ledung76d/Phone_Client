import React from 'react'
import BreadCrumb from '../layout/BreadCrumb'
import Meta from '../layout/Meta'
const Signup = () => {
    return (
        <>
            <Meta title={"Đăng ký tài khoản"} />
            <BreadCrumb title="Đăng ký tài khoản" />
            <div className='container-xxl'>
                <div className="login-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Tạo tài khoản mới</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <input type="text" name="name" className='form-control' placeholder="Họ và tên*" />
                                    <input type="email" name="email" className='form-control' placeholder="Email*" />
                                    <input
                                        type="tel"
                                        name="mobile"
                                        className='form-control'
                                        placeholder="Số điện thoại"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        className='form-control'
                                        placeholder="Mật khẩu"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        className='form-control'
                                        placeholder="Nhập lại mật khẩu"
                                    />
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button className="button border-0">Đăng ký</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup