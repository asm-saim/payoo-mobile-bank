
const validPin = 4321;
const transactionData = [];

//function to get input value:
function getInputValue(id) {
    const accessId = document.getElementById(id);
    const getValue = accessId.value;
    const convertInt = parseInt(getValue);
    return convertInt;
}
//

//function to get inner Text and make parseInt:
function getInnerTex(id) {
    const getTheValue = document.getElementById(id);
    const getTheText = getTheValue.innerText;
    const textToInt = parseInt(getTheText);
    return textToInt;
}

//function to set innerText:
function setInnerText(value) {
    const setInnerTex = document.getElementById("existing-amount");
    setInnerTex.innerText = value;
    return setInnerTex;
}

//function for toggling
function toggleFeature(id) {
    const forms = document.getElementsByClassName('forms');
    for (let form of forms) {
        form.style.display = 'none';
        document.getElementById(id).style.display = 'block';
    }
}

//function to toggle button

function toggleWithColor(id) {
    const btnEffect = document.getElementsByClassName('button-effect');
    for (let effect of btnEffect) {
        console.log(effect);
        effect.classList.remove("border-[#0874f2]", "bg-sky-50")
        effect.classList.add("border-gray-300")

    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-sky-50")
}


//add-money-feature
document.getElementById('add-money-btn').addEventListener('click',
    function (e) {
        e.preventDefault();
        const bankName = document.getElementById('bank-name').value;
        const bankAccountNumber = document.getElementById('bank-account-number').value;
        const bankAmount = getInputValue('amount'); //using function
        const bankPinNumber = getInputValue('pin-number'); //using function
        // console.log(bankName,bankAccountNumber,bankAmount,bankPinNumber);

        //Get the existing amount
        const existingAmount = getInnerTex('existing-amount');
        // console.log(existingAmount);

        //validation:
        if (bankAccountNumber.length !== 11 && bankAccountNumber.length !== 13) {
            alert("Please provide a valid account number");
            return;
        }
        if (bankPinNumber !== validPin) {
            alert("Please enter a valid pin number");
            return;
        }

        //total amount:
        const totalAmount = bankAmount + existingAmount;
        //update the existing value:
        setInnerText(totalAmount); //using function


        // Transaction History:
        const trHistory = {
            name: 'Add Money',
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(trHistory);
        console.log(transactionData);


        //clear inputs after successful transaction
        document.getElementById('bank-name').value = '';
        document.getElementById('bank-account-number').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('pin-number').value = '';

    }
)

// Cash Out feature
document.getElementById('withdraw-money-btn').addEventListener('click',
    function (e) {
        e.preventDefault();
        const agentNumber = document.getElementById('agent-number').value;
        const withdrawAmount = getInputValue('withdraw-amount')
        const withdrawPinNumber = getInputValue('withdraw-pin-number')
        // console.log(agentNumber, withdrawAmount, withdrawPinNumber);

        //find the currentAmount:
        const currentAmount = getInnerTex('existing-amount');

        // validation
        if (agentNumber.length !== 11 && agentNumber.length !== 13) {
            alert("Please provide a valid agent number");
            return;
        }
        if (withdrawPinNumber !== validPin) {
            alert("Please provide a valid pin number");
            return;
        }

        //existingValue
        const existingValue = currentAmount - withdrawAmount;
        setInnerText(existingValue); //using function

        // Transaction History:
        const trHistory = {
            name: 'Cash Out',
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(trHistory);
        console.log(transactionData);


        //clear inputs after successful transactions
        document.getElementById('agent-number').value = '';
        document.getElementById('withdraw-amount').value = '';
        document.getElementById('withdraw-pin-number').value = '';

    }
)

// Transfer Money feature

document.getElementById('transfer-money-btn').addEventListener('click',
    function (e) {
        e.preventDefault();
        const transferAccNumber = document.getElementById("transfer-account-number").value;
        const transferAmount = getInputValue('transfer-amount');
        const transferPinNumber = getInputValue('transfer-pin-number');
        console.log(transferAccNumber, transferAmount, transferPinNumber);


        //find the currentAmount:
        const currentBalance = getInnerTex('existing-amount');
        console.log(currentBalance);

        // validation
        if (transferAccNumber.length !== 11 && transferAccNumber.length !== 13) {
            alert("Please provide a valid agent number");
            return;
        }
        if (transferPinNumber !== validPin) {
            alert("Please provide a valid pin number");
            return;
        }

        //existingValue
        const existingBalance = currentBalance - transferAmount;
        setInnerText(existingBalance); //using function

        // Transaction History:
        const trHistory = {
            name: 'Transfer Money',
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(trHistory);
        console.log(transactionData);


        //clear inputs after successful transactions
        document.getElementById('transfer-account-number').value = '';
        document.getElementById('transfer-amount').value = '';
        document.getElementById('transfer-pin-number').value = '';


    }
)


//Get Bonus feature:



//pay bill feature:
document.getElementById('pay-now-btn').addEventListener('click',
    function (e) {
        e.preventDefault();
        const payBankName = document.getElementById('pay-bank-name').value;
        const billerAccountNumber = document.getElementById('biller-account-number').value;
        const amountToPay = getInputValue('amount-to-pay'); //using function
        const billerPinNumber = getInputValue('biller-pin-number'); //using function
        // console.log(bankName,bankAccountNumber,bankAmount,bankPinNumber);

        //Get the existing amount
        const existingCurrency = getInnerTex('existing-amount');
        // console.log(existingAmount);

        //validation:
        if (billerAccountNumber.length !== 11 && billerAccountNumber.length !== 13) {
            alert("Please provide a valid account number");
            return;
        }
        if (billerPinNumber !== validPin) {
            alert("Please enter a valid pin number");
            return;
        }

        //total amount:
        const totalCurrency = existingCurrency - amountToPay;
        //update the existing value:
        setInnerText(totalCurrency); //using function

        // Transaction History:
        const trHistory = {
            name: 'Pay Bill',
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(trHistory);
        console.log(transactionData);

        //clear inputs after successful transaction
        document.getElementById('pay-bank-name').value = '';
        document.getElementById('biller-account-number').value = '';
        document.getElementById('amount-to-pay').value = '';
        document.getElementById('biller-pin-number').value = '';

    }
)


//transactions Feature:


// Toggling Feature:

//add-money-part
document.getElementById('add-money-cart').addEventListener('click',
    function () {
        toggleFeature('add-money-part');

        //cart-bg-effect
        toggleWithColor("add-money-cart");
    }
)
//cash-out-part
document.getElementById('cash-out-cart').addEventListener('click',
    function () {
        toggleFeature('cash-out-part');

        //cart-bg-effect
        toggleWithColor('cash-out-cart');
    }
)
//transfer-money-part
document.getElementById('transfer-money-cart').addEventListener('click',
    function () {
        toggleFeature('transfer-money-part');

        //cart-bg-effect
        toggleWithColor('transfer-money-cart');

    }
)

//get-bonus-part
document.getElementById('get-bonus-cart').addEventListener('click',
    function () {
        toggleFeature('get-bonus-part');

        //cart-bg-effect
        toggleWithColor('get-bonus-cart');

    }
)

//pay-bill-part
document.getElementById('pay-bill-cart').addEventListener('click',
    function () {
        toggleFeature('pay-bill-part');

        //cart-bg-effect
        toggleWithColor('pay-bill-cart');

    }
)
//transactions-part
document.getElementById('transactions-cart').addEventListener('click',
    function () {
        toggleFeature('transactions-part');

        //cart-bg-effect
        toggleWithColor('transactions-cart');

    }
)