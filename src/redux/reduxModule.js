import { Link } from "react-router-dom";

import { duaVang, quyt } from "../images/index_img";
import {addToCart} from "./actionModule";
// import { toggleCart } from "./actionModule";

const fruitInit = [
    {
        id:1, 
        name: "Dưa vàng",
        original: "Việt Nam",
        oldPrice: 1000,
        newPrice: 300,
        image:"images/dua_vang.jpg",
        desc: `Dưa vàng (cantaloupe) là một loại quả thuộc họ Bầu bí, vỏ có nhiều đường chằng 
        chịt màu nâu và ruột vàng, mọng nước, vị ngọt. Dưới đây là các chất dinh dưỡng có trong loại quả này.`,
        package: "1kg",
        discount: 0,
        quantity: 3,
        quantity_order: 0
    },
    {
        id:2,
        name: "Quýt",
        original: "Trung Quốc",
        oldPrice: 500,
        newPrice: 700,
        image:"images/quyt.png",
        desc: `Quýt chứa nhiều chất dinh dưỡng và chất chống oxy hóa, giúp tăng cường hệ miễn dịch, hỗ trợ sức khỏe não bộ, cải thiện các vấn đề về da và tim mạch. 
        Quýt là loại trái cây quen thuộc, dễ ăn, có hàm lượng dinh dưỡng cao, chứa nhiều chất xơ.`,
        package: "0,5kg",
        
        discount: 5,
        quantity: 5,
        quantity_order: 0
    },
    {
        id:3,
        name: "Xoài",
        original: "Hàn Quốc",
        oldPrice: 600,
        newPrice: 900,
        image:"images/xoai.jpg",
        desc: `Xoài có chứa phenol (những hợp chất hữu cơ mà phân tử của chúng có nhóm hidroxyl liên kết trực tiếp với nguyên tử cacbon của vòng benzene), chẳng hạn như quercetin, isoquercitrin,
         astragalin, fisetin, axít galic, methylgallat và enzim có khả năng ngăn ngừa bệnh ung thư.`,
        package: "1kg",
        
        discount: 2,
        quantity: 4,
        quantity_order: 0
    },
    {
        id:4,
        name: "Táo",
        original: "Mỹ",
        oldPrice: 1500,
        newPrice: 2700,
        image:"images/táo.jpg",
        desc: `Táo là một trong những loại trái cây phổ biến nhất thế giới. Chúng có nhiều chất xơ, vitamin C và các chất chống oxy hóa khác nhau. 
        Duy trì thói quen ăn táo mỗi ngày có thể làm giảm lượng calo hàng ngày và thúc đẩy giảm cân lâu dài.`,
        package: "1 thùng",
        
        discount: 4,
        quantity: 6,
        quantity_order: 0
    },
    {
        id:5,
        name: "Hồng",
        original: "Việt Nam",
        oldPrice: 1300,
        newPrice: 500,
        image:"images/hong.jfif",
        desc: `Táo là một trong những loại trái cây phổ biến nhất thế giới. Chúng có nhiều chất xơ, vitamin C và các chất chống oxy hóa khác nhau. 
        Duy trì thói quen ăn táo mỗi ngày có thể làm giảm lượng calo hàng ngày và thúc đẩy giảm cân lâu dài.`,
        package: "1 thùng",
        
        discount: 8,
        quantity: 3,
        quantity_order: 0
    },
    {
        id:6,
        name: "Mận",
        original: "Việt Nam",
        oldPrice: 1900,
        newPrice: 1100,
        image:"images/man.jpg",
        desc: `Táo là một trong những loại trái cây phổ biến nhất thế giới. Chúng có nhiều chất xơ, vitamin C và các chất chống oxy hóa khác nhau. 
        Duy trì thói quen ăn táo mỗi ngày có thể làm giảm lượng calo hàng ngày và thúc đẩy giảm cân lâu dài.`,
        package: "1 thùng",
        
        discount: 9,
        quantity: 3,
        quantity_order: 0
    },
]

const cartInit = [
    
]
    
const initial = {
    isDisplay: false,
    fruits: fruitInit,
    cart:cartInit,
    isAuthor: true,
    filledCart: false,
    updateInPayingClicked: false,
    inforCustomer:false,
}

