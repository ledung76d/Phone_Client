import React from 'react'
import BreadCrumb from '../layout/BreadCrumb'
import Meta from '../layout/Meta'

const Resetpass = () => {
    return (
        <>
            <Meta title={"Tạo mật khẩu mới"} />
            <BreadCrumb title="Tạo mật khẩu mới" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Tạo mật khẩu mới</h3>
                                <form action="" className="d-flex flex-column gap-15">
                                    <input
                                        type="password"
                                        name="password"
                                        className='form-control'
                                        placeholder="Mật khẩu mới"
                                    />
                                    <input
                                        type="password"
                                        name="confpassword"
                                        className='form-control'
                                        placeholder="Xác nhận mật khẩu"
                                    />
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button className="button border-0">Xác nhận</button>
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

export default Resetpass