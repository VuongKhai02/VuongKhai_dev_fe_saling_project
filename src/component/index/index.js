import CartList from "./cartList";
import FruitList from "./fruitList";
import {connect} from "react-redux";
import { logo } from "../../images/index_img";


import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FruitList_VietNam from "./fruitList_VietNam";

function Index(props){
    let{isDisplay} = props;
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
        <div>
            <section className="banner">
                <div className="box-content">
                    <div className="content">
                        <p>TRÁI CÂY SẠCH</p>
                        <h2>CHUỖI CUNG ỨNG TOÀN CẦU</h2>
                        <p id="description">Đa dạng các loại mặt hàng</p>
                        <div>
                            <button><span>TRÁI CÂY</span></button>
                        </div>
                    </div>
                </div>
                <ul className="extra">
                    <li><i className="fa-solid fa-truck-arrow-right icon"></i>FREESHIP ĐƠN HÀNG 500K</li>
                    <li><i className="fa-solid fa-shield icon"></i>GIẤY CHỨNG NHẬN SẢN PHẨM SẠCH</li>
                    <li><i className="fa-solid fa-box-archive icon"></i>HOÀN TRẢ HÀNG NGAY LẬP TỨC</li>
                </ul>
            </section>
            <section className="category">
                <div className="content">
                    <a href="" className="category-img category-item1">
                        <div className="category-desciption-onhover">
                            <p>Xem chi tiết</p>
                        </div>
                        <div className="category-description">
                            <h3>TRÁI CÂY TRONG NƯỚC</h3>
                            <button><span>Xem thêm</span></button>
                        </div>
                    </a>
                    <a href="" className="category-img category-item2">
                        <div className="category-desciption-onhover">
                            <p>Xem chi tiết</p>
                        </div>
                        <div className="category-description">
                            <h3>TRÁI CÂY NHẬP KHẨU</h3>
                            <button><span>Xem thêm</span></button>
                        </div>
                    </a>
                    <a href="" className="category-img category-item3">
                        <div className="category-desciption-onhover">
                            <p>Xem chi tiết</p>
                        </div>
                        <div className="category-description">
                            <h3>TRÁI CÂY THEO MÙA</h3>
                            <button><span>Xem thêm</span></button>
                        </div>
                    </a>
                </div>
            </section>
            {
                isDisplay == true && 
                <CartList />
            }
            <FruitList />
{/* 
            <section className="sellers-women">
                <div className="sellers-title">
                    <h2>TRÁI CÂY TRONG NƯỚC</h2>
                    <a href="">Xem thêm</a>
                </div>
                <div className="content">
                    <div className="seller">
                        <div className="seller-item">
                            <div href="" className="seller-product">
                                <a href="" className="seller-img">
                                    <img src="https://cdn.pixabay.com/photo/2020/08/10/13/16/apple-5477802_640.png" alt=""/>
                                </a>
                                <div className="seller-discount">-20%</div>
                                <button className="seller-btn"><span>Thêm vào giỏ</span></button>
                            </div>
                            <div className="seller-description">
                                <a href="" className="seller-description-title"><p>HAMMILTON</p></a>
                                <a href="" className="seller-description-title"><h4>SYLVIA</h4></a>
                                <div className="seller-price">
                                    <span>1.919.000 ₫</span>
                                    <span className="initial-price">2.399.000 ₫</span>
                                </div>
                            </div>
                        </div> 
                        <div className="seller-item">
                            <div href="" className="seller-product">
                                <a href="" className="seller-img">
                                    <img src="https://cdn.pixabay.com/photo/2020/08/10/13/16/apple-5477802_640.png" alt=""/>
                                </a>
                                <div className="seller-discount">-20%</div>
                                <button className="seller-btn"><span>Thêm vào giỏ</span></button>
                            </div>
                            <div className="seller-description">
                                <a href="" className="seller-description-title"><p>HAMMILTON</p></a>
                                <a href="" className="seller-description-title"><h4>CORA</h4></a>
                                <div className="seller-price">
                                    <span>1.919.000 ₫</span>
                                    <span className="initial-price">2.399.000 ₫</span>
                                </div>
                            </div>
                        </div> 
                        <div className="seller-item">
                            <div href="" className="seller-product">
                                <a href="" className="seller-img">
                                    <img src="https://cdn.pixabay.com/photo/2020/08/10/13/16/apple-5477802_640.png" alt=""/>
                                </a>
                                <div className="seller-discount">-20%</div>
                                <button className="seller-btn"><span>Thêm vào giỏ</span></button>
                            </div>
                            <div className="seller-description">
                                <a href="" className="seller-description-title"><p>HAMMILTON</p></a>
                                <a href="" className="seller-description-title"><h4>LORETTA</h4></a>
                                <div className="seller-price">
                                    <span>1.919.000 ₫</span>
                                    <span className="initial-price">2.399.000 ₫</span>
                                </div>
                            </div>
                        </div>   
                        <div className="seller-item">
                            <div href="" className="seller-product">
                                <a href="" className="seller-img">
                                    <img src="https://cdn.pixabay.com/photo/2020/08/10/13/16/apple-5477802_640.png" alt=""/>
                                </a>
                                <div className="seller-discount">-20%</div>
                                <button className="seller-btn"><span>Thêm vào giỏ</span></button>
                            </div>
                            <div className="seller-description">
                                <a href="" className="seller-description-title"><p>HAMMILTON</p></a>
                                <a href="" className="seller-description-title"><h4>LYDIA</h4></a>
                                <div className="seller-price">
                                    <span>1.919.000 ₫</span>
                                    <span className="initial-price">2.399.000 ₫</span>
                                </div>
                            </div>
                        </div>     
                    </div>
                   
                </div>
                
            </section> */}

            
            {/* <FruitList_VietNam /> */}



            <section className="data-projection">
                <div className="data-projection-content">
                    <div className="campaign-title">
                        <p>#FRUIT #FRESH</p>
                        <h2>FRUIT WITH PERMISSTION</h2>
                        <p id="campaign-description">Đại diện cho thương hiệu hoa quả sạch</p>
                        <button><span>Khám phá ngay</span></button>
                    </div>
                    <div className="campaign-playlist">
                        <div className="campaign-player">
                            <button><i className="fa-solid fa-play"></i></button>
                            <p>FRUIT COLLECTION</p>
                        </div>
                        <div className="campaign-player">
                            <button><i className="fa-solid fa-play"></i></button>
                            <p>FRUIT COLLECTION</p>
                        </div>
                        <div className="campaign-player">
                            <button><i className="fa-solid fa-play"></i></button>
                            <p>FRUIT COLLECTION</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="story-title">
                    <img className="story-logo" src={logo}alt=""/>
                    <div className="address_and_info">
                        <iframe className="embedMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7914259844597!2d105.8485877508542!3d21.04102998592295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5f01f24463%3A0x167839be8d6a7e91!2zQ2jhu6MgTG9uZyBCacOqbg!5e0!3m2!1svi!2s!4v1671341930875!5m2!1svi!2s" ></iframe>
                        {/* <div className="infoStore">
                        <ul>
                            <li>Chợ Long Biên</li>
                            <li>Hồng hà - Phúc xá - Ba đình - Hà nội</li>
                            <li>Sđt: 090930038</li>
                        </ul>
                        </div> */}
                    </div>
                    {/* <p>Cuối năm 2016, 3 chàng trai đam mê Startup và Đồng hồ quyết định thành lập Curnon, nhưng ngay từ đầu, 
                        chúng tôi đã biết rằng: Curnon sinh ra với một sứ mệnh lớn lao hơn, không chỉ dừng lại là một thương hiệu đồng hồ. 
                        Chúng tôi muốn mang tới một nguồn cảm hứng, một sự thay đổi về tư duy, về suy nghĩ và chính những cái 
                        chúng tôi gọi là trải nghiệm cho người trẻ.
                    </p>
                    <div className="story-img">
                        <img src="https://curnonwatch.com/_next/static/media/storyLarge.b54806b1.png" alt=""/>
                    </div> */}
                </div>
            </section>

            <section className="feedback">
                <div className="feedback-title">
                    <h3>Hãy đến trực tiếp cửa hàng để trải nghiệm các sản phẩm!</h3>
                </div>
            </section>
            </div>
    )
}

const mapStateToProps = (state) => ({isDisplay: state.isDisplay})

export default connect(mapStateToProps)(Index)