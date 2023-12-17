// console.log("Deatils of all the Items Entered");
window.addEventListener('submit', saveDetailsinAPI)
function saveDetailsinAPI(item){
    item.preventDefault();

    let obj={
        "itemName": item.target.itemName.value,
        "description": item.target.description.value,
        "price": item.target.price.value,
        "quantity": item.target.quantity.value,
    };

    console.log(obj)
    axios.post("https://crudcrud.com/api/632ba6e0c770448d84009b8844c503bc/Data",obj)
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err)
    });
}

window.addEventListener("DOMContentLoaded", ()=>{  
    axios.get("https://crudcrud.com/api/632ba6e0c770448d84009b8844c503bc/Data")  
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
    const childHTML = `<li id= ${item._id}> ${item.itemName}     ${item.description}     ${item.price}rs     ${item.quantity}
                                    <button onclick= whenUserBuys1('${item}')>Buy 1</button>
                                    <button onclick= whenUserBuys2('${item}')>Buy 2</button>
                        </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function whenUserBuys1(item){
    // item.preventDefault();
    obj={
        "_id": item._id,
        "itemName": item.itemName,
        "description": item.description,
        "price": item.price,
        "quantity": item.quantity,
    }
    
    axios.put(`https://crudcrud.com/api/632ba6e0c770448d84009b8844c503bc/Data/${item}`, obj)
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err)
    });
}

function whenUserBuys2(item){
    a = itemquantity -2;
    obj = {
        "itemName": itemname,
        "description": itemdes,
        "price": itemprice,
        "quantity": a
    };
    
    axios.put("https://crudcrud.com/api/632ba6e0c770448d84009b8844c503bc/Data", obj )
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err)
    });
}
