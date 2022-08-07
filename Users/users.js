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



onload= function printUsersInfo() {

    getUsersInfo().then((answer) => {answer.forEach(element => {
    users_table.innerHTML += `<tr scope="row" id="${element._id}">
    <td>${element._id}</td><td>${element.age}</td><td>${element.name.first}</td><td>${element.name.last}</td><td>
    ${element.email}</td><td>${element.index}</td><td>${element.phone}</td><td>
    <img style= "width: 3vw; " class="img-thumbnail" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"/></td><td>
   <button class="btn btn-danger" onclick="deletUser('${element._id}')">&#9940;</button></td>
    </tr>
    `
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
