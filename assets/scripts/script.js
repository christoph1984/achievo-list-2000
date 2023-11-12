function getGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var greetingMessage;

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good morning! What would you like to achieve today?";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good afternoon! What would you like to achieve today?";
    } else {
        greetingMessage = "Good evening! What would you like to achieve today?";
    }

    return greetingMessage;
}

function displayGreetingMessage() {
    var greetingContainer = document.getElementById("greeting-message");
    var greeting = getGreeting();

    var greetingElement = document.createElement("p");
    greetingElement.innerText = greeting;

    greetingContainer.innerHTML = "";
    greetingContainer.appendChild(greetingElement);
}


displayGreetingMessage();

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

function addTask() {

    document.getElementById("task").focus();

    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("task-list");
        var li = document.createElement("li");
        li.innerText = taskText;

        var doneButton = document.createElement("button");
        doneButton.innerText = "Done";
        doneButton.onclick = function () {
            taskList.removeChild(li);
            displayMotivationalMessage();
        };

        li.appendChild(doneButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

document.getElementById("task").addEventListener("keypress", function (event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
        addTask(); // Call your function here
    }
});

