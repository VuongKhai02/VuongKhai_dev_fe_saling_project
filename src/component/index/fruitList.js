import FruitItem from "./fruitItem";
import {connect} from "react-redux";
import { changePosition,filterByPrice } from "../../redux/actionModule";
import "../../redux/reduxModule"


import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextArrow_Slick from "./nextArrow_slick";
import PrevArrow_Slick from "./prevArrow_slick";



function FruitList(props){
    let {listFruits} = props;
    let {changePosition,filterByPrice} = props;
    console.log(listFruits);

    
    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow_Slick />,
        prevArrow: <PrevArrow_Slick />,
      };
    return (
        <div>
            
            <section className="sellers-men">
                <div className="sellers-title">
                    <h2>TRÁI CÂY TỔNG HỢP</h2>
                    <select onChange={() => changePosition()} name="price" id="price">
                        <option hidden >--Sắp xếp giá--</option>
                        <option value="Asc">Giá tăng dần</option>
                        <option value="Desc">Giá giảm dần</option>
                    </select>
                    <div>

                        <select name="price_detail" id="price_detail">
                            <option hidden value={""} >----Mức giá----</option>
                            <option value="f_less_1000">Dưới 1000k</option>
                            <option value="f_between100_2000">1000k - 2000k</option>
                            <option value="f_more_2000">Trên 2000k</option>
                        </select>
                        <select name="original_detail" id="price_detail">
                            <option hidden  value={""}>----Xuất xứ----</option>
                            <option value="HanQuoc">Hàn Quốc</option>
                            <option value="VietNam">Việt Nam</option>
                            <option value="TrungQuoc">Trung Quốc</option>
                            <option value="My">Mỹ</option>
                        </select>
                        <input onClick={() => filterByPrice()} type="button" value="Lọc" />
                    </div>
                    {/* <button onClick={() => changePosition()} >Asc Price</button> */}
                    {/* <div>

                        <label htmlFor="price" value="1" className="abc">Price less 1000</label>
                        <input type="checkbox" name="price" id="price" />
                        <label htmlFor="price">Country Han Quoc</label>
                        <input type="checkbox" name="country" id="country" />
                        <input type="button" value="Send" />
                    </div> */}
                    {/* <button  onClick={() => filterByPrice()}>Price: 500</button> */}
                    {/* <button ></button> */}
                </div>
                <div className="content">
                      <div className="seller">
                        <Slider {...settings}>
                            
                        {
                            listFruits.map(fru =>
                                    <FruitItem fruitItem = {fru} key = {fru.id} />)

                                
                        }
                        </Slider>
                      </div>
                </div>
                <div className="btn_more" >
                    <button>Xem thêm</button>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({listFruits: state.fruits})
const mapDispatchToProps ={changePosition,filterByPrice}
export default connect(mapStateToProps,mapDispatchToProps)(FruitList);