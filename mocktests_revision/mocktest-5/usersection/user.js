document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  let datas = formsubmit();
  console.log(datas);
  if (datas) {
      CreateuserDetails(datas);
    }
    alert("successfully registered");
});
const submitBtn = document.querySelector(".submit-btn");

// submitBtn.addEventListener("click",
// );

function formsubmit() {
  var CreateDetails = {};
  CreateDetails["id"] = Math.random() * 506096004;
  CreateDetails["userName"] = document.querySelector(".user").value;
  CreateDetails["Age"] = document.querySelector(".age").value;
  CreateDetails["Place"] = document.querySelector(".place").value;
  CreateDetails["Batch"] = document.querySelector(".batch").value;
  CreateDetails["Profession"] = document.querySelector("profession").value;

  return CreateDetails;
}

async function CreateuserDetails() {
  let newData = await fetch("http://localhost:8080/userdetails", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datas),
  });

  const items = await newData.json();
  console.log(items);
}

async function fetchuserData() {
  const datas = await fetch("http://localhost:8080/userdetails")
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

fetchuserData();
