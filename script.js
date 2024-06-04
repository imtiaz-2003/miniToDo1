// Tostify Notification function 
const showNotification = (msg, type) => {
    let bgColor;
    switch (type) {
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)";
            break;
        case "success":
            bgColor = "linear-gradient(to right, #1D976C, #93F9B9)";
            break;
        case "default":
            bgColor = "000";
    }

    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor,
        },
        onClick: function () { }, // Callback after click
    }).showToast();
};

// Custom js code start here 
// here is getinput field function

function getFieldValue(fieldId) {
    return document.getElementById(fieldId).value;
}


//   random id 
function getRandomId() {
    return Math.random().toString(36).slice(2);
}
// email regex 
let emailValidation = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

// array declare here

let users = []


const register = () => {
    event.preventDefault()
    let email = getFieldValue("email")
    let password = getFieldValue("password")
    // console.log(emailValidation.test(email))

    email = email.trim()

  
    if (!emailValidation.test(email)) {
        showNotification("please enter email correctly", "error")
        return
    }
    if (password.length < 6) {
        showNotification("please enter min 6 character password", "error")
        return
    }


    let user = {
       
        email,
        password,
    
    }

    user.id = getRandomId()

    let userCheck = users.find(currElem => currElem.email == email)

    if(userCheck){
        showNotification("user already exists", "error")
        return
    }else{
        users.push(user)
        showNotification("user successfully Registered", "success")
    }
document.getElementById("lform").style.display = "block";
document.getElementById("rform").style.display = "none";


}
// Login function
function Login() {

    let email = getFieldValue("email");
    let password = getFieldValue("password");

    email = email.trim();

    if (!emailValidation.test(email)) {
        showNotification("please enter email correctly", "error")
        return
    }
    if (password.length < 6) {
        showNotification("please enter min 6 character password", "error")
        return
    }

    let user = {

        email,
        password,

    }

    let userCheck = users.find(currElem => currElem.email == email && currElem.password == password)

    if (!userCheck) {
        showNotification("user not found", "error")
        return
    } else {
        showNotification("login successfully", "success")
        
        window.location.href = "toDoApp.html";
        return
    }

 
}



// footer current year -------------
let now = new Date()
let year = now.getFullYear();
document.getElementById("year").innerHTML = year;

// jsDate in 2024-06-04
var todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);




