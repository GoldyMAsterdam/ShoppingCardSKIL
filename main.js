
let cartCount = 0;

function changeLabel() {
    const button = document.querySelector('.product__button--disabled');
    button.innerHTML = 'Button Disabled'
}

function addToCart() {
    cartCount++;
    const badge = document.getElementById('cart-badge');
    badge.textContent = cartCount;
    badge.classList.remove('hidden');
}

function cart() {
    addToCart(),
    changeLabel();
}
