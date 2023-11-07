function addTask() {

    document.getElementById("task").focus();

    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");
        li.innerText = taskText;

        const doneButton = document.createElement("button");
        doneButton.innerText = "Done";
        doneButton.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(doneButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}