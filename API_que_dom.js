window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/4818926bc6f24f13abe640a36d8018de/appoinmentData")
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
})