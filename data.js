
function validate(){
    const email = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    if(email==='management' && password === 'manage123'){
        document.getElementById("successornot").innerHTML = "Login successful!";
        window.location.href = "../Main-Page.html";}
    else if(email==='principal' && password==='principal123'){
        document.getElementById("successornot").innerHTML = "Login successful!";
        window.location.href = "../Main-Page.html";}
    else if(email === 'security' && password === 'security123'){
        document.getElementById("successornot").innerHTML = "Login successful!"
        window.location.href = "../Main-Page.html";}
    else
        document.getElementById("successornot").innerHTML = "Wrong Username Or Password";
}

