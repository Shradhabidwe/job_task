// script.js

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function editTask() {
    const selectedTask = taskList.querySelector(".selected");
    if (selectedTask) {
        const newTaskText = prompt("Edit the task:", selectedTask.textContent);
        if (newTaskText !== null) {
            selectedTask.textContent = newTaskText;
        }
    } else {
        alert("Select a task to edit.");
    }
}

function deleteTask() {
    const selectedTask = taskList.querySelector(".selected");
    if (selectedTask) {
        if (confirm("Delete the selected task?")) {
            taskList.removeChild(selectedTask);
        }
    } else {
        alert("Select a task to delete.");
    }
}

// Add event listeners to handle task selection
taskList.addEventListener("click", (e) => {
    const selectedTask = taskList.querySelector(".selected");
    if (selectedTask) {
        selectedTask.classList.remove("selected");
    }
    if (e.target.tagName === "LI") {
        e.target.classList.add("selected");
    }
});
