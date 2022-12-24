


import "../../css/arrow.css";
function NextArrow_Slick(props) {
    const { onClick } = props;
    return(
        <div onClick={onClick} ><i className="fa-solid fa-angle-right"></i></div>
    )
}
export default NextArrow_Slick;