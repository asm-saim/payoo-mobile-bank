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