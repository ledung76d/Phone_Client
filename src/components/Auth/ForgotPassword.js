import React from 'react'
import BreadCrumb from '../layout/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../layout/Meta'
const ForgotPassword = () => {
    return (
        <>
            <Meta title={"Quên mật khẩu"} />
            <BreadCrumb title="Quên mật khẩu" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3 text-dark">Tạo mật khẩu mới</h3>
                                <p className='text-center b-3 mt-2'>Mã xác nhận sẽ được gửi vào email của bạn</p>
                                <form action="" className="d-flex flex-column gap-15">
                                    <input type="email" name="email" className='form-control' placeholder="Email" />
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                                            <button className="button border-0" type="submit">
                                                Lấy mã
                                            </button>
                                            <Link to="/login" >{"<<"}Quay lại trang đăng nhập</Link>

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

export default ForgotPassword