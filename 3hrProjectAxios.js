// console.log("Deatils of all the Items Entered");
window.addEventListener('submit', saveDetailsinAPI)
function saveDetailsinAPI(item){
    item.preventDefault();

    let obj={
        "itemName": item.target.todoTask.value,
        "description": item.target.description.value,
    };

    console.log(obj)
    axios.post("https://crudcrud.com/api/3e2dc51381fd4807858de261d4580b1a/data",obj)
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err)
    });

    showItemonScreen(obj);
}

window.addEventListener("DOMContentLoaded", ()=>{  
    axios.get("https://crudcrud.com/api/3e2dc51381fd4807858de261d4580b1a/data")  
    .then((response)=>{
        console.log(response)
        for( var i=0; i< response.data.length; i++){
            showItemonScreen(response.data[i]);
        }
    })
    .catch((error)=>{
        console.log(error)
    })
})
function showItemonScreen(item) {
    // item ={
    //     "_id": item._id,
    //     "itemName": item.itemName,
    //     "price": item.price,
    //     "quantity": item.quantity
    // };
    const parentNode = document.getElementById("itemList");
    const childHTML = `<li id= ${item._id}> ${item.itemName}  ${item.description}
                                    <button onclick= Tick('${item._id}')>\u2713</button>
                                    <button onclick= Remove('${item._id}')>&#10060</button>
                        </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}


function Tick(didTodo){
    removeUserfromScreen(didTodo);
    axios.get(`https://crudcrud.com/api/3e2dc51381fd4807858de261d4580b1a/data/${didTodo}`)  
    .then((response)=>{
        console.log(response)
        showItemonTheDonelist(response.data);
        
    })
    .catch((error)=>{
        console.log(error)
    })
}

function showItemonTheDonelist(done){
    const parentNode = document.getElementById("doneList");
    const childHTML = `<li id= ${done._id}> ${done.itemName} ${done.description} - Compeleted</li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}


function removeUserfromScreen(userID){
    const parentNode = document.getElementById('itemList');
    const childNodetobeDeleted = document.getElementById(userID);
    if (childNodetobeDeleted){
        parentNode.removeChild(childNodetobeDeleted);
    }
}


function Remove(X){
    axios.delete(`https://crudcrud.com/api/3e2dc51381fd4807858de261d4580b1a/data/${X}`)
    .then((response)=>{
        removeUserfromScreen(X);
    })
    .catch((error)=>{
        console.log(error)
    })
}

