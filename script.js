const products = [
    { id: 1, name: 'Hazelnut per lb', price: 20, measurement: 'lb' },
    { id: 2, name: 'Avocado', price: 30, measurement: 'each' },
    { id: 3, name: 'Product 3', price: 25, measurement: 'unit' },
];

const cartItems = [];

function displayProducts() {
    const productsSection = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productElement);
    });
}

function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
        cartItems.push(productToAdd);
        displayCart();
    }
}

function displayCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });
}

function removeFromCart(productId) {
    const index = cartItems.findIndex(item => item.id === productId);

    if (index !== -1) {
        cartItems.splice(index, 1);
        displayCart();
    }
}

function displayCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} - $${item.price}
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsList.appendChild(listItem);
    });
}


displayProducts();
