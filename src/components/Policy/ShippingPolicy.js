import React from 'react'
import BreadCrumb from '../layout/BreadCrumb'
import Meta from '../layout/Meta'
const ShippingPolicy = () => {
    return (
        <>
            <Meta title={"Chính sách vận chuyển"} />
            <BreadCrumb title="Chính sách vận chuyển" />
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

export default ShippingPolicy