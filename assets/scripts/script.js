// Add event listener to load tasks from local storage when the page is fully loaded
document.addEventListener("DOMContentLoaded", loadTasks);

// Function to save tasks to local storage
function saveTasks() {
    var taskList = document.getElementById("task-list");
    var tasks = [];

    // Loop through task list items and store their text content
    for (var i = 0; i < taskList.children.length; i++) {
        tasks.push(taskList.children[i].innerText.replace("Done", "").trim());
    }
    // Save the tasks array as a JSON string in local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    var taskList = document.getElementById("task-list"); // Defines taskList in this function

    // Create list items for each saved task and append to the task list
    if (tasks) {
        tasks.forEach(function (taskText) {
            var li = document.createElement("li"); // Defines li here
            li.innerText = taskText;

            // Create a 'Done' button for each task
            var doneButton = document.createElement("button"); // Define doneButton here
            doneButton.innerText = "Done";
            doneButton.onclick = function () {
                taskList.removeChild(li); // Remove task from list
                displayMotivationalMessage(); // Display a motivational message
                saveTasks(); // Update tasks in local storage
                checkTasks(); // Check if all tasks are completed
            };

            li.appendChild(doneButton);
            taskList.appendChild(li);
        });
    }
}

// Function to generate a greeting message based on the current time
function getGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var greetingMessage;

    // Determine the greeting message based on the time of day
    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good morning! What would you like to achieve today?";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good afternoon! What would you like to achieve today?";
    } else {
        greetingMessage = "Good evening! What would you like to achieve today?";
    }

    return greetingMessage;
}
// Function to display the greeting message in a designated container
function displayGreetingMessage() {
    var greetingContainer = document.getElementById("greeting-message");
    var greeting = getGreeting();

    var greetingElement = document.createElement("p");
    greetingElement.innerText = greeting;

    greetingContainer.innerHTML = "";
    greetingContainer.appendChild(greetingElement);
}

// Display the greeting message as soon as the script loads
displayGreetingMessage();

// Function to display a random motivational message
function displayMotivationalMessage() {
    var messages = [
        "You're crushing it, one mundane task at a time!",
        "Turning the ordinary into extraordinary!",
        "Even superheroes have to do laundry, you know!",
        "You're so productive, you're practically a task ninja!",
        "High-fiving you through the monotony!",
        "Slaying those everyday dragons!",
        "You're a pro at adulting. Keep it up!",
        "Making the ordinary tasks extraordinary!",
        "Turning the mundane into a masterpiece!",
        "Channeling your inner productivity wizard!",
        "You're leveling up, one chore at a time!",
        "Making the world a better place, one sock at a time.",
        "Mastering the art of getting stuff done!",
        "Conquering chores like a champ!",
        "Transforming the mundane into epic victories!",
        "You're the MVP of everyday tasks!",
        "Cleaning and conquering, you've got this!",
        "Kicking chores' butts, one checkbox at a time!",
        "Crushing your to-do list like a boss!",
        "Flawless victory!",
        "Remember, even superheroes have to do the dishes!",

    ];

    var messageContainer = document.getElementById("motivational-message");
    var randomIndex = Math.floor(Math.random() * messages.length);

    var message = document.createElement("p");
    message.innerText = messages[randomIndex];

    messageContainer.innerHTML = "";
    messageContainer.appendChild(message);
}
// Function to add a new task
function addTask() {

    document.getElementById("task").focus();

    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    // Alert and return if the task input is empty
    if (!taskText) {
        alert("Please enter a task.");
        taskInput.focus();
        return;
    }

    if (taskText !== "") {
        var taskList = document.getElementById("task-list");
        var li = document.createElement("li");
        li.innerText = taskText;

        // Create a 'Done' button for the new task
        var doneButton = document.createElement("button");
        doneButton.innerText = "Done";
        doneButton.onclick = function () {
            taskList.removeChild(li);
            displayMotivationalMessage(); // Display a motivational message
            checkTasks(); // Check if all tasks are completed
        };

        li.appendChild(doneButton);
        taskList.appendChild(li);
        taskInput.value = "";

        saveTasks(); // Save the new list of tasks
    }

}
// Function to check if all tasks are completed
function checkTasks() {
    var taskList = document.getElementById("task-list");
    if (taskList.children.length === 0) {
        // Display a final message if all tasks are completed
        var messageContainer = document.getElementById("motivational-message");
        messageContainer.innerHTML = "<p>Task list? Completed it mate.</p>";
    }
}
// Event listener for the "Tell me how" button to toggle display text visibility
document.getElementById('myButton').addEventListener('click', function () {
    var displayTextElement = document.getElementById('displayText');

    // Check if the displayText element is currently visible
    if (displayTextElement.style.visibility === 'hidden' || displayTextElement.style.visibility === '') {
        // If hidden, make it visible and set the text
        displayTextElement.style.visibility = 'visible';
        displayTextElement.style.opacity = '1';
        displayTextElement.innerText = 'Enter your task below to add it to the list, and once completed, the Achievo - List 2000 will let you know how great you are!';
    } else {
        // If visible, hide it by setting visibility to hidden and opacity to 0
        displayTextElement.style.visibility = 'hidden';
        displayTextElement.style.opacity = '0';
    }
});

// Event listener to add a task when the Enter key is pressed in the task input
document.getElementById("task").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

