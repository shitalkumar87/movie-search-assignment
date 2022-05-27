
async function getdata(){

    let movie=document.getElementById("movie").value;
    let url=`http://www.omdbapi.com/?t=${movie}&apikey=3f15a8a`;

   var res=await fetch(url);

   var  data=await res.json();
   append(data)
   console.log(data);

}

 function append(data){

    let box=document.getElementById("box")
     box.innerHTML=null
    let img=document.createElement("img")
         img.setAttribute("src",img)
          img.src=data.Poster

    let year=document.createElement("h2")
         year.innerText=`Year:${data.Year}`

         let actor=document.createElement("h2")
         actor.innerText=`Actors:${data.Actors}`

         let rele=document.createElement("h4")
          rele.innerText=`Release date:${data.Released}`

         let country=document.createElement("h2")
         country.innerText=`Country:${data.Country}`

         let rate=document.createElement("p")
         rate.innerText=`Rating:${data.imdbRating}`

         

     box.append(img,year,country,rele,rate,actor)
 }
     
   