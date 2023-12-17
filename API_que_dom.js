// window.addEventListener("DOMContentLoaded", () =>{
//     axios.get("https://crudcrud.com/api/4818926bc6f24f13abe640a36d8018de/appoinmentData")
//     .then((response)=>{
//         console.log(response)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })


// window.addEventListener("DOMContentLoaded", () =>{
//         axios.post("https://crudcrud.com/api/4818926bc6f24f13abe640a36d8018de/appoinmentData")
//         .then((response)=>{
//             console.log(response)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     })

var form = document.getElementById('addform');



window.addEventListener('submit', addItems);
function addItems(e){
    e.preventDefault();
    var newItem = document.getElementById('name').value;
    var newage = document.getElementById('age').value;
    var itemList = document.getElementById('items');


                        // Create new li element
    var li = document.createElement('li');
    // console.log(newItem);
    li.className = 'list-group-item'; // Add class
    li.appendChild(document.createTextNode(newItem +" "+ newage)); // Add text node with input value


                 // Create del button element
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';// Add classes to del button
    deleteBtn.appendChild(document.createTextNode('Delete'));// Append text node
    li.appendChild(deleteBtn);// Append button to li

                //create Edit button
    var editButton= document.createElement('button');
    editButton.className ="btn btn-regular btn-sm float-right edit";
    editButton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editButton);
                // Append li to list
    itemList.appendChild(li);
}





                    //Print the gotten user details form api
window.addEventListener("DOMContentLoaded", ()=>{  //This will go in callback queue
    axios.get("https://crudcrud.com/api/68f3e2aa223e4f9985e9b25c569e80e7/Data")   //Its a Network call so the speed depends on internet conenction
    .then((response)=>{
        console.log(response)
        for( var i=0; i< response.data.length; i++){
            showNewUseronScreen(response.data[i]);
        }
    })
    .catch((error)=>{
        console.log(error)
    })
})


function showNewUseronScreen(user){
    // user={
    //     "_id":"",
    //     "name":"",
    //     "age":"",
    // }
   
    document.getElementById('name').value="";
    document.getElementById('age').value="";

    // var li= document.createElement('li');
    // li.className='list-group-item';
    // li.appendChild(document.createTextNode(user.name +" "+ user.age));

    // var delButton = document.createElement('button');
    // delButton.className ='btn btn-danger btn-sm float-right delete';
    // delButton.appendChild(document.createTextNode('Delete'));
    // li.appendChild(delButton);


    // var editButton= document.createElement('button');
    // editButton.className ="btn btn-regular btn-sm float-right edit";
    // editButton.appendChild(document.createTextNode('Edit'));
    // li.appendChild(editButton);

    // itemList.appendChild(li);

    const parentNode = document.getElementById("itemList");
    const childHTML = `<li id= ${user._id}> ${user.name} and ${user.age}
                                    <button onclick= deleteUser('${user._id}')>Delete User</button>
                                    <button onclick= editUser('${user.name}','${user.age}','${user._id}')>Edit User</button>
                        </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

// itemList.addEventListener('click', removeItem);

            //Delete User form API
            //Make a delete call to api using _id also add the delete command in it to remove the data from webpage

function deleteUser(userID){
    axios.delete(`https://crudcrud.com/api/68f3e2aa223e4f9985e9b25c569e80e7/Data/${userID}`)
    .then((response)=>{
        removeUserfromScreen(userID);
    })
    .catch((error)=>{
        console.log(error)
    })

}

function removeUserfromScreen(userID){
    const parentNode = document.getElementById('itemList');
    const childNodetobeDeleted = document.getElementById(userID);
    if (childNodetobeDeleted){
        parentNode.removeChild(childNodetobeDeleted);
    }
}



                //Edit User Code from API

function editUser(userName, userAge, userID){
    
    document.getElementById('name').value = userName;
    document.getElementById('age').value = userAge;
    
    deleteUser(userID);



    // window.addEventListener('submit', listenforSubmit)
    // function listenforSubmit(userID){
    //     axios.put(`https://crudcrud.com/api/68f3e2aa223e4f9985e9b25c569e80e7/Data/${userID}`)
    //     .then((response)=>{
    //         console.log("updated")
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }
    // removeUserfromScreen(userID);
}


































































































































// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }

