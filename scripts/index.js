const addToList = () => {
  let userData = document.querySelector("#userData").value;
  
  if (userData != "") {
    let newLi = document.createElement("input");
    newLi.type = "checkbox";
    let text = document.createTextNode(userData);
    let label = document.createElement("label");
    let smallCon = document.createElement("div");
    label.appendChild(text);
    smallCon.appendChild(newLi);
    smallCon.appendChild(label);
    document.querySelector(".result").appendChild(smallCon);
    document.querySelector("#userData").value = "";

    const newContainer = document.createElement("div");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    doneButton.innerHTML = "✓";
    deleteButton.innerHTML = "✗";

    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);
    // Adding class
    doneButton.classList.add("done");
    newLi.appendChild(newContainer);
    const check = () => newLi.classList.toggle("completed");
    // const del = () => newLi.remove() ;
    // Adding event listener to my buttons
    deleteButton.addEventListener("click", () => newLi.remove());
    doneButton.addEventListener("click", check);
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};