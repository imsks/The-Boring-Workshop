const PRODUCTS = [
    {
        id: 1,
        title: "Laptop",
        price: 20,
        description: "New Laptop",
        image: "https://media.istockphoto.com/id/1157789866/photo/modern-computer-laptop-with-blank-screen-on-counter-barand-window-view.jpg?s=612x612&w=0&k=20&c=Idggc96ENAdz7R_ANTzvWpMTbaUcTV4JvJYKJHAD71A="
    },
    {
        id: 2,
        title: "Phone",
        price: 40,
        description: "New Phone",
        image: "https://media.istockphoto.com/id/1157789866/photo/modern-computer-laptop-with-blank-screen-on-counter-barand-window-view.jpg?s=612x612&w=0&k=20&c=Idggc96ENAdz7R_ANTzvWpMTbaUcTV4JvJYKJHAD71A="
    },
    {
        id: 3,
        title: "T-Shirt",
        price: 60,
        description: "New T-Shirt",
        image: "https://media.istockphoto.com/id/1157789866/photo/modern-computer-laptop-with-blank-screen-on-counter-barand-window-view.jpg?s=612x612&w=0&k=20&c=Idggc96ENAdz7R_ANTzvWpMTbaUcTV4JvJYKJHAD71A="
    },
    {
        id: 4,
        title: "Shirt",
        price: 80,
        description: "New Shirt",
        image: "https://media.istockphoto.com/id/1157789866/photo/modern-computer-laptop-with-blank-screen-on-counter-barand-window-view.jpg?s=612x612&w=0&k=20&c=Idggc96ENAdz7R_ANTzvWpMTbaUcTV4JvJYKJHAD71A="
    },
    {
        id: 5,
        title: "Watch",
        price: 80,
        description: "New Watch",
        image: "https://media.istockphoto.com/id/1157789866/photo/modern-computer-laptop-with-blank-screen-on-counter-barand-window-view.jpg?s=612x612&w=0&k=20&c=Idggc96ENAdz7R_ANTzvWpMTbaUcTV4JvJYKJHAD71A="
    }
]

const localStorageKeys = {
    PRODUCTS: "PRODUCTS"
}

// Show All Products
const displayProducts = (products) => {
    // Get the Products Element
    const productsElement = document.getElementById("products")

    // Create Product Node
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
                        class="bg-black text-white px-2 py-1 rounded"
                        onclick={handleAddToCart(${id})}
                        >Add to Cart</button
                    >
                </div>`
    })

    // Inject Product Nodes into productsElement
    if (productsElement) productsElement.innerHTML = productsHTML
}

displayProducts(PRODUCTS)

const handleAddToCart = (productId) => {
    // Get The Product
    const product = PRODUCTS.find((product) => product.id === productId)

    const cartItems =
        JSON.parse(localStorage.getItem(localStorageKeys.PRODUCTS)) ?? []

    // Check if Cart Item is already added
    const isAlreadyAdded = cartItems.find(
        (cartItem) => cartItem.id === productId
    )

    if (isAlreadyAdded) return

    cartItems.push(product)

    // Store product into Local Storage
    const stringifiedProduct = JSON.stringify(cartItems)

    localStorage.setItem(localStorageKeys.PRODUCTS, stringifiedProduct)
}
