import './App.css';
import { toggleCart } from './redux/actionModule';
import {connect} from "react-redux";
import {
  Link,Outlet
} from "react-router-dom"
import CartList from './component/index/cartList';
import { logo } from './images/index_img';
import Slider from 'react-slick';
import NextArrow_Slick from './component/index/nextArrow_slick';
import PrevArrow_Slick from './component/index/prevArrow_slick';

function App(props) {
    let {isDisplay,style} = props;
    // Function
    let {toggleCart} = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow_Slick />,
        prevArrow: <PrevArrow_Slick />,
      };
  return (
    <div>
            <header  >
                <div className="wrapper">
                    <div className="menu-left">
                        <ul className="menu-main">
                            <li><a href="">TRÁI CÂY NỘI ĐỊA</a></li>
                            <li><a href="">TRÁI CÂY NHẬP KHẨU</a></li>
                            <li id="list-block"><a href="">THÔNG TIN</a>
                                <ul className="menu-child">
                                    <Link to="/blog">
                                        <li>Blog</li>
                                    </Link>
                                    
                                    <li><a href="">Về chúng tôi</a></li>
                                    <li><a href="">Long & Short</a></li>
                                </ul>
                            </li>
                            <Link to="/login">
                                <li>ĐĂNG NHẬP<i className="fa-solid fa-user"></i></li>
                            </Link>
                        </ul>   
                    </div>
                    <div className="menu-right mb-0">
                        <ul className='mb-0'>
                            <li><a onClick={() => {toggleCart(true)}}>Giỏ hàng<i className="fa-solid fa-cart-shopping"></i></a></li>
                            
                        {
                            isDisplay == true && 
                            <CartList />
                        }
                            <li><a href=""><i className="fa-solid fa-magnifying-glass icon"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="logo">
                  <Link to="/"> <img  src={logo} alt="logo"/> </Link>
                </div>
            </header>

            
                    
{/*  */}
            <Outlet />
{/*  */}
            <footer>
                <section className="footer-root">

                </section>
                <section className="footer-root">
                    <div className="form-subcription">
                        <p className="footer-text">NHẬN THÔNG TIN MỚI NHẤT TỪ KHAI STORE</p>
                        <form action="">
                            <div className="info">
                                <select name="gender" id="gender">
                                    <option value="gender">Giới tính</option>
                                    <option value="male">Nam</option>
                                    <option value="female">Nữ</option>
                                </select>
                                <input type="text" name="fullName" placeholder="Họ tên..."/>
                            </div>
                            <div className="email">
                                <input type="email" name="email" placeholder="Email..."/>
                            </div>
                            <button><span>ĐĂNG KÝ NGAY</span></button>
                        </form>
                    </div>

                    <div className="footer-contact">
                        <p className="footer-text">Liên lạc</p>
                        <div className="contact-info">
                            <p>cskh@khaistore.com</p> 
                            <p>0868889103</p>
                        </div>
                        <div className="contact-social">
                            <img src="https://curnonwatch.com/_next/static/media/icon_fb.ba9f5d29.svg" alt="" className="social-img"/>
                            <img src="https://curnonwatch.com/_next/static/media/icon_insta.9353e397.svg" alt="" className="social-img"/>
                            <img src="https://curnonwatch.com/_next/static/media/icon_youtube.dee9fd66.svg" alt="" className="social-img"/>
                        </div>
                        <div className="contact-pay">
                            <img src="https://curnonwatch.com/_next/static/media/cod.10bcbd91.png" alt="" className="img-pay"/>
                            <img src="https://curnonwatch.com/_next/static/media/fundiin.34ef01d3.png" alt="" className="img-pay"/>
                            <img src="https://curnonwatch.com/_next/static/media/momo.1a8e86d8.png" alt="" className="img-pay"/>
                            <img src="https://curnonwatch.com/_next/static/media/vnpay.3fa45c06.png" alt="" className="img-pay"/>
                        </div>
                    </div>

                    <div className="footer-store">
                        <p className="footer-text">HANOI STORES</p>
                        <div className="footer-address">
                            <p>Chợ Long Biên</p>
                            <p>Hồng hà - Phúc xá - Ba đình - Hà nội</p>
                            </div>
                    </div>
                </section>
                
                <section className="footer-navbar">
                    <ul className="navbar-left">
                        <li><a href="">TRÁI CÂY TRONG NƯỚC</a></li>
                        <li><a href="">TRÁI CÂY NHẬP KHẨU</a></li>
                    </ul>

                    <ul className="navbar-right">
                        <li><a href="">CHÍNH SÁCH VẬN CHUYỂN</a></li>
                        <li><a href="">ĐỔI TRẢ & BẢO HÀNH</a></li>
                    </ul>
                </section>

                <section className="footer-boxSection">
                    <div className="footer-license">
                        <p className="footer-text">© 2021 - Bản quyền của CTCP PHÁT TRIỂN SẢN PHẨM SÁNG TẠO VIỆT</p>
                        <p className="text-info">Giấy chứng nhận ĐKKD số 0108150321 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội
                            cấp ngày 29/01/2018 
                            123C Thụy Khuê, Tây Hồ, Hà Nội
                        </p>
                    </div>
                    <div className="boxSection-img">
                        <img src="https://curnonwatch.com/_next/static/media/certificate.e07e4993.png" alt=""/>
                    </div>
                </section>
            </footer>
        </div>
  );
}

const mapStateToProps = (state) => ({isDisplay: state.isDisplay})
const mapDispatchToProps = {toggleCart}
export default connect(mapStateToProps,mapDispatchToProps)(App);
