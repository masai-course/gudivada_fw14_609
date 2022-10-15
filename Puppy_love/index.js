var container = document.querySelector("#container");
var cartArr=localStorage.getItem("dogname") ||[];


async function puppies() {
  try {
    let res = await fetch("https://dog.ceo/api/breeds/list/all");

    let data = await res.json();

    var Data = data.message;
    const arr = Object.keys(Data);

    // console.log(Data);
    appendData(arr);
    // console.log(arr);
  } catch (err) {
    console.log(err);
  }
}

puppies();

function appendData(data) {
  container.innerHTML = "";

  data.forEach(function (el) {
    let div = document.createElement("div");
    div.setAttribute("class", "image-value");

    let title = document.createElement("h3");
    title.innerText = el;
    title.addEventListener("click", function () {
        var ans=title.innerText
        addCart(ans)
        window.location.href="puppy.html"

    //   console.log(title.innerText);
    });

    div.append(title);

    container.append(div);
  });
  function addCart(ele){
    cartArr.push(ele);
  localStorage.setItem("dogname",cartArr);
  alert("Add succussful");
  }
}
