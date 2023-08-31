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

purchaseItem(
    emptyCart,
    buyItemMoveFromCartToPurchases,
    applyTaxToItems,
    addItemToCart
)

function addItemToCart() {}

function applyTaxToItems() {}

function buyItemMoveFromCartToPurchases() {}

function emptyCart() {}

// Implement cart feature:
// 1. Add items to cart
// 2. Add 3% tax on items in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart