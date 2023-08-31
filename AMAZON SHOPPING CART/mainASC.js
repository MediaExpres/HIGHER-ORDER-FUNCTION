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
        const updateCart = user.cart.concat(item)
        return Object.assign({}, user, {cart:updateCart})
    }

    function applyTaxToItems(user) {
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
        return Object.assign({}, user, {purchases: user.cart})
    }

    function emptyCart(user) {
        return user
    }

    // Implement cart feature:
    // 1. Add items to cart
    // 2. Add 3% tax on items in cart
    // 3. Buy item: cart --> purchases
    // 4. Empty cart