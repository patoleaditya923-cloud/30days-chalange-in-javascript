let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    saveCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("total");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
    });

    total.textContent = totalPrice;
    cartCount.textContent = cart.length;
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

displayCart();