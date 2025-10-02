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
      taskInput.focus();
    });
  });

  const editBtn = document.querySelectorAll(".edit");
  editBtn.forEach((ed) => {
    ed.addEventListener("click", () => {
      taskInput.value = `${taskVal}`;
      taskInput.focus();
      ed.parentNode.remove();
    });
  });

  const stars = document.querySelectorAll(".star i");
  stars.forEach((s) => {
    s.addEventListener("click", () => {
      if (s.classList.contains("bi-star")) {
        s.classList.replace("bi-star", "bi-star-fill");
      } else {
        s.classList.replace("bi-star-fill", "bi-star");
      }
      taskInput.focus();
    });
  });

  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((c) => {
    c.addEventListener("change", () => {
      c.nextElementSibling.classList.toggle("completed");
      taskInput.focus();
      updateProgress();
    });
  });

  taskInput.value = "";
  taskInput.focus();
  updateProgress();
};

taskInput.focus();

addBtn.addEventListener("click", newTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    newTask();
  }
});

const updateProgress = () => {
  const allTasks = document.querySelectorAll(".task");
  const checkedTasks = document.querySelectorAll(".checkbox:checked");
  const progressText = document.querySelector(".progress-text");
  const progressFill = document.querySelector(".progress-fill");

  if (allTasks.length === 0) {
    progressText.textContent = "0% completed";
    progressFill.style.width = "0%";
    return;
  }

  const percent = Math.round((checkedTasks.length / allTasks.length) * 100);
  progressText.textContent = `${percent}% completed`;
  progressFill.style.width = `${percent}%`;
  if (percent === 100) {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  }
};