export const reducer = (state = (initial), action) =>
{
    switch (action.type) {
        case "addtocart":
            let {cart} = state;
            let fruit = action.value;
            let {isAuthor} = state;
            let idFruit = fruit.id;
            let fruitAdded = cart.find(cartItem => cartItem.id == idFruit)
            if(fruitAdded){
                if(fruitAdded.quantity_order >= fruit.quantity){
                    alert("Không đủ hàng");
                }
                else{
                    fruitAdded.quantity_order++;
                }
            }
            else{
                fruit.quantity_order = 1;
                cart.push(fruit)
            }
            if(isAuthor == true)
            {
                return{
                    ...state,
                    isDisplay:true,
                    filledCart: true,
                    cart:[...cart],
                    fruits: [...state.fruits]
                }
            }
            else{
                alert("Bạn phải đăng nhập!");
                return {
                    ...state,
                }
            }

        //Delete item from cart
        case "deletefromcart":
            let idItemDelete = action.value;
            let newCart = state.cart.filter(item => item.id !== idItemDelete);
            if(newCart == 0 ){
                return {
                    ...state,
                    filledCart: false
                }
            }
            else
            {
                return {
                    
                    ...state,
                    //tại sao lại là ...newCarrt
                    cart:[...newCart]
                }
                
            }
        //Change qty:
        case "changeqty":
            let clickedFruitId = action.valueId;
            let clickedFruit = state.cart.find(item => item.id == clickedFruitId);
            if(action.valueTypeOf == "increase"){
                if(clickedFruit.quantity_order >= clickedFruit.quantity){
                    alert("Không đủ hàng");
                }
                else{
                    clickedFruit.quantity_order++;
                }
            }
            else if(action.valueTypeOf == "decrease"){
                clickedFruit.quantity_order--;
                if(clickedFruit.quantity_order == 0){
                    // state.cart.pop(clickedFruit);
                    let a = state.cart.filter(item => item.id != clickedFruitId)
                    console.log(a);
                    return {
                        ...state,
                        cart: [...a]
                    }

                }
            }
            if(state.cart == 0 ){
                return {
                    ...state,
                    filledCart: false,
                    cart:[...state.cart]
                }
            }
            else{
                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
        case "togglecart":
            if(state.isAuthor == true)
            {
                return {
                    ...state,
                    isDisplay: action.value,
                    updateInPayingClicked: action.value,
                }
            }
            else{
                alert("Bạn phải đăng nhập!");

                return {
                    ...state,
                }
            }

        // toggleinfocustomer
        case "toggleinfocustomer":
            return{
                ...state,
                inforCustomer: action.value,
            }

            // Change position
        case "price_increasing":
            let selectPriceElement = document.querySelector("select[name='price']").value;
            let {fruits} = state;
            if(selectPriceElement == "Asc"){
                let orderedCart = fruits.sort((a,b) =>  a.newPrice - b.newPrice );
                return{
                    ...state,
                    fruits: [...orderedCart]
                }
            }
            else if(selectPriceElement == "Desc"){
                let orderedCart = fruits.sort((a,b) =>  b.newPrice - a.newPrice );
                return{
                    ...state,
                    fruits: [...orderedCart]
                }
            }

        // Filter by price
        case "price_filter_less500":
            let selectPriceDetailElement = document.querySelector("select[name='price_detail']").value;
            let selectOriginalDetailElement = document.querySelector("select[name='original_detail']").value;
            // if(selectPriceDetailElement == "f_less_1000" && selectOriginalDetailElement =="HanQuoc"){
            //     let newFruits = state.fruits.filter(item => (item.newPrice < 1000 && item.original == "Hàn Quốc"))
            //     return{
            //         ...state,
            //         fruits:[...newFruits]
            //     }
            // }
            if(selectPriceDetailElement == "f_less_1000"){
                if(selectOriginalDetailElement =="HanQuoc"){
                    let newFruits = state.fruits.filter(item => (item.newPrice < 1000 && item.original == "Hàn Quốc"))
                    return{
                        ...state,
                        fruits:[...newFruits]
                    }
                }
                if(selectOriginalDetailElement =="TrungQuoc"){
                    let newFruits = state.fruits.filter(item => (item.newPrice < 1000 && item.original == "Trung Quốc"))
                    return{
                        ...state,
                        fruits:[...newFruits]
                    }
                }
                if(selectOriginalDetailElement == ""){
                    let newFruits = state.fruits.filter(item => (item.newPrice < 1000 ))
                    return{
                        ...state,
                        fruits:[...newFruits]
                    }
                }

            }
        // Author
        case "checkauthor":
            return {
                ...state,
                isAuthor: action.value,
            }
        default:
            return state;
    }
}





