// const inputs = document.querySelectorAll(".input");
// function addcl() {
//   let parent = this.parentNode.parentNode;
//   parent.classList.add("focus");
// }
// function remcl() {
//   let parent = this.parentNode.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }
// inputs.forEach((input) => {
//   input.addEventListener("focus", addcl);
//   input.addEventListener("blur", remcl);
// });



// CALLBACK FUNCTION FOR LOGIN
document.querySelector("#button1").addEventListener("click", match);

//Validation function for login details
function match(){
    uname.innerText="";
    psw.innerText="";
    username=document.getElementById("username");
    password=document.getElementById("password");
    
    if(username.value.trim() === ''){
        uname.innerText = "Username required";
    }
    else if(username.value!="admin"){
        uname.innerText = "Invalid Username";
    }
    if(password.value.trim() === ''){
        psw.innerText = "Password required";
    }
    else if(password.value!="12345"){
        psw.innerText = "Invalid Password";
    }
    if(username.value=="admin" && password.value=="12345"){
        location.href = "./todo home page.html";
    }
    
  
  }