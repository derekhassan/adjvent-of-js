const calculateBtn = document.querySelector('#calculate');
const billAmount = document.querySelector('#bill-amount');
const tipAmount = document.querySelector('#tip-amount');
const tipPerPerson = document.querySelector('#total-per-person');
const numOfPeople = document.querySelector('#number-of-people');

const calculateTip = () => {
    const checkedAmount = document.querySelector('[name="tip"]:checked').value;
    const totalTip = billAmount.value * (parseFloat(checkedAmount) / 100);
    tipAmount.innerHTML = totalTip.toFixed(2);
    tipPerPerson.innerHTML = (totalTip / numOfPeople.value).toFixed(2);
};

// tipRadios.forEach((radio) => radio.addEventListener('change', console.log));
calculateBtn.addEventListener('click', calculateTip);
