
const validPin = 4321;

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
        document.getElementById('existing-amount').innerText = existingValue;

        //clear inputs after successful transactions
        document.getElementById('agent-number').value = '';
        document.getElementById('withdraw-amount').value = '';
        document.getElementById('withdraw-pin-number').value = '';

    }
)

// Toggling Feature:

//add-money-part
document.getElementById('add-money-cart').addEventListener('click',
    function () {
        document.getElementById('cash-out-part').style.display = 'none';
        document.getElementById('add-money-part').style.display = 'block';
    }
)
//cash-out-part
document.getElementById('cash-out-cart').addEventListener('click',
    function () {
        document.getElementById('add-money-part').style.display = 'none';
        document.getElementById('cash-out-part').style.display = 'block';
    }
)