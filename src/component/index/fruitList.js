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

    let settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow_Slick />,
        prevArrow: <PrevArrow_Slick />,
        
    };
    if(listFruits.length == 1){
        settings = {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow_Slick />,
            prevArrow: <PrevArrow_Slick />,
        };
        
    }
    else{
        if(listFruits.length != 0){
        settings = {
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <NextArrow_Slick />,
            prevArrow: <PrevArrow_Slick />,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                  },
              ]
            };
        }
        else {
            settings = {
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                nextArrow: <NextArrow_Slick />,
                prevArrow: <PrevArrow_Slick />,
                responsive: [
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    },
                  ]
                };
            
        }
    }

    return (
        <div>
            
            <section className="sellers-all">
                <div className="sellers-title">
                    <h2>TR??I C??Y T???NG H???P</h2>
                    <select onChange={() => changePosition()} name="price" id="price">
                        <option hidden >--S???p x???p gi??--</option>
                        <option value="Asc">Gi?? t??ng d???n</option>
                        <option value="Desc">Gi?? gi???m d???n</option>
                    </select>
                    <div>

                        <select name="price_detail" id="price_detail">
                            <option hidden value={""} >----M???c gi??----</option>
                            <option value="f_less_1000">D?????i 1000k</option>
                            <option value="f_between100_2000">1000k - 2000k</option>
                            <option value="f_more_2000">Tr??n 2000k</option>
                        </select>
                        <select name="original_detail" id="price_detail">
                            <option hidden  value={""}>----Xu???t x???----</option>
                            <option value="HanQuoc">H??n Qu???c</option>
                            <option value="VietNam">Vi???t Nam</option>
                            <option value="TrungQuoc">Trung Qu???c</option>
                            <option value="My">M???</option>
                        </select>
                        <input onClick={() => filterByPrice()} type="button" value="L???c" />
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
                <div className="btn_more " >
                    <button className="btn-success rounded">Xem th??m</button>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({listFruits: state.fruits})
const mapDispatchToProps ={changePosition,filterByPrice}
export default connect(mapStateToProps,mapDispatchToProps)(FruitList);