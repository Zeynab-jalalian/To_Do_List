const taskInput = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const error = document.querySelector(".error");
const tasks = document.querySelector(".tasks");

const newTask = () => {
  const taskVal = taskInput.value.trim();
  error.style.display = "none";
  if (!taskVal) {
    error.style.display = "block";
    taskInput.focus();
    return;
  }
  const task = `
  <div class="task">
          <input type="checkbox" class="checkbox" />
          <p class="taskName">${taskVal}</p>
          <div class="edit">
            <i class="bi bi-pencil-square"></i>
          </div>
          <div class="delete">
            <i class="bi bi-trash"></i>
          </div>
          <div class="star">
            <i class="bi bi-star"></i>
          </div>
        </div>
  `;
  tasks.insertAdjacentHTML("beforeend", task);

  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((d) => {
    d.addEventListener("click", () => {
      d.parentNode.remove();
    });
  });

  taskInput.value = "";
  taskInput.focus();
};

taskInput.focus();

addBtn.addEventListener("click", newTask);

taskInput.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        newTask();
    }
})

