function elementCreateEngineAndUpdate(id, spanTxt, buttonTxt, buttonClsName) {
  const itemsContainer = document.getElementById(id);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = spanTxt;
  const button = document.createElement("button");
  button.classList.add(buttonClsName);
  button.innerText = buttonTxt;
  li.appendChild(span);
  li.appendChild(button);
  itemsContainer.appendChild(li);
}

const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
  const inputField = document.getElementById("input-field");
  if (inputField.value === "") {
    return alert("Input field required!");
  }

  elementCreateEngineAndUpdate(
    "items-container",
    inputField.value,
    "Ok",
    "current-item"
  );
  inputField.value = "";

  const currentItem = document.getElementsByClassName("current-item");
  for (const items of currentItem) {
    items.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const spanValue = e.target.parentNode.children[0].innerText;

      elementCreateEngineAndUpdate(
        "delete-container",
        spanValue,
        "Delete",
        "delete-item"
      );
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);

      const deleteItem = document.getElementsByClassName("delete-item");
      for (const dItem of deleteItem) {
        dItem.addEventListener('click', (ee)=>{
            ee.stopImmediatePropagation();
            ee.target.parentNode.parentNode.removeChild(ee.target.parentNode);
        })
      }
    });
  }
});
