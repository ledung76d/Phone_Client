import React from 'react'
import BreadCrumb from '../BreadCrumb'
import Meta from '../Meta'
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { IoMdInformationCircle } from "react-icons/io";

const Contact = () => {
    return (
        <>
            <Meta title={"Liên hệ"} />
            <BreadCrumb title="Liên hệ" />
            {/* <div className="container my-3 py-3">
                <h1 className="text-center">Contact Us</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Họ và tên:</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Mời bạn nhập họ và tên"
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Phone">Số điện thoại:</label>
                                <input
                                    type="tel"
                                    class="form-control"
                                    id="Phone"
                                    placeholder="Mới bạn nhấp số điện thoại"
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email:</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div class="form  my-3 ">
                                <label for="Password">Lời nhắn/Góp ý cho VT mobile:</label>
                                <textarea
                                    rows={5}
                                    class="form-control"
                                    id="description"
                                    placeholder="mời bạn để lại lời nhắn/góp ý "
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    class="my-2 px-4 mx-auto btn btn-dark"
                                    type="submit"
                                    disabled
                                >
                                    Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
            <div className='contact-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <iframe
                                title='addressMap'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.875032543727!2d105.78011591436861!3d21.037685692850715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454caaf2b115f%3A0xc05b77c8a5f461ae!2zxJDhuqFpIGjhu41jIFF14buRYyBnaWEgSMOgIE7hu5lpLCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1677169351155!5m2!1svi!2s"
                                width="600"
                                height="450"
                                className='w-100 border-0'
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className='col-12 mt-5'>
                            <div className='d-flex justify-content-between contact-with-wrapper'>
                                <div>
                                    <h3 className='mb-4 contact-title'>Hãy liên hệ với chúng tôi</h3>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <div>
                                            <input type="text" className='form-control' placeholder='Mời bạn nhập tên' />
                                        </div>
                                        <div>
                                            <input type="email" className='form-control' placeholder='Email*' />
                                        </div>
                                        <div>
                                            <input type="tel" className='form-control' placeholder='Số điện thoại' />
                                        </div>
                                        <div>
                                            <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='Ý kiến của bạn'></textarea>
                                        </div>
                                        {/* <div>
                                            <button className="button border-0 btn-dark">Gửi</button>
                                        </div> */}
                                        <div className="text-center">
                                            <button class="my-2 py-2 p-4 mx-auto btn btn-dark" type="submit">
                                                Gửi
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className='mb-4 contact-title'>Thông tin liên hệ của cửa hàng VT mobile:</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                                <AiFillHome className="fs-5" />
                                                <address className='mb-0'>Địa chỉ: số 144 Xuân Thủy, Cầu Giấy, Hà Nội</address>
                                            </li>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                                <BsFillTelephoneFill className="fs-5" />
                                                <a href="tel:+84978569372">Hotline: 0978569372</a>
                                            </li>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                                <BsFacebook className="fs-5" />
                                                <a href="https://www.facebook.com/Binhnonglanh48">Fanpage: Cửa hàng điện thoại VT mobile</a>
                                            </li>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                                <MdEmail className="fs-5" />
                                                <a href="mailto:19021371@vnu.edu.vn">
                                                    Email: 19021371@vnu.edu.vn
                                                </a>
                                            </li>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                                <IoMdInformationCircle className="fs-5" />
                                                <p className="mb-0">Thời gian hoạt động: Thứ 2-Chủ nhật (8h-21h)</p>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact