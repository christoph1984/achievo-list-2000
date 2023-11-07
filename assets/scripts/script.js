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

function displayMotivationalMessage() {
    const messages = [
        "Test message",

    ];

    const messageContainer = document.getElementById("motivational-message");
    const randomIndex = Math.floor(Math.random() * messages.length);

    const message = document.createElement("p");
    message.innerText = messages[randomIndex];

    messageContainer.innerHTML = "";
    messageContainer.appendChild(message);
}