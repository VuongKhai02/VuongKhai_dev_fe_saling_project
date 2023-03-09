import { duaVang } from "../../images/index_img";
import {connect} from "react-redux";
import { addToCart } from "../../redux/actionModule";

import {
    Link,
  } from "react-router-dom";

import {useParams} from "react-router-dom"


function FruitItem(props){
    let {fruitItem} = props;
    let {addToCart} = props;

    return (
        <div>
            
            <div className="seller-item">
                <div href="" className="seller-product">
                    <a href="" className="seller-img">
                        <img src={fruitItem.image} alt=""/>
                    </a>
                    <div className="seller-discount">{fruitItem.discount}%</div>
                    <button className="seller-btn" onClick={()=>{addToCart(fruitItem)}}><span>Thêm vào giỏ</span></button>
                </div>
                <div className="seller-description">
                    <a href="" className="seller-description-title"><p>{fruitItem.original}</p></a>
                    <a href="" className="seller-description-title"><h3>{fruitItem.name}</h3></a>
                    <p className="seller-description-package"><i >Đóng gói {fruitItem.package}</i></p>
                    <div className="seller-price">
                        <span className="oldPrice">{fruitItem.newPrice} ₫</span>
                        <span className="initial-price newPrice">{fruitItem.oldPrice}</span>    
                    </div>
                    <div className="seller-detail">
                        <Link to ={`/fruitDetails/${fruitItem.id}`}  onClick={() => {
    window.scrollTo(0, 0);
  }} >Chi tiết</Link>
                    </div>
                </div>
            </div>
             
        </div>
    )
}

const mapDispatchToProps = {addToCart};
export default connect(null,mapDispatchToProps)(FruitItem);