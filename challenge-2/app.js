const ADD_BUTTON_CLASS = 'add';
const IN_CART_BUTTON_CLASS = 'in-cart';
const menuButtons = document.querySelectorAll(
    [`.${ADD_BUTTON_CLASS}`, `.${IN_CART_BUTTON_CLASS}`].join(', ')
);
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const menuList = document.querySelector('.menu');

const subTotal = document.querySelector('.amount.price.subtotal');
const total = document.querySelector('.total');

const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0,
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0,
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0,
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0,
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0,
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0,
    },
];

/*
- In cart button HTML structure
<button class="in-cart">
    <img src="images/check.svg" alt="Check" />
    In Cart
</button>
*/

const currentCart = [];

const stringCurrencyToNumber = /[^0-9.-]+/g;
const convertInnerTextCurrencyToNumber = (element) =>
    Number(element.innerText.replace(stringCurrencyToNumber, ''));

const calculateItemSubtotal = (cartItemElement) => {
    const pricePerUnit = cartItemElement.querySelector('.price');
    const quantity = cartItemElement.querySelector('.quantity');

    return (
        convertInnerTextCurrencyToNumber(quantity) *
        convertInnerTextCurrencyToNumber(pricePerUnit)
    );
};

const updateCartTotals = () => {
    const cartItems = document.querySelectorAll('.cart-summary li');
    cartItems.forEach((cartItem) => {
        const itemSubtotal = calculateItemSubtotal(cartItem);
        const subtotalElement = cartItem.querySelector('.subtotal');

        subtotalElement.innerText = `$${itemSubtotal}`;
    });
};

const calculateCartSubtotal = () => {
    const itemSubtotals = document.querySelectorAll('.cart-summary .subtotal');
    const subtotal = Array.from(itemSubtotals)
        .map((itemSubtotal) => convertInnerTextCurrencyToNumber(itemSubtotal))
        .reduce((prevSubtotal, itemSubtotal) => prevSubtotal + itemSubtotal, 0);
    return subtotal;
};

const calculateTax = (subtotal) => (subtotal * 0.0975).toFixed(2);

updateCartTotals();
console.log(calculateTax(calculateCartSubtotal()));

// menuButtons.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const plateName =
//             e.target.parentElement.querySelector('.menu-item').textContent;
//         switch (e.target.className) {
//             case ADD_BUTTON_CLASS:
//                 if (menuItems.find(({ alt }) => alt === plateName)) {
//                     currentCart.push(plateName);
//                 }
//                 e.target.classList.remove(ADD_BUTTON_CLASS);
//                 e.target.classList.add(IN_CART_BUTTON_CLASS);
//                 break;
//             case IN_CART_BUTTON_CLASS:
//                 if (menuItems.find(({ alt }) => alt === plateName)) {
//                     currentCart.pop(plateName);
//                 }
//                 e.target.classList.remove(IN_CART_BUTTON_CLASS);
//                 e.target.classList.add(ADD_BUTTON_CLASS);
//                 break;
//         }
//         console.log(currentCart);
//     });
// });
