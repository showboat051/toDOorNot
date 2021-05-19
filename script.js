const taskButton = document.getElementById("taskButton");
const taskInput = document.getElementById("taskInput");
const myList = document.getElementById("myList");






taskButton.addEventListener( "click", function (e) {
    e.preventDefault();
    console.log("clicked");
});

function newToDo() {
   var li = document.createElement("li");
   var userInput = document.getElementById("taskInput").value;
   var userTask = document.createTextNode(userInput);
   li.appendChild(userTask);
   if (userInput === '') {
       alert("Don't be lazy, DO something!");
   } else {
        myList.appendChild(li);
   }
   taskInput.value = "";

  
}