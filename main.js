function login() {
    var firstname = document.getElementById('firsrtname');
    var lastname = document.getElementById('lastname');
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;

    console.log(firstname, lastname, uname, pwd)
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (uname == '') {
        alert("please enter user name.");
    } else if (pwd == '') {
        alert("enter the password");
    } else if (!filter.test(uname)) {
        alert("Enter valid email id.");
    } else if (pwd.length < 8 || pwd.length > 8) {
        alert("Password min and max length is 8.");
    } else {
        alert('Thank You for Login & You are Redirecting to our Website');
        window.location = "index.html";
    }
}