//Login

let emailj = document.getElementById("emailj");
let emailHelp = document.getElementById("emailHelp");


let pwd = document.getElementById("pwd"); 
let passwordHelp = document.getElementById("passwordHelp");


function validate(){
    let regexp = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9\._])+.([a-z]{2,3})(.[a-z]{2,3})?$/
    let regexpass =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/


    if(regexp.test(emailj.value) && regexpass.test(pwd.value)){

        return true;
    }
    else if (!regexp.test(emailj.value)){
        emailHelp.innerHTML = "Invalid";
        emailHelp.style.color = "red";
        return false;


    }

    else if(!regexpass.test(pwd.value)){


        passwordHelp.innerHTML = "Invalid";
        passwordHelp.style.color = "red";
        return false;
    }
    else{

        alert("Please enter a valid Id & Password");
    }

}


//signup

let email2 = document.getElementById("email2");
let emailHelp2 = document.getElementById("emailHelp2");

let pwd2 = document.getElementById("pwd2"); 
let passwordHelp2 = document.getElementById("passwordHelp2");

let phnumber = document.getElementById("phnumber");
let passwordHelp3 = document.getElementById("passwordHelp3");

let inputAddress2 = document.getElementById("inputAddress2");
let inputCity = document.getElementById("inputCity");

function signupvalidate(){
    let regexp2 = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9\._])+.([a-z]{2,3})(.[a-z]{2,3})?$/
    let strongPwd = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    let mediumPwd = new RegExp(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    let regphnumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/


    if(regexp2.test(email2.value) && strongPwd.test(pwd2.value) && regphnumber.test(phnumber.value)){

        return true;
    }
   
    else if(inputAddress2.value==""||inputCity.value=="")   {

        alert("Please fill the columns");
        return false;
    }






    else if(!regexp2.test(email2.value)){

        emailHelp2.innerHTML = "Invalid";
        emailHelp2.style.color = "red";
        return false;
    }

    else if(!regphnumber.test(phnumber.value)){
        passwordHelp3.style.color = 'red'
        passwordHelp3.innerHTML = "Enter a valid number";
        return false;
        }

    else if(mediumPwd.test(pwd2.value)){
        passwordHelp2.style.color = 'orange'
        passwordHelp2.innerHTML = "Password Strength = Medium(Enter a strong password)";
        return false;
    }

    
    else{
        passwordHelp2.style.color = 'red'
        passwordHelp2.innerHTML = "Password Strength = Poor(Enter a strong password)";
        return false;
    }

}



