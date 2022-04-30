//4bd6884
//api https://www.omdbapi.com/?apikey=4bd6884&s=avenger
//poster http://img.omdbapi.com/?apikey=[yourkey]&

let posterurl = "https://img.omdbapi.com/?apikey=4bd6884&s=avenger"
let url = "https://www.omdbapi.com/?apikey=4bd6884&s=batman"
async function home(){
   try{
        let res = await fetch(url);
        let data = await res.json();
        
        
            appendData(data.Search);
        
        
   }

   catch(err){
    console.log("error :",err)
   }
}

home();

let container = document.getElementById("container");
let nores = document.getElementById("noresult");

/*
Poster: "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
​
Title: "The Lego Batman Movie"
​
Type: "movie"
​
Year: "2017"
*/
function appendData(movies){

    container.innerHTML = null;
    nores.innerHTML = null;


    if(movies){

            movies.forEach(function (el){
        
            let card = document.createElement("div");
            card.setAttribute("class","card")
    
            let image = document.createElement("img");
            image.src = el.Poster;
    
            let title = document.createElement("h4");
            title.innerText = el.Title;
    
            let random = randomvalue();
            let rating = document.createElement("p");
            rating.innerHTML = `Rating : ${random}`      
    
            let year = document.createElement("p");
            year.innerHTML = el.Year;
    
    
            if(random>=8.5){
                
                let recom = document.createElement("p");
                recom.innerText = "Recommended"

                card.append(image,title,rating,recom,year);
                container.append(card);
            }
            else{
               
               

                card.append(image,title,rating,year);
                container.append(card);
            }
    
    
            
    
        })
    
    }else{
       
        
        container.innerHTML = null;
        let image = document.createElement("img");
        image.src = "data:image/jpeg;base64,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";
        
        container.append(image)
    }

    
}


async function search(){
    let movie = document.getElementById("search").value;
    
    try{

        let res = await fetch(`https://www.omdbapi.com/?apikey=4bd6884&s=${movie}`);
        let data = await res.json();
        
        appendData(data.Search)


    }

    catch(err){
        console.log("error : ",err)

    }
}

function randomvalue(){
    return (Math.random()*10).toFixed(1);
}