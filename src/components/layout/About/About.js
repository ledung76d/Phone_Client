import React from 'react'
import BreadCrumb from '../BreadCrumb'
import Meta from '../Meta'

const About = () => {
    return (
        <>
            <Meta title={"Về chúng tôi"} />
            <BreadCrumb title="Về chúng tôi" />
            <section id="about" className="py-16">
                <div className="container my-3 py-3">
                    <h1 className="text-center">Về chúng tôi</h1>
                    <hr />
                    <p className="lead ">
                        -VTmobile là một chuỗi các cửa hàng cung cấp và bán các sản phẩm điện thoại di động trong phạm vi cả nước, hợp tác kinh doanh hiệu quả với nhiều Công ty và thương hiệu lớn trên thế giới.
                        <br></br>
                        -Với triết lý " Chắc chắn cho tương lai", chúng tôi luôn hướng tới mục tiêu
                        phát triển bền vững cho chính Công ty và cho khách hàng của mình.Chất lượng quốc tế cho người Việt Nam
                        <br></br>
                        -Giá trị này dẫn dắt sự thành công của VT mobile tại nhiều quốc gia trên toàn cầu và cũng là động lực,
                        niềm tự hào cho đội ngũ VT mobile Việt Nam cùng nỗ lực vì cuộc sống dễ dàng và tốt đẹp hơn cho người Việt.
                        <br></br>
                        -Kinh doanh có trách nhiệm:
                        <br></br>
                        -Chúng tôi tin rằng một doanh nghiệp lớn mạnh luôn cần sự chung sức và đồng hành của tập thể gồm đối tác,
                        nhân viên và cộng đồng và cũng là giá trị mà chúng tôi cân nhắc cho sự phát triển bền vững của VT mobile.
                        -VT mobile được thành lập năm 2023 dưới tên gọi C.S, có trụ sở tại Hà Nội (VN). Khởi đầu là một đại lý điện thoại nhỏ, sau đó VT đã nhanh chóng mở rộng thêm các chi nhánh trên phạm vi toàn quốc.
                        Tại thời điểm đó, ý tưởng kinh doanh mới này đáp ứng đúng nhu cầu khách hàng, là tiền đề cho khái niệm bán lẻ tiện lợi

                    </p>

                    <h2 className="text-center py-4">Các hãng điện thoại mà VT mobile hiện đang phân phối và bán lẻ:</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 mb-3 px-3">
                            <div className="card h-100">
                                <img className="card-img-top img-fluid" src="images/logoIphone.jpg" alt="" height={160} />
                                <div className="card-body">
                                    <h5 className="card-title text-center"><br />Iphone</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-3 px-3">
                            <div className="card h-100">
                                <img className="card-img-top img-fluid" src="images/logoSamsung.jpg" alt="" height={160} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Samsung</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-3 px-3">
                            <div className="card h-100">
                                <img className="card-img-top img-fluid" src="images/logoOppo.jpg" alt="" height={160} />
                                <div className="card-body">
                                    <h5 className="card-title text-center"><br /><br /><br /><br /><br /><br /><br />Oppo</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-3 px-3">
                            <div className="card h-100">
                                <img className="card-img-top img-fluid" src="images/logoXiaomi.jpg" alt="" height={160} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Xiaomi</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-3 px-3">
                            <div className="card h-100">
                                <img className="card-img-top img-fluid" src="images/logoRealme.png" alt="" height={160} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Realme</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-3 px-3">
                            <div className="card h-100">
                                <img className="card-img-top img-fluid" src="images/logoVivo.jpg" alt="" height={160} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Vivo</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About