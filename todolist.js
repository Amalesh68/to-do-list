let response =[];   //To store JSON content
var count=0;        //to count checked tasks
//Reload page while clicking icon and title in navbar
// document.querySelector("#logo").addEventListener("click", load);
document.querySelector("#todo").addEventListener("click", load);

//Load data from API
window.addEventListener("load",load);

//Function to load
function load(){
    count=0;
      var xhttp = new XMLHttpRequest();
      
      xhttp.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200){
              response = JSON.parse(this.responseText);
              displaydata();
          }
      }
      
      xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
      xhttp.send();
  }



  function displaydata(){
    var list ="";
    for(i=0;i<response.length;i++){
        list +=`<tr>
                <td><input id="check" type="checkbox" onchange="strike(this)" ${response[i].completed ? "checked disabled='true'" : ""}></td>
                
                <td ><span id="sli${i}" ${response[i].completed ? "class='strikeout'" : ""}>${response[i].title}</span> </td>
               
                </tr>`
    }
    document.getElementById("data").innerHTML=list;
  }
  
  //To strike out checked tasks
  function strike(cthis) {
    var i = cthis.parentNode.parentNode.rowIndex;
      cthis.parentNode.parentNode.style.textDecoration = cthis.checked? 'line-through':'none';
      cthis.parentNode.parentNode.style.color = cthis.checked? 'red':'blue';
      // cthis.parentNode.parentNode.style.backgroundColor = cthis.checked? 'cornflowerblue':'lightskyblue';
      if(cthis.checked==true){
        response[i].completed = true;
        count++;
        if(count==5){
          setTimeout(() => { alert("Congrats. 5 Tasks have been Successfully Completed") }, 100);
        }
      }
      else{
        response[i].completed = false;
        count--;
      }
      
     
  }
  