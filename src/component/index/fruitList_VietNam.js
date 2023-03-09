import FruitItem from "./fruitItem";
import {connect} from "react-redux";
import { changePosition,filterByPrice } from "../../redux/actionModule";
import "../../redux/reduxModule"


import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextArrow_Slick from "./nextArrow_slick";
import PrevArrow_Slick from "./prevArrow_slick";



function FruitList_VietNam(props){
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
                    <h2>TRÁI CÂY VIỆT NAM</h2>

                    {/*
                        <select onChange={() => changePosition()}  name="price" id="price">
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

                            <input onClick={() => filterByPrice()} type="button" value="Lọc" />
                        </div>
                    */}
                </div>
                <div className="content">
                      <div className="seller">
                        <Slider {...settings}>
                        {listFruits
                            .filter(fru => fru.original === 'Việt Nam')
                            .map(fru => <FruitItem fruitItem={fru} key={fru.id} />)
                        }
                        </Slider>
                      </div>
                </div>
                <div className="btn_more  " >
                    <button className="btn-success rounded">Xem thêm</button>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({listFruits: state.fruits})
const mapDispatchToProps ={changePosition,filterByPrice}
export default connect(mapStateToProps,mapDispatchToProps)(FruitList_VietNam);