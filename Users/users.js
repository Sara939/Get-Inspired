const API= "https://my-json-server.typicode.com/Jeck99/fake-server/users" ;

async function getUsersInfo() {
    try {
        return await fetch(API)
            .then(res => res.json())
    }
    catch (err) {
        console.log(err)
    }
    finally { }
}



// function printUsersInfo() {

//     getUsersInfo().then((answer) => {answer.forEach(element => {
//     users_table.innerHTML += `<tr scope="row" >
//     <td>${element.name.first} ${element.name.last}</td><td>${element.age}<td>${element.email}</td>
//     </td><td>${element.phone}</td><td>
//     <img style= "width: 6vw; " class="img-thumbnail" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"/></td><td>
//    <button class="btn btn-danger" onclick="deletUser('${element._id}')">&#9940;</button></td>
//     </tr>
//     `
//         });
//     })
// }
onload= function printUsersInfo() {

    getUsersInfo().then((answer) => {answer.forEach(element => {
    card.innerHTML +=  `<ul id="${element._id}" class="list-group"><li class="list-group-item">${element.name.first} ${element.name.last}</li>
    <li class="list-group-item">${element.age}</li>
    <li class="list-group-item">${element.email}</li><li class="list-group-item">${element.phone}</li><button class="btn btn-danger" onclick="deletUser('${element._id}')">&#9940;</button></ul>`    

        });
    })
}





async function deletUser(id){
    try{
        let result = await fetch(`${API}/${id}`, {method: "DELETE"})
        document.getElementById(id).remove()
    }
    catch(err){console.log(err)}
    finally{}

}


