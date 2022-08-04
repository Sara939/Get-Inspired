async function catchiquote(){
    try{
        return await fetch("https://api.goprogram.ai/inspiration")
        .then(response => response.json())
        
    }
    catch(err){
         console.log (err);
    }
    }
    
    onload= function printquote(){
        catchiquote().then((response)=>{
            document.getElementById("hourly").innerHTML+= `<h3>Latest quote: " ${response.quote} "</h3> `
            document.getElementById("hourly").innerHTML+= `<span> - ${response.author} - </span> `
        });
    }
    
    