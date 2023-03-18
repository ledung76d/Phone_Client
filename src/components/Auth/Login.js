import React from 'react'
import BreadCrumb from '../layout/BreadCrumb'
import { Link } from 'react-router-dom'
import Meta from '../layout/Meta'
const Login = () => {
    return (
        <>
            <Meta title={"Đăng nhập"} />
            <BreadCrumb title="Đăng nhập" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Đăng nhập tài khoản</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <input type="email" name="email" className='form-control' placeholder="Email" />
                                    <input
                                        type="password"
                                        name="password"
                                        className='form-control'
                                        placeholder="Mật khẩu"
                                    />
                                    <div>
                                        <Link to="/forgotpassword">Quên mật khẩu?</Link>

                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button className="button border-0" type="submit">
                                                Đăng nhập
                                            </button>
                                            hoặc
                                            <Link to="/signup" className="button signup">
                                                Đăng ký
                                            </Link>
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

export default Login