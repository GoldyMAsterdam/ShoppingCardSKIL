
let cartCount = 0;

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
