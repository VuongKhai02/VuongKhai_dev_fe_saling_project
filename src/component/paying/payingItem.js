
import {connect} from "react-redux";
import CartItem from "../index/cartItem";
import { deleteFromCart, changeQty } from "../../redux/actionModule";


function PayingItem(props){
    let {cartItem,isDisplay,updateInPayingClicked,style} = props;
    
    let { deleteFromCart, changeQty } = props;
    return (
        <div>
            <div className="miniCart-container" style={{position:'inherit'}}>
                <div className="miniCart-body">
                    <div className="miniCart-item">
                        <div className="cartItem-img">
                            <img src={cartItem.image} alt=""  />
                            {
                                updateInPayingClicked == true &&
                                <button onClick={() => {deleteFromCart(cartItem.id)}}>
                                    <i className="fa-solid fa-xmark" ></i>
                                </button>
                            }
                        </div>
                        <div className="cartItem-box">
                            <div className="cartItem-boxInfo mb-0">
                                <h3 className="cartItem-infoName">{cartItem.name}</h3>
                                <div className="cartItem-infoPrice">
                                    <p className="cartItem-newPrice">{cartItem.newPrice} ₫</p>
                                    <p className="cartItem-oldPrice">{cartItem.oldPrice} ₫</p>
                                </div>
                            </div>
                            <div className="cartItem-itemOption">
                                <p className="cartItem-option">{cartItem.package}</p>
                                {
                                    updateInPayingClicked == true &&
                                    <div className="cartItem-btnQuantity">  
                                        <button onClick={() => {
                                            changeQty(cartItem.id, "decrease")}}><i className="fa-solid fa-minus quantity"></i></button>
                                        <p className="quantity-text mb-0">Qty: {cartItem.quantity_order}</p>
                                        <button onClick={() => {
                                            changeQty(cartItem.id, "increase")}}><i className="fa-solid fa-plus quantity" ></i></button>
                                    </div>
                                }
                                {
                                    updateInPayingClicked == false &&
                                    <p className="quantity-text">Qty: {cartItem.quantity_order}</p>

                                }
                            </div>
                        </div>
                    </div>
                            
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ isDisplay:state.isDisplay})
const mapDispatchToProps = { changeQty, deleteFromCart}

export default connect(mapStateToProps, mapDispatchToProps)(PayingItem);