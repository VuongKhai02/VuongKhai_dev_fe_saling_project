import { duaVang } from "../../images/index_img";
import { deleteFromCart,changeQty } from "../../redux/actionModule";
import {connect} from "react-redux";


function CartItem(props){
    let {cartItem} = props;

    let {deleteFromCart,changeQty} = props;
    return (
        <div>
            <div className="miniCart-item">
                <div className="cartItem-img">
                    <img src={`/${cartItem.image}`} alt=""/>
                    <button onClick={() => {deleteFromCart(cartItem.id)}}>
                        <i className="fa-solid fa-xmark" ></i>
                    </button>
                </div>
                <div className="cartItem-box">
                    <div className="cartItem-boxInfo">
                        <h3 className="cartItem-infoName">{cartItem.name}</h3>
                        <div className="cartItem-infoPrice">
                            <p className="cartItem-newPrice">{cartItem.newPrice} ₫</p>
                            <p className="cartItem-oldPrice">{cartItem.oldPrice} ₫</p>
                        </div>
                    </div>
                    <div className="cartItem-itemOption">
                        <p className="cartItem-option">{cartItem.package}</p>
                        <div className="cartItem-btnQuantity">  
                            <button onClick={() => {
                                changeQty(cartItem.id, "decrease")}}><i className="fa-solid fa-minus quantity"></i></button>
                            <p className="quantity-text mb-0">Qty: {cartItem.quantity_order}</p>
                            <button onClick={() => {
                                changeQty(cartItem.id, "increase")}}><i className="fa-solid fa-plus quantity" ></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = { deleteFromCart, changeQty }
export default connect(null,mapDispatchToProps)(CartItem);