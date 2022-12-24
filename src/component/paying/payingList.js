import {connect} from "react-redux";
import { toggleCart, toggleInforCustomer } from "../../redux/actionModule";

import {
    Link,Outlet
  } from "react-router-dom"
import CartItem from "../index/cartItem";
import CartList from "../index/cartList";
import PayingItem from "./payingItem";
function PayingList(props){
    
    let {style} = props;
    let {cartList,updateInPayingClicked,inforCustomer} = props;
    let { toggleCart, toggleInforCustomer } = props;
    // Total price
    let totalPrice = cartList.reduce((total, current) => 
    (total += (current.quantity_order * current.newPrice )), 0)

    return (
        <div> 
            <Link to="/">Quay lại</Link>
            <div className="container" style={{paddingTop:"8rem"}}>
                <div className="row m-2">
                    <div className="col-6 paying_container_right">
                        <img src="images/logo.png" style={{ width:'200px', transform:"translateX(70px)"}} alt="" className="p_right-img mb-3"  />
                        <h3 className="mb-3">THÔNG TIN KHÁCH HÀNG</h3>
                        <div className="p_right-choice mb-3">
                            <input type="button" value="Đặt cho tôi" onClick={() => toggleInforCustomer(false)} />
                            <input type="button" value="Đặt cho người khác" onClick={() => toggleInforCustomer(true)} />
                        </div>
                        {
                            inforCustomer == true &&
                            <div className="row mt-2">
                                <input className="p-2" type="text" name="wish" id="wish" placeholder="Give a wish!" />
                            </div>
                        }
                        
                        <div className="row mt-2 ">
                                        <input className="p-2 col-12" type="email" name="email" id="email" placeholder="Email" />

                        </div>
                        <div className="row mt-2">
                                    <input className="col-6" type="text" name="name" id="name" placeholder="Name" />
                                    <input className="p-2 col-6" type="text" name="phone" id="phone" placeholder="Phone" />

                        </div>
                        <div className="row mt-2">
                                    <input className="p-2 col-12" type="text" name="addr" id="addr" placeholder="Address" />

                        </div>
                        <div className="row mt-2 ">
                                <select name="distric" id="distric" className="col-6" >
                                            <option value="0">Select Distric</option>
                                            <option value="HaNoi">Hà Nội</option>
                                            <option value="TpHcm">TP HCM</option>
                                        </select>
                                <select name="province" id="province" className="col-6">
                                            <option value="0">Select Province</option>
                                            <option value="HaNoi">Hưng Yên </option>
                                            <option value="TpHcm">Thái Bình</option>
                                        </select>
                        </div>
                        <div className="row">
                                    <label htmlFor="hideName">Hide label</label>
                                    <input type="checkbox" name="hideName" id="hideNam" />

                        </div>
                        <p className="mt-3">*Phương thức vận chuyển là FREESHIP với đơn hàng từ 7.000đ</p>
                        <button className="bg-success p-3 border rounded text-align-center" style={{transform:"translateX(200px)"}}>Tiếp tục</button>
                    </div>
                    <div className="col-6 paying_container_left" style={{paddingLeft:"5rem"}}>
                        <div className="p_left_head d-flex ">
                            <h2 className="mr-3">ĐƠN HÀNG</h2>
                            {
                                updateInPayingClicked == false &&
                                <a onClick={() => toggleCart(true)} href="#" className="mr-3" >Sửa</a>
                            }
                            {
                                updateInPayingClicked == true &&
                                <a onClick={() => toggleCart(false)} href="#">Lưu</a>
                            }
                        </div>
                        <div className="p_left-item">
                           {
                                    cartList.map(item => <PayingItem updateInPayingClicked={updateInPayingClicked} cartItem={item} key = {`${item.id}_${item.quantity_order}`} />)
                                }
                        </div>
                        <div style={{position:"absolute", bottom:"0"}}>

                            <div className="p_left-voucher mb-3">
                                <input type="text" name="voucher" id="voucher" placeholder="Enter voucer code:" />
                                <input type="button" value="ÁP DỤNG" />
                            </div>
                            <div className="p_left-cost d-flex">
                                <div className="cost-desc">
                                    <p>Thành tiền:</p>
                                    <p>Giảm giá:</p>
                                    <p>Phí ship: </p>
                                </div>
                                <div className="cost-number mb-3">
                                    <p>{totalPrice}</p>
                                    <p><i className="text-secondary">Bạn chưa áp mã giảm giá</i></p>
                                    <p>Miễn phí</p>
                                </div>
                            </div>
                            <div className="p_left-total d-flex">
                                <div className="total-desc mb-3">
                                    <p>Tổng tiền:</p>
                                    <p>Đã bao gồm VAT</p>
                                </div>
                                <div className="total-number">
                                    <p>{totalPrice}</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Outlet />
        </div>
    )
}


const mapStateToProps = (state) => ({cartList: state.cart, updateInPayingClicked:state.updateInPayingClicked,inforCustomer: state.inforCustomer})
const mapDispatchToProps = {toggleCart,toggleInforCustomer};
export default connect(mapStateToProps,mapDispatchToProps)(PayingList);
