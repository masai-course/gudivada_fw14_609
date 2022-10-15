






var container=document.querySelector("#container");

async function anyPuppy(){
    try{
   var puppy=document.querySelector("#search").value;
//    let res=await fetch(`https://dog.ceo/api/breed/${puppy}/images`);

   let data=await res.json();

//    appendData(data.Search);
var Data = data.message;


   console.log(Data);

  } catch(err){

   console.log(err);

   }

}

anyPuppy();

// function appendData(data){
//    container.innerHTML=""

// data.forEach(function(el){

  

//    let div=document.createElement('div');

//    let img=document.createElement('img');
//    img.src=el.Poster;

//    let title=document.createElement('h3');
//    title.innerText=el.Title;

//    let year=document.createElement('p');
//    year.innerText=el.Year;

//    div.append(img,title,year);

//    container.append(div)

   

// })

// }






