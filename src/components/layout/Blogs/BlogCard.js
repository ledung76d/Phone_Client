import React from 'react'
import { Link } from "react-router-dom"
const BlogCard = () => {
    return (
        <>
            <div className='col-3'>
                <div className='blog-card'>
                    <div className='card-image'>
                        <img className='img-fluid' src='images/blog-1.jpg' alt='blog' />
                    </div>

                    <div className='blog-content'>
                        <p className='date'>14 Feb, 2023</p>
                        <h5 className='title'>
                            A beautiful sunday morning renaissance
                        </h5>
                        <p className='desc'>
                            Day la mo ta cua bai doc them moi quy vi an va read more de tiep tuc tim hieu them ve thong tin
                        </p>
                        <Link to='/' className='button'>Đọc thêm</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard