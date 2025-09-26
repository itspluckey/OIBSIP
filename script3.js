const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");
const toggleModeBtn = document.getElementById("toggleMode");


addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    createTask(taskText, pendingList);
    taskInput.value = "";
  }
});


function createTask(text, parentList, time = new Date()) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  const timeStamp = document.createElement("div");
  timeStamp.className = "task-time";
  timeStamp.textContent = "Added: " + time.toLocaleString();

  const buttons = document.createElement("div");
  buttons.className = "task-buttons";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = () => editTask(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  buttons.append(editBtn, deleteBtn);

  
  if (parentList === pendingList) {
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete";
    completeBtn.onclick = () => {
      li.remove();
      timeStamp.textContent = "Completed: " + new Date().toLocaleString();
      buttons.removeChild(completeBtn);
      completedList.appendChild(li);
    };
    buttons.appendChild(completeBtn);
  }

  li.append(span, timeStamp, buttons);
  parentList.appendChild(li);
}


function editTask(span) {
  const newText = prompt("Edit task:", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim();
  }
}


toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleModeBtn.textContent =
    document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
