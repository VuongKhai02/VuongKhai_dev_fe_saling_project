


import { connect } from "react-redux"
import "../../css/login_screen.css"
import {
    Link,Outlet
  } from "react-router-dom"
  import { checkAuthor } from "../../redux/actionModule";
function Login(props){
    let {style} = props;
    let {checkAuthor} = props;
    return (
        <div>
            <section className="container">
                <div className="row content">
                    <div className="col-6 content-left">
                        <img  className="left-img w-50" src="images/logo.png" alt="" />
                        <h2 className="left-name" >Khai's Store</h2>
                        <h3 className="left-intro" >Connet with us to explore and buy fruits!</h3>
                    </div>
                    <div className="col-6 content-right ">
                        <div className="right-container ">
                            <div>Vì tôi chưa làm đc chức năng đăng nhập, nên bạn Chỉ cần bấm "Đăng Nhập" là được, ko cần nhập thông tin</div>
                            <div className="row m-2  "><input className="p-3 rounded w-100" type="text" name="tk" id="tk" placeholder="Email or Phone Number" /></div>
                            <div className="row m-2  "><input className="p-3 rounded w-100" type="password" name="tk" id="tk" placeholder="Password" /></div>
                            <div className="row m-2  "><Link onClick={() => checkAuthor(true)} className="p-3 rounded w-100 bg-primary btn_login" to="/">Đăng nhập</Link></div>
                            <div className="row m-2  "><p className="m-auto">Forgot account?</p></div>
                            <div className="row m-2  "><input className="p-3 rounded w-100 bg-success" type="button" value="Create New Account" /></div>
                        </div>
                        <p className="copyright" >Copyright &copy; VuongVanKhai - 2022</p>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

const mapDispatchToProps = {checkAuthor}
export default connect(null,mapDispatchToProps)(Login)