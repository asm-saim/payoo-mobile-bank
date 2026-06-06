document.getElementById('add-money-btn').addEventListener('click',
    function (e) {
        e.preventDefault();
        const bankName = document.getElementById('bank-name').value;
        const bankAccountNumber = document.getElementById('bank-account-number').value;
        const bankAmount = parseInt(document.getElementById('amount').value);
        const bankPinNumber = document.getElementById('pin-number').value;
        // console.log(bankName,bankAccountNumber,bankAmount,bankPinNumber);

        //Get the existing amount
        const existingAmount = parseInt(document.getElementById('existing-amount').innerText);
        // console.log(existingAmount);

        //total amount:
        const totalAmount = bankAmount + existingAmount;
        // console.log(totalAmount);

        //update the existing value:
        document.getElementById("existing-amount").innerText = totalAmount;

    }
)