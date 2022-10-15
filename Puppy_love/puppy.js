var container = document.querySelector("#container");
var cartArr=localStorage.getItem("dogname")|| [];

async function anyPuppy() {
  try {
    //   var puppy = document.querySelector("#search").value;
    let res = await fetch(`https://dog.ceo/api/breed/${cartArr}/images`);

    let data = await res.json();

    var Data = data.message;

    appendData(Data);

    console.log(Data);
  } catch (err) {
    console.log(err);
  }
}

anyPuppy();

function appendData(data) {
  container.innerHTML = "";

  data.forEach(function (el) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", el);
    img.setAttribute("class", "src");

    div.append(img);

    container.append(div);
  });
}
