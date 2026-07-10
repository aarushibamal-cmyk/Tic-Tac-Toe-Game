const taskArray = JSON.parse(localStorage.getItem("tasks")) || []
const addBtn = document.querySelector('.add-btn')
const task = document.getElementById('task')
const taskList = document.querySelector('.task-list')

function displayTask(t, index) {
    // DISPLAY THE TASK
    const list = document.createElement("li");
    list.textContent = t;
    taskList.appendChild(list);

    // Declare both buttons up front so both closures can see them
    const editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    editBtn.addEventListener('click', function () {
        const input = document.createElement("input")
        input.value = list.firstChild.textContent;
        list.textContent = "";
        list.appendChild(input);

        const saveBtn = document.createElement("button")
        saveBtn.textContent = "SAVE";
        list.appendChild(saveBtn);

        saveBtn.addEventListener('click', function () {
            let newTask = input.value.trim();
            if (newTask) {
                taskArray[index] = newTask;
                localStorage.setItem("tasks", JSON.stringify(taskArray));
                list.textContent = newTask;
                list.appendChild(editBtn);
                list.appendChild(deleteBtn);
            } else {
                // if cleared, just restore the old value instead of leaving it broken
                list.textContent = t;
                list.appendChild(editBtn);
                list.appendChild(deleteBtn);
            }
        })
    })
    list.appendChild(editBtn);

    deleteBtn.addEventListener('click', function () {
        taskArray.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(taskArray));
        renderAllTasks(); // re-render so remaining indexes stay correct
    })
    list.appendChild(deleteBtn)
}

function renderAllTasks() {
    taskList.querySelectorAll("li").forEach(li => li.remove());
    taskArray.forEach((t, index) => displayTask(t, index));
}

addBtn.addEventListener('click', function () {
    if (task.value.trim()) {
        taskArray.push(task.value.trim())
        localStorage.setItem("tasks", JSON.stringify(taskArray))
        task.value = ""
        renderAllTasks(); // re-render so index stays in sync
    }
})

// Load saved tasks when page opens
renderAllTasks();

