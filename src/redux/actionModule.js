


export const addToCart = (fru) => {
    return{
        type:"addtocart",
        value:fru,
    }
}

export const deleteFromCart = (id) => {
    return {
        type: "deletefromcart",
        value: id,
    }
}

export const changeQty = (id, typeOf) => {
    return {
        type: "changeqty",
        valueTypeOf: typeOf,
        valueId: id
    }
}

export const toggleCart = (status) => {
    return {
        type: "togglecart",
        value: status,
    }
}


export const toggleInforCustomer = (status) => {
    return {
        type: "toggleinfocustomer",
        value: status,
    }
}




export const changePosition = (e) => {
    return {
        type: "price_increasing",
    }
}

export const filterByPrice = () => {
    return {
        type: "price_filter_less500",

    }
}

// Author
export const checkAuthor = (status) => {
    return {
        type: "checkauthor",
        value: status
    }
}

// Scrool
export const scrollToTop = () => {
    return {
        type: "scrollTop",
    }
}