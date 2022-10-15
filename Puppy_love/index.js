var container = document.querySelector("#container");

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

    let title = document.createElement("h3");
    title.innerText = el;

    div.append(title);

    container.append(div);
  });
}
