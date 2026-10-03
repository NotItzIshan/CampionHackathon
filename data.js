
function validate(){
    const email = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    console.log(`The Username is: ${email}\n The Password is: ${password}.`)
    if(email==='management' && password === 'manage123')
        document.getElementById("successornot").innerHTML = "Login successful!";
    else if(email==='principal' && password==='principal123')
        document.getElementById("successornot").innerHTML = "Login successful!";
    else if(email === 'security' && password === 'security123')
        document.getElementById("successornot").innerHTML = "Login successful!";
    else
        document.getElementById("successornot").innerHTML = "Wrong Username Or Password";
}

