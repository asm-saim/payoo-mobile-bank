// login button functionality: (add event listener)
document.getElementById('loginButton').addEventListener('click',
    function (e) {
        e.preventDefault() //to prevent by default submit button behavior
        console.log('button clicked');
        console.log(e);
    })