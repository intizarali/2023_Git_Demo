/*Retrieve the object from storage*/
const local = JSON.parse(localStorage.getItem("user"));

/*If there is something on the local storage*/
if(local != null)
{
    /*We do not display those part of the program*/
    inputs.style.display = "none";
    register.style.display = "none";
    info.style.display = "none";
    account2.style.display = "none";
    bouton.style.display = "none";
    /*We had a text on the web page*/
    h1.textContent = `Hello ${local.surname} ${local.firstname} your account has been created`
}
/*If there is nothing on the local storage*/
else
{
    /*We do not display those part of the program*/
    clear.style.display = "none";
    myaccount.style.display = "none";

    /*When the user click on the button*/
    bouton.onclick = () => {
        const user = {
             /*We save all those value*/
            surname: surname.value,
            firstname: firstname.value,
            email: email.value, 
            mobile: mobile.value,
            password: password.value,
            certify:certify.value
        };
        /*We set the item "user" with the value on the top*/
        localStorage.setItem("user",JSON.stringify(user))

        /*We have the verification if the form is well filled*/
        if (ValidateSurname(surname, 2)) 
            {
                if(ValidateFirstname(firstname, 2))
                {
                    if(ValidateEmail(email))
                    {
                        if(ValidateMobile(mobile, 8))
                        {
                            if(ValidatePassword(password, 5))
                            {
                                if(ValidateCertify(certify))
                                {
                                    
                                    /*If yes, we create a variable for the .txt file*/
                                    let data = 
                                        'Surname: ' + surname.value + ' \r\n' + 
                                        'Firstname: ' +firstname.value + ' \r\n' + 
                                        'Email: ' + email.value + ' \r\n' + 
                                        'Mobile: ' + mobile.value + ' \r\n' + 
                                        'Password: ' + password.value + ' \r\n' +
                                        'Checkbox: ' + certify.value;
        
                                    // Convert the text to BLOB.
                                    const textToBLOB = new Blob([data], { type: 'text/plain' });
                                    const sFileName = 'formData.txt';      // The file to save the data.

                                    let newLink = document.createElement("a");
                                    newLink.download = sFileName;

                                    if (window.webkitURL != null) {
                                        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
                                    }
                                    else {
                                        newLink.href = window.URL.createObjectURL(textToBLOB);
                                        newLink.style.display = "none";
                                        document.body.appendChild(newLink);
                                    }
                                    newLink.click(); 
                                    document.location.reload();
                                } 
                            }
                        }
                    }
                }
            }
        return false;
    };
}

/*Button to "disconnect the account", in reality to clear the local storage*/
clear.onclick = () =>
{
    localStorage.clear();
    document.location.reload();
}


/****************************START FUNCTION VALIDATE FORM************************************/

/*Validate surname*/
function ValidateSurname(surname,my)
{ 
    var letters = /^[A-Za-z]+$/; //variable including all the letters
    var surname_len = surname.value.length; //variable with the length of the surname
    if(!surname.value.match(letters))//if there are other caracter than letters in the surname
    {
        alert('Please input alphabet characters only');
        surname.focus();
        localStorage.clear();
        return false;
    }
    else if(surname_len < my) //if the surname size is less than 2 letters
    {
        alert("It should not be empty / length be more than " +my);
        surname.focus();
        localStorage.clear();
        return false;
    }
    else //if all is good
    {
        return true;
    }
}

/*Validate firstname*/
function ValidateFirstname(firstname,my)
{ 
    var letters = /^[A-Za-z]+$/; //variable including all the letters
    var firstname_len = firstname.value.length; //variable with the length of the firstname
    if(!firstname.value.match(letters))//if there are other caracter than letters in the firstname
    {
        alert('Please input alphabet characters only');
        firstname.focus();
        localStorage.clear();
        return false;
    }
    else if(firstname_len < my) //if the firstname size is less than 2 letters
    {
        alert("It should not be empty / length be more than " +my);
        firstname.focus();
        localStorage.clear();
        return false;
    }
    else //if all is good
    {
        return true;
    }
}

/*Validate email*/
function ValidateEmail(email)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //mail aspect request
    if(email.value.match(mailformat)) //if the email format is respected
    {
        return true;
    }
    else if(!email) //if there is no value for the email
    {
        alert("Please input your email");
        localStorage.clear();
        email.focus();
        return false;
    }
    else //if the email format is not respected
    {
        alert("You have entered an invalid email address!");
        localStorage.clear();
        email.focus();
        return false;
    }
}

/*Validate mobile*/
function ValidateMobile(mobile,my)
{ 
    var numbers = /^[0-9]+$/; //variable with all the numbers
    var mobile_len = mobile.value.length; //variable with the length of the mobile
    if(!mobile.value.match(numbers)) //if there are only numbers
    {
        alert('Please input numeric characters only');
        localStorage.clear();
        mobile.focus();
        return false;
    }
    else if(mobile_len < my) //if the mobile size is less than 2 letters
    {
        alert("It should not be empty / length be more than " +my);
        localStorage.clear();
        mobile.focus();
        return false;
    }
    else //if there are other caracter wich are not numbers for the mobile
    {
        return true;
    }
}

/*Validate password*/
function ValidatePassword(password, my)
{ 
    var password_len = password.value.length; //variable with the length of the mobile
    if(password_len < my) //if there is something for the password
    {
        alert("It should not be empty / length be more than " +my);
        localStorage.clear();
        password.focus();
        return false;
    }
    else //if there is nothing for the password
    {
        return true;
    }
}

/*Validate checkbox*/
function ValidateCertify(certify)
{ 
    if(certify.checked) //if the checkbox is check
    {
        return true;
    }
    else //if the checkbox is not check
    {
        alert('Please read the General Conditions and validate the checkbox');
        localStorage.clear();
        certify.focus();
        return false;
    }
}

/****************************END FUNCTION VALIDATE FORM************************************/