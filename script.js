const taskButton = document.getElementById("taskButton");
const taskInput = document.getElementById("taskInput");






taskButton.addEventListener( "click", function (e) {
    e.preventDefault();
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


// function postToDo() {
   
    
//     if(taskInput.value === '') {
//         alert("Don't be lazy, DO SOMETHING")
//     } else {
        
//         let newListItem = document.createElement('li');
//         newListItem.className = "deleteThis";
        
//         // var eraseToDo = document.getElementsByClassName("deleteThis");
//         // for (var i = 0; i < eraseToDo.length; i++) {
//         //     eraseToDo[i].onclick = function() {
//         //         var div = this.parentElement;
//         //         div.style.display = "none";
//         //     }
//         // }
        
//         let newToDo = document.createTextNode(taskInput.value);
//         // newToDo.className = "deleteThis";

//         var postedToDo = document.body.appendChild(newToDo);
//         postedToDo.className = "deleteThis";
        
//         // appending close button to the to do 
//         let xButton = document.createElement('button');
//         xButton.innerHTML = 'X';
//         xButton.onclick = function () {
//             var expendables = document.getElementsByClassName("deleteThis");
//             expendables.this.style.display = "none";
//             // this.parentNode.style.display = "none";                    
//             for (i = 0; i < postedToDo.length; i++) {
//                 postedToDo[i].style.display = "none";
//             }
//             // expendables.style.display = "none";
//             console.log("new button");
//         } // dynamic button

        
        
        
//         // newListItem.appendChild(xButton);
//       document.body.appendChild(xButton);
//         // document.body.appendChild(finishedList);
//     }
//     taskInput.value = "";
// }

function postIt() {
    if(taskInput.value === "") {
        alert("Come on, Try to do SOMETHING")
    } else {

        // creates the li for each to do
        let newListItem = document.createElement("LI");
        let toDoValue = document.createTextNode(taskInput.value);
        newListItem.appendChild(toDoValue);
        document.body.appendChild(newListItem);

        // adding a delete button to every to do
        let xButton = document.createElement("button");
        xButton.innerHTML = "X";
        newListItem.appendChild(xButton);

        // adding onclicks to every button
        xButton.onclick = function () {
            newListItem.style.display = "none";
        }

        

        
    }

    taskInput.value = "";
}