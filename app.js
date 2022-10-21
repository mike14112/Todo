const btnAdd = document.querySelector(".btn-add"),
  inputTodo = document.querySelector(".input-todo"),
  list = document.querySelector(".list");

const checkingComplete = function () {
  var taskAll = document.querySelectorAll("span"),
    taskComplete = document.querySelectorAll("li"),
    checkboxAll = document.querySelectorAll(".checkbox"),
    btnTaskRemove = document.querySelectorAll(".btn-remove");

  for (let i = 0; i < taskAll.length; i++) {
    checkboxAll[i].addEventListener("change", (event) => {
      if (event.currentTarget.checked) {
        taskAll[i].classList.add("complete");
      } else {
        taskAll[i].classList.remove("complete");
      }
    });
  }

  for (let i = 0; i < taskAll.length; i++) {
    btnTaskRemove[i].addEventListener("click", () => {
      taskComplete[i].style.display = "none";
    });
  }
};

document.addEventListener("keydown", (e) => {
  console.log();
  if (
    e.key === "Enter" &&
    inputTodo.value != "" &&
    inputTodo.value.length <= 25
  ) {
    list.innerHTML += `<ul><li class ="task-list">  <div><input type="checkbox" class = "checkbox"></div>
    <div><span>${inputTodo.value} </span></div>
  <div> <button class ="btn-remove">x</button></div></li> </ul>`;
    checkingComplete();
  }
});

btnAdd.addEventListener("click", () => {
  if (
    inputTodo.value &&
    inputTodo.value.length <= 25 &&
    inputTodo.value != ""
  ) {
    list.innerHTML += `<ul><li class ="task-list">  <div><input type="checkbox" class = "checkbox"></div>
                        <div><span>${inputTodo.value} </span></div>
                      <div> <button class ="btn-remove">x</button></div></li> </ul>`;
    inputTodo.value = "";
    checkingComplete();
  }
});
