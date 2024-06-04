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


// random id ....................................
function getRandomId() {
    return Math.random().toString(36).slice(2);
}

// array declare here...................................

const todos = []

function handleAdd() {

    let title = getFieldValue("title");
    let description = getFieldValue("discription");
    let date = getFieldValue("date");

    if (!title || !description || !date) {
        showNotification("All fields are required", "error");
        return;
    }    

    let todo = {
        title,
        description,
        date,
        id: getRandomId(),
        status: false,
        createdAt: new Date(),
        user_Id: "123",
    };    

    todos.push(todo);

    showNotification("Todo added successfully", "success");

    console.log(todos);

    handleShowTable();

}    

// SHOW TABLE FUNCTION HERE 
function handleShowTable() {
    if (!todos.length) {
        showNotification("there is no single Title", "error")
    }    

    let tableStartingCode = `<div class="table-responsive"><table class="table text-center">`
    let tableHead = `<tr><th>Sr.No</th><th>Title</th><th>Description</th><th>Date</th><th>id</th><th>status</th> <th>Actions</th></tr>`
    let tableEndingCode = `</table></div>`
    let tableBody = ""
    for (let i = 0; i < todos.length; i++) {
        tableBody += `<tr><td>${i + 1}</td><td>${todos[i].title}</td><td>${todos[i].description}</td><td>${todos[i].date}
        </td><td>${todos[i].id}</td><td>${todos[i].status}</td><td>
        <button class="btn btn-warning" onclick="handleDelete('${todos[i].id}')">Delete</button>
        <button class="btn btn-warning" onclick="handleUpdate('${todos[i].id}')">Update</button>
        </td></tr>`
    }    
    let table = tableStartingCode + tableHead + tableBody + tableEndingCode
    document.getElementById("todoList").innerHTML = table;
}    

// Delete Item from list 
function handleDelete(id) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
        showNotification("Item is Deleted successfully", "success");
        handleShowTable();
    } else {
        showNotification("Item not found", "error");
    }
}

// Update Item From List
function handleUpdate(id) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos[index].status = true;
        showNotification("Item is Updated successfully", "success");
        handleShowTable();
    } else {
        showNotification("Item not found", "error");
    }
}

function handleClear() {
    todos.splice(0, todos.length);
    handleShowTable();
}

// footer current year -------------
let now = new Date()
let year = now.getFullYear();
document.getElementById("year").innerHTML = year;
