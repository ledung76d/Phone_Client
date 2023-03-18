import React from 'react'
import BreadCrumb from '../layout/BreadCrumb'
import Meta from '../layout/Meta'
export const RefundPolicy = () => {
    return (
        <>
            <Meta title={"Chính sách đổi trả"} />
            <BreadCrumb title="Chính sách đổi trả" />
            <div className="policy-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="policy"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RefundPolicy
