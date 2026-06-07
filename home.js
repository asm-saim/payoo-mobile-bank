//add-money-feature
const validPin = 4321;

document.getElementById('add-money-btn').addEventListener('click',
    function (e) {
        e.preventDefault();
        const bankName = document.getElementById('bank-name').value;
        const bankAccountNumber = document.getElementById('bank-account-number').value;
        const bankAmount = parseInt(document.getElementById('amount').value);
        const bankPinNumber = parseInt(document.getElementById('pin-number').value);
        // console.log(bankName,bankAccountNumber,bankAmount,bankPinNumber);

        //Get the existing amount
        const existingAmount = parseInt(document.getElementById('existing-amount').innerText);
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
        // console.log(totalAmount);

        //update the existing value:
        document.getElementById("existing-amount").innerText = totalAmount;

    }
)

// Cash Out feature
document.getElementById('withdraw-money-btn').addEventListener('click',
    function (e) {
        e.preventDefault();
        const agentNumber = document.getElementById('agent-number').value;
        const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
        const withdrawPinNumber = parseInt(document.getElementById('withdraw-pin-number').value);
        // console.log(agentNumber, withdrawAmount, withdrawPinNumber);

        //find the currentAmount:
        const currentAmount = parseInt(document.getElementById('existing-amount').innerText);

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