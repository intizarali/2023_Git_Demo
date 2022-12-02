/*Constant to retrieve infomartions in "user" item*/
const local = JSON.parse(localStorage.getItem("user"));

/*If there is something on the local storage*/
if(local != null)
{
    /*We put all of those informations in the HTML page*/
    surname.textContent = ` ${local.surname}`
    firstname.textContent = ` ${local.firstname}`
    email.textContent = ` ${local.email}`
    mobile.textContent = ` ${local.mobile}`
    password.textContent = ` ${local.password}`
}
/*If there is nothing on the local storage*/
else
{
    loginOff.textContent = `You are not registered into an account` //text to consider that the user is not logged
    //We do not display these two things on the web page
    titleTable.style.display = "none";
    accountTable.style.display = "none";
    clear.style.display = "none";
}


/*Button to "disconnect the account", in reality to clear the local storage*/
clear.onclick = () =>
{
    localStorage.clear();
    document.location.reload();
}



    



