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
    });
  });

  taskInput.value = "";
  taskInput.focus();
};

taskInput.focus();

addBtn.addEventListener("click", newTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    newTask();
  }
});

/*
const taskInput = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const error = document.querySelector(".error");
const tasks = document.querySelector(".tasks");

// --- بارگذاری تسک‌ها از LocalStorage هنگام باز شدن صفحه ---
window.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => {
    addTaskToDOM(task);
  });
});

// --- تابع اضافه کردن تسک به DOM ---
function addTaskToDOM(taskObj) {
  const taskHTML = `
    <div class="task">
      <input type="checkbox" class="checkbox" ${taskObj.completed ? "checked" : ""}/>
      <p class="taskName ${taskObj.completed ? "completed" : ""}">${taskObj.text}</p>
      <div class="edit"><i class="bi bi-pencil-square"></i></div>
      <div class="delete"><i class="bi bi-trash"></i></div>
      <div class="star"><i class="bi ${taskObj.starred ? "bi-star-fill" : "bi-star"}"></i></div>
    </div>
  `;
  tasks.insertAdjacentHTML("beforeend", taskHTML);

  const currentTask = tasks.lastElementChild; // دسترسی به آخرین تسک اضافه شده

  // --- event حذف ---
  currentTask.querySelector(".delete").addEventListener("click", () => {
    const taskText = currentTask.querySelector(".taskName").textContent;
    currentTask.remove();
    removeTaskFromStorage(taskText);
    taskInput.focus();
  });

  // --- event ویرایش ---
  currentTask.querySelector(".edit").addEventListener("click", () => {
    taskInput.value = taskObj.text;
    taskInput.focus();
    removeTaskFromStorage(taskObj.text);
    currentTask.remove();
  });

  // --- event ستاره ---
  currentTask.querySelector(".star i").addEventListener("click", (e) => {
    const starIcon = e.target;
    taskObj.starred = !taskObj.starred;
    starIcon.classList.toggle("bi-star-fill");
    starIcon.classList.toggle("bi-star");
    updateTaskInStorage(taskObj);
    taskInput.focus();
  });

  // --- event تیک ---
  currentTask.querySelector(".checkbox").addEventListener("change", (e) => {
    const checkbox = e.target;
    const taskNameEl = checkbox.nextElementSibling;
    taskObj.completed = checkbox.checked;
    taskNameEl.classList.toggle("completed");
    updateTaskInStorage(taskObj);
    taskInput.focus();
  });
}

// --- تابع اضافه کردن تسک جدید ---
const newTask = () => {
  const taskVal = taskInput.value.trim();
  error.style.display = "none";
  if (!taskVal) {
    error.style.display = "block";
    taskInput.focus();
    return;
  }

  const taskObj = {
    text: taskVal,
    completed: false,
    starred: false,
  };

  // ذخیره در LocalStorage
  let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  tasksArray.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(tasksArray));

  // اضافه کردن به DOM
  addTaskToDOM(taskObj);

  taskInput.value = "";
  taskInput.focus();
};

// --- حذف تسک از LocalStorage ---
function removeTaskFromStorage(taskText) {
  let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  tasksArray = tasksArray.filter(task => task.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

// --- بروزرسانی تسک در LocalStorage (تیک یا ستاره) ---
function updateTaskInStorage(updatedTask) {
  let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
  tasksArray = tasksArray.map(task => 
    task.text === updatedTask.text ? updatedTask : task
  );
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

// --- eventهای اصلی ---
addBtn.addEventListener("click", newTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") newTask();
});

taskInput.focus();

*/ 