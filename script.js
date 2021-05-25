const taskButton = document.getElementById("taskButton");
const taskInput = document.getElementById("taskInput");
const myList = document.getElementById("myList");






taskButton.addEventListener( "click", function (e) {
    e.preventDefault();
    console.log("clicked");
});




// function newToDo() {
//    var li = document.createElement("li");
//    var userInput = document.getElementById("taskInput").value;
//    var userTask = document.createTextNode(userInput);
//    li.appendChild(userTask);


// // Delete button clicks
// var eraseTask = document.getElementsByClassName("erase");
// // var i;
// for (i = 0; i < eraseTask.length; i++) {
//     eraseTask[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// } 

// //Delete button for every list item
// var myNewList = document.getElementsByTagName("LI");
// // var i;
// for (i = 0; i < myNewList.length; i++) {
//     var span = document.createElement("SPAN");
//     var x = document.createTextNode("\u00D7");
//     span.className = "erase";
//     span.appendChild(x);
//     myNewList[i].appendChild(span);
// }


//    if (userInput === '') {
//        alert("Don't be lazy, DO something!");
//    } else {
//         myList.appendChild(li);
//    }
//    taskInput.value = "";

  
// } // end of newToDo()


function postToDo() {
   
    
    if(taskInput.value === '') {
        alert("Don't be lazy, DO SOMETHING")
    } else {
        let newListItem = document.createElement('li');
        let newToDo = document.createTextNode(taskInput.value);
        let finishedToDo = newListItem.appendChild(newToDo);


        // appending close button to the to do 
        let xButton = document.createElement('button');
         xButton.innerHTML = 'X';
        xButton.onclick = function () {
            console.log('new button');
        }

        document.body.appendChild(finishedToDo);
        document.body.appendChild(xButton);
    }
    taskInput.value = "";
}