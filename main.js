
let cartCount = 0;

let cards = [
    [
        "Kawasaki H2R",
        
        2500,

        "19ZX1000Y_201GY3DRF1CG_A_001.png",

        "Kawasaki H2R Beschrijving",

        "Nee"
    ],
    [
        "Yamaha",

        799.99,

        "s11728_yamaha_bike_isolated_on_white_background_17b769a0-b1bc-4ed2-a783-cb3def840146_1-photoroom.png",

        "Yamaha Beschrijving",

        "Nee"
    ],
    [
        "BMW S1K",

        2999.99,

        "bmw-transparent-S1000RR_1445x.webp",

        "BMW S1K Beschrijving",
        
        "Ja"
    ]
];

const container = document.getElementById('product-container');

for (let i = 0; i < cards.length; i++) {
    let beschikbaar = cards[i][4] === "Ja";
    let disabledClass = beschikbaar ? ""
    :
    "product__button--disabled";
    let disabledAttr = beschikbaar ? "" : "disabled";
}

function AddToCart(button) {
    if (button.classList.contains('product__button--disabled') || button.disabled)
    {
        return;
    }
    cartCount++;
    const badge = document.getElementById('cart-badge');
    badge.textContent = cartCount;
    badge.classList.remove('hidden');
}

function RemoveFromCart() {
    if (cartCount > 0) {
        cartCount--;
    }
    const badge = document.getElementById('cart-badge');
    badge.textContent = cartCount;
    badge.classList.remove('hidden');
}
