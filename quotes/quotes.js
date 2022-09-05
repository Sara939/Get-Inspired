async function getquotes(){
    try{
        return await fetch("https://type.fit/api/quotes")
        .then(response => response.json())
    }
    catch(err){
        console.log(err)
    }
    finally{}
}

let arrayOfQuotes= [];
onload= function buildarray(){ 
    getquotes().then((response)=>{
        // response.forEach(element => {
        //         if (element.author!=null ) {
        //             arrayOfQuotes.push(element);} // });
        arrayOfQuotes = response.filter(element => element.author)
        arrayOfAuthors = [];
        // arrayOfQuotes.forEach(item => {
        //     let i = arrayOfAuthors.findIndex(a => a.author === item.author);
        //     if(i > -1 ){
        //         arrayOfAuthors[i].quotes.push(item.text);
        //     } else {
        //         arrayOfAuthors.push({author: item.author,quotes:[item.text]})
        //     }
        // })
        
        console.log(arrayOfQuotes);
        console.log(arrayOfAuthors);
        arrayOfQuotes.slice(22,38).forEach(element => {
            // console.log(element);
            this.document.getElementById("cards").innerHTML+= `<div class="card" id="card" style="width: 18rem;"> <div class="card-body" id="card-body">
            <h5 class="card-title">${element.author}</h5><p class="card-text">"${element.text}"</p><a href="../quotes/author.html?author=${element.author.split(' ').join('_')}" class="btn btn-primary" id="btn_card">Read More About ${element.author}</a> </div></div>`;
    });
    });
}


