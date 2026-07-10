const products = [
    {
        name: "Ralph Lauren Shoes",
        price: 12499,
        image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI804P04916003_lifestyle?$rl_4x5_pdp$"
    },
    {
        name: "Nike Air Max",
        price: 8999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        name: "Apple Watch Series",
        price: 42999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
    },
    {
        name: "Sony WH-1000XM5 Headphones",
        price: 24999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        name: "Canon DSLR Camera",
        price: 58999,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        name: "Dell Inspiron Laptop",
        price: 72999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
        name: "Samsung 55-inch Smart TV",
        price: 54999,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500"
    },
    {
        name: "Mechanical Keyboard",
        price: 4999,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
    },
    {
        name: "Wireless Gaming Mouse",
        price: 2499,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
    },
    {
        name: "Gaming Chair",
        price: 15999,
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500"
    },
    {
        name: "Men's Hoodie",
        price: 1999,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    },
    {
        name: "Women's Handbag",
        price: 3499,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    },
    {
        name: "Backpack",
        price: 1799,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500"
    },
    {
        name: "Coffee Maker",
        price: 6999,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"
    },
    {
        name: "Microwave Oven",
        price: 9999,
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500"
    },
    {
        name: "Bluetooth Speaker",
        price: 3499,
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500"
    },
    {
        name: "The Alchemist Book",
        price: 399,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500"
    },
    {
        name: "Yoga Mat",
        price: 999,
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500"
    },
    {
        name: "Mountain Bicycle",
        price: 25999,
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=500"
    },
    {
        name: "PlayStation 5 Console",
        price: 54990,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500"
    }
];
const cart = [];
let total = 0;

// ---------------- Display Products ----------------

const productsContainer = document.getElementById("products");

products.forEach((item) => {
    const newCard = document.createElement("div");
    newCard.classList.add("product-card");

    newCard.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <h4>Price: ₹${item.price}</h4>
        <button class="add-btn">Add to Cart</button>
    `;

    const button = newCard.querySelector(".add-btn");

    button.addEventListener("click", () => {
        addToCart(item);
    });

    productsContainer.appendChild(newCard);
});

// ---------------- Add to Cart ----------------

function addToCart(product) {
    cart.push(product);
    console.log(product.name + " added to cart");
}

// ---------------- Cart ----------------

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function displayCart() {

    cartItems.innerHTML = "";

    total = cart.reduce((acc, curr) => acc + curr.price, 0);

    cart.forEach((item) => {

        const cartCard = document.createElement("div");

        cartCard.classList.add("cart-card");

        cartCard.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <hr>
        `;

        cartItems.appendChild(cartCard);
    });

    cartTotal.innerHTML = `Total: ₹${total}`;
}

// ---------------- Navigation ----------------

const goTo = document.getElementById("goTo");

goTo.addEventListener("click", () => {
    document.getElementById("products").style.display = "none";
    document.getElementById("cart-page").style.display = "block";

    displayCart();
});

const backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", () => {
    document.getElementById("cart-page").style.display = "none";
    document.getElementById("products").style.display = "grid";
});
