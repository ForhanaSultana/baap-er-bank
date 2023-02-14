//step-1: Add click Event handler with the submit button
document.getElementById('btn-submit').addEventListener("click", function () {
    //step-2: get the Email address inside the email input field
    const EmailField = document.getElementById('user-email');
    const email = EmailField.value;
    //step-3:get the password
    //a.set id on the html element
    //b.get the element
    //c.get the value from the element
    const passField = document.getElementById('password');
    const password = passField.value;
    // console.log(password, email);

    //Danger: do not verify email and password on the client side
    //step 4:verify Email and password
    if (email == 'farhanasultana755@gmail.com' && password == 'secret') {

        window.location.href = 'bank.html';
    }
    else {
        alert('tui amr password vule gesos ame obak hoiye gesi tokhe ame tejjo shontan krlaaam');
    }
})
