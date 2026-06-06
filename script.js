// login button functionality: (add event listener)
document.getElementById('loginButton').addEventListener('click',
    function (e) {
        e.preventDefault() //to prevent by default submit button behavior

        const mobileNumber = 10987654321;
        const mobilePin = 4321;
        //get mobileNumber:
        const catchMobileNumber = document.getElementById('mobile-number').value;
        const newMobileNumber = parseInt(catchMobileNumber);
        //get pinNumber:
        const catchPinNumber = document.getElementById('pin-number').value;
        const newPinNumber = parseInt(catchPinNumber);

        //condition
        if(newMobileNumber===mobileNumber && newPinNumber===mobilePin)
        {
            window.location.href='./home.html'
        }
        else{
            alert('Invalid Credential')
        }
    })