
import {connect} from "react-redux";
import { duaVang } from "../../images/index_img";
import {useParams} from "react-router-dom"
import { addToCart } from "../../redux/actionModule";
import "../../css/fruit_detail.css"

function  Fruit_Detail(props) {
    let {id} = useParams();
    let {style} = props;
    let {listFruits} = props;
    let { addToCart } = props;
    let fruitItem = listFruits.find(fruit => fruit.id == id);

    return (
        <div> 
            <div className="container">

                <div className="row d-flex fd-container" style={{paddingTop:"8rem"}} >
                    <div className="col-5 fd_left border">
                        <img src={`/${fruitItem.image}`} alt="" className="fd_left-img" />
                        <div className="fd_left-discount">
                            {fruitItem.discount}%
                        </div>
                        <div className="fd_left-imgDetail_list d-flex row">
                            <img src={`/${fruitItem.image}`} alt="" className="fd-imgDetail_list-item col-3 border" /> 
                            <img src={`/${fruitItem.image}`} alt="" className="fd-imgDetail_list-item col-3 border" />
                            <img src={`/${fruitItem.image}`} alt="" className="fd-imgDetail_list-item col-3 border" />
                            <img src={`/${fruitItem.image}`} alt="" className="fd-imgDetail_list-item col-3 border" />
                        </div>
                    </div>
                    <div className="col-7 fd_right">
                        <div className="fd_right-container">
                            <div className="fd_right-info">
                                <h3><b>{fruitItem.name}</b></h3>
                                <ul className="fd_right-info_list ml-3">
                                    <li><b>Nguồn gốc: </b>{fruitItem.original}</li>
                                    <li><b>Quy cách đóng gói: </b>{fruitItem.package}</li>
                                </ul>
                            </div>
                            <div className="fd_right-infoPrice border border-secondary mb-3 ml-3">
                                <table className="m-3">
                                    <thead>

                                    </thead>
                                    <tbody>
                                        <tr className="m-3" >
                                            <td className="pr-3" >Giá bán:</td>
                                            <td className="pr-3" >Kho: </td>
                                        </tr>
                                        <tr className="m-3" >
                                            <td className="text-danger  pr-3">{fruitItem.newPrice}</td>
                                            <td  className="text-secondary pr-3" >{fruitItem.quantity} <i>(sản phẩm)</i> </td>
                                            <td > <button className="bg-primary pr-3 pt-1 pl-3 border rounded" onClick={() => {addToCart(fruitItem); alert("Đã thêm sản phẩm vào giỏ hàng")}}> ĐẶT HÀNG</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="fd_right-infoDesc">
                                <h3>Mô tả ngắn: </h3>
                                <p className="ml-3">{fruitItem.desc}</p>
                            </div>
                            <div className="fd_right-infoSocial">
                                <h3>Chia sẻ: </h3>
                                <ul className="product_about_social_nav d-flex ml-3 ">
                                    <li className="p-2 mr-2 border rounded bg-primary"><a className="text-white" href=""><i className="fa-solid fa-thumbs-up"></i>  Thích 251</a></li>
                                    <li className="p-2 mr-2 border rounded bg-primary" ><a className="text-white"  href="">Chia sẻ</a></li>
                                    <li className="p-2 mr-2 border rounded bg-info" ><a className="text-white"  href=""><i className="fa-brands fa-twitter"></i>Tweet</a></li>
                                    <li className="p-2 mr-2 border rounded bg-danger" ><a className="text-white"  href=""><i className="fa-brands fa-pinterest"></i>Save</a></li>
                                    <li className="p-2 mr-2 border rounded bg-primary" ><a className="text-white"  href=""><i className="fa-brands fa-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({listFruits: state.fruits})
const mapDispatchToProps = { addToCart }
export default connect(mapStateToProps,mapDispatchToProps)(Fruit_Detail);
