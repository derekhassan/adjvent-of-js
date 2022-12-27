const slider = document.querySelector('#priceRange');
const dollarsSpan = document.querySelector('.dollars');

const onInput = (e) => {
    const amount = e.target.value;
    if (parseInt(amount) === 0) {
        return (dollarsSpan.innerHTML = '0.00');
    }
    const cents = amount.slice(-2);
    const dollars = amount.replace(cents, '');
    dollarsSpan.innerHTML = `${dollars}.${cents}`;
};

slider.addEventListener('input', onInput);
