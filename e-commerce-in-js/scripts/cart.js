const localStorageKeys = {
    PRODUCTS: "PRODUCTS"
}

// Show All Products
const displayProducts = (products) => {
    // Get the Products Element
    const productsElement = document.getElementById("cart")

    // Loop over all the products
    const productsHTML = products.map((product) => {
        const { id, title, description, price, image } = product

        return `<div class="product p-2 border border-2" id=${id}>
                    <img
                        src=${image}
                        class="w-64"
                    />
                    <h3 class="text-2xl">${title}</h3>
                    <p class="text">${description}</p>
                    <p class="text-xl">${price}</p>
                    <button
                        id="add-cart"
                        class="bg-red-500 text-white px-2 py-1 rounded"
                        onclick={handleRemoveFromCart(${id})}
                        >Remove from Cart</button
                    >
                </div>`
    })

    // Inject Product Nodes into productsElement
    if (productsElement) productsElement.innerHTML = productsHTML
}

const init = () => {
    const cartItems =
        JSON.parse(localStorage.getItem(localStorageKeys.PRODUCTS)) ?? []

    displayProducts(cartItems)
}

init()

// Handle Remove from Cart
const handleRemoveFromCart = (productId) => {
    const cartItems =
        JSON.parse(localStorage.getItem(localStorageKeys.PRODUCTS)) ?? []

    // Filter out all the cart items which doesn't have same product id
    const updatedCart = cartItems.filter(
        (cartItem) => cartItem.id !== productId
    )

    // Store product into Local Storage
    const stringifiedProduct = JSON.stringify(updatedCart)

    localStorage.setItem(localStorageKeys.PRODUCTS, stringifiedProduct)

    // Display updated Products
    displayProducts(updatedCart)
}
