// This is the file written during the lecture Solution: Amazon, JavaScript: The Advanced Concepts within Zero To Mastery Academy
// Amazon shopping
    const user = {
        name: 'Kim',
        active: true,
        cart: [],
        purchases: [],
    }

    // purchaseItem(user, {name: 'laptop', price: 350})

    // function purchaseItem(user, item) {
    //     return Object.assign({}, user, {purchaseItem: item})
    // } -----> this is to simple, I want to use compose

    let amazonHistory = [] // added History

    const compose = (f, g) => (...args) => f(g(...args)); //adding actually compose the manual way
    purchaseItem(
        emptyCart,
        buyItemMoveFromCartToPurchases,
        applyTaxToItems,
        addItemToCart
    )(user, {name: 'laptop', price: 200})

    function purchaseItem(...fns) {
    return fns.reduce(compose)
    }

    function addItemToCart(user, item) {
        amazonHistory.push(user) // catches user adding item to cart
        const updateCart = user.cart.concat(item)
        return Object.assign({}, user, {cart:updateCart})
    }

    function applyTaxToItems(user) {
        amazonHistory.push(user) // user before taxes
        const {cart} = user;
        const taxRate = 1.3;
        const updatedCart = cart.map(item => {
            return {
                name: item.name,
                price: item.price*taxRate
            }
        }) 
        return Object.assign({}, user, {cart: updatedCart})
    }

    function buyItemMoveFromCartToPurchases(user) {
        amazonHistory.push(user) // catches to history the buying
        return Object.assign({}, user, {purchases: user.cart})
    }

    function emptyCart(user) {
        amazonHistory.push(user) // catches the empty cart
        return Object.assign({}, user, {cart: []})
    }

    // Implement cart feature:
    // 1. Add items to cart
    // 2. Add 3% tax on items in cart
    // 3. Buy item: cart --> purchases
    // 4. Empty cart

    amazonHistory
