import React from 'react'
import BreadCrumb from '../BreadCrumb'
import Meta from '../Meta'
import BlogCard from './BlogCard'

const Blogs = () => {
    return (
        <>
            <Meta title={"VT blogs"} />
            <BreadCrumb title="Blogs" />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-part mb-3'>
                                <h3 className='filter-title'>Tìm kiếm blogs theo dòng điện thoại:</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Iphone</li>
                                        <li>Samsung</li>
                                        <li>Xiaomi</li>
                                        <li>Oppo</li>
                                        <li>Realme</li>
                                        <li>Vivo</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className='row d-flex gap-10'>
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blogs