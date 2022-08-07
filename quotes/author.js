const searchString =  window.location.search;
// console.log( searchString);
const urlParams = new URLSearchParams(searchString);
// console.log( urlParams);
const author = urlParams.get('author')
// console.log(author);

// let arrayOfQuotes;

async function dataOnAuthor(){
    try{
        return await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=10&exlimit=1&titles=${author}&explaintext=1&formatversion=2&format=json&origin=*`)

        .then(res => res.json())
        .then(data=>{
            document.getElementById("data").innerHTML= `<div>${data.query.pages[0].extract}</div>`
        })
        // .then(json => console.log(json))
    }
    catch(err){
        console.log(err);
    }
    finally{}
}
dataOnAuthor()


async function imageOfAuthor(){
    try{
        return await fetch(`https://pixabay.com/api/?key=29100968-d97466929cf8d142ed8a99ce5&q=${author.split('_').join('+')}&image_type=photo`)

        .then(res => res.json())
        .then(data=>{
            document.getElementById("image").innerHTML= `<img style= "width:200px; height:200px;" src= "${data.hits[0].largeImageURL}">`
        })
        // .then(json => console.log(json))
    }
    catch(err){
        console.log(err);
    }
    finally{}
}
imageOfAuthor()



async function getquotes(){
    try{
        return await fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            data = data.filter(item => item.author === author.split('_').join(' '))
            // document.getElementById("slide-up").innerHTML+= `<h4>More Of Auther: </h4>`
            data.forEach(element => {
                
                document.getElementById("slide-up").innerHTML+= `<li>"${element.text}"</li>`
                
            });

        });
    }
    catch(err){
        console.log(err)
    }
    finally{}
}

