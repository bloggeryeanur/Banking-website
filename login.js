//Step 1: add click event handler with the submit button
//document.getElementById('btn-submit').addEventListener('click',function(){

//Step 2: get the email address inside the email input field
//Always remember to use .value to get text from an input field
/* const email_field = document.getElementById('user-email');
const email = email_field.value;
 */
//Step 3: get Password
//3.a: set id on the html element
//3.b: get the element
//3.c: get the value from the element
/* const password_field = document.getElementById('user-password');
const password = password_field.value;
 */
//DO NOT VERIFY email passwod on the client side
//Step 4: Verify email and password
/* if(email === 'yeanur@gmail.com' && password === 'yeanur123'){
    window.location.href = 'bank.html'
}else{
    alert('Not Matchin Your Infomation')
}

}); */

//When click all work
document.getElementById('btn-submit').addEventListener('click',function(){
    //get email value
    const getEmail = document.getElementById('user-email');
    const emailValue = getEmail.value;
    

    //get password input value
    const getPassword = document.getElementById('user-password');
    const passwordValue = getPassword.value;
    
    //Varify Email and Password and login
    if(emailValue === 'yeanur@gmail.com' && passwordValue === 'yeanur123'){
        window.location = 'bank.html'
    }else{
        alert('Wrong your infomation !!!')
    }

})
