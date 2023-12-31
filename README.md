# The Achievo-List 2000

Welcome to "The Achievo-List 2000" - a dynamic to-do list application designed to streamline your task management and boost productivity with a user-friendly and motivational interface. Ideal for organizing daily chores, work tasks, and personal goals.

![Achievo-List responsive image](assets/images/list_am_i_responsive.png)

## Table of Contents
1. [Welcome](#the-achievo-list-2000)
2. [Key Features](#key-features)
3. [Getting Started](#getting-started)
   - [Adding a Task](#adding-a-task)
   - [Viewing and Managing Tasks](#viewing-and-managing-tasks)
4. [User Experience Highlights](#user-experience-highlights)
5. [Design](#design)
   - [Wireframes from Lucid](#wireframes-from-lucid)
   - [Function Overview](#The-Achievo-List-2000-Function-Overview)
6. [Version Control](#version-control)
7. [Testing](#testing)
   - [Browser Compatibility](#browser-compatibility)
   - [Device Compatibility](#device-compatibility)
   - [Greeting Message Time of Day Testing](#greeting-message-time-of-day-testing)
   - [W3C HTML Validation](#w3c-html-validation)
   - [W3C CSS Validation](#w3c-css-validation)
   - [JShint Javascript Validation](#jshint-javascript-validation)
   - [Lighthouse Testing](#lighthouse-testing)
8. [Cloning the Repository](#cloning-the-repository)
9. [Forking](#forking)
10. [Deployment](#deployment)
11. [Technologies](#technologies)
12. [Credits](#credits)
13. [Contact](#contact)


## Key Features

- **Task Management:** Add, view, and manage your tasks with ease. The intuitive input field and "Add" button make entering tasks effortless.
- **Real-Time Updates:** The task list updates in real time, allowing you to see your progress and stay organized.
- **Motivational Messages:** Get inspired with motivational messages that appear to encourage you as you complete tasks.
- **Responsive Design:** Enjoy a seamless experience across all devices, thanks to the application's responsive web design.
- **User-Friendly Interface:** Experience a clean, minimalistic interface designed for ease of use and efficiency.
- **Interactive Elements:** Engaging buttons and interactive elements enhance user experience and make task management more enjoyable.

## Getting Started

Visit [The Achievo-List 2000](https://christoph1984.github.io/achievo-list-2000/) and get a handle on your tasks in a fun and effective way!

### Adding a Task

- Type your task into the "Put jobs here" field.
- Click "Add" to append your task to the list, where it's displayed prominently.

### Viewing and Managing Tasks

- Tasks are listed clearly below the input field.
- Interact with your list to track and manage your daily goals.

## User Experience Highlights

- **Simplicity:** The application is built with a focus on simplicity, making it accessible for users of all ages and tech-savviness.
- **Engagement:** Interactive elements like buttons and motivational messages create a more engaging experience.
- **Accessibility:** Designed with accessibility in mind, ensuring it's usable by everyone.

## Design 

### Wireframes from Lucid

![Lucid Wireframe Large Screen](assets/images/list_lucid_screenshot.png)

## The Achievo-List 2000 Function Overview
This section provides a summary of each function used in the Achievo-List 2000 application, outlining their purposes and behaviors.

### `saveTasks`
- **Purpose**: Saves the current list of tasks to local storage.
- **Behavior**: Iterates over the tasks in the `task-list` element, extracts their text content, and stores them in local storage as a JSON string.

### `loadTasks`
- **Purpose**: Loads and displays tasks from local storage when the page is loaded.
- **Behavior**: Retrieves tasks stored in local storage, creates list items for each task, and appends them to the `task-list` element. Each task item includes a 'Done' button with an event handler to remove the task from the list and update the display and storage.

### `getGreeting`
- **Purpose**: Generates a greeting message based on the current time.
- **Behavior**: Determines the time of day and returns an appropriate greeting message ("Good morning", "Good afternoon", or "Good evening").

### `displayGreetingMessage`
- **Purpose**: Displays a greeting message in a designated container.
- **Behavior**: Gets a greeting message using `getGreeting` function and displays it in the `greeting-message` element.

### `displayMotivationalMessage`
- **Purpose**: Displays a random motivational message.
- **Behavior**: Selects a random message from a predefined array and displays it in the `motivational-message` element.

### `addTask`
- **Purpose**: Adds a new task to the task list.
- **Behavior**: Retrieves the entered task from the input field, validates it, creates a new list item with a 'Done' button, and appends it to the `task-list`. Saves the updated list of tasks.

### `checkTasks`
- **Purpose**: Checks if all tasks are completed and displays a final message.
- **Behavior**: Checks the length of the `task-list` element and, if empty, displays a completion message in the `motivational-message` element.

### Event Listener: "Tell me how" Button
- **Purpose**: Toggles the visibility of a text element when the "Tell me how" button is clicked.
- **Behavior**: Changes the visibility and content of the `displayText` element upon clicking the button.

### Event Listener: Task Input "Enter" Key
- **Purpose**: Adds a task when the Enter key is pressed in the task input field.
- **Behavior**: Triggers the `addTask` function when the Enter key is pressed while focusing on the task input field.


## Version Control
<ul>
<li>The website was developed through Codeanywhere IDE.</li>
<li>Code has been pushed to repository on Github with following git commands:</li>
  <ul>
  <li>git add . - to add files ready to commit</li>
  <li>git commit -m "message" - to commit the code to local repository ready to be pushed</li>
  <li>git push - final command used to push committed code to remote repo on Github</li>
  </ul> 
</ul>

## Testing

* Browser Compatibility

| Browser | Test | Result  |
--- | --- | ---
Google Chrome | No issues.| Pass
Safari | No issues. | Pass
Mozilla Firefox | No issues.| Pass
Microsoft Edge | No issues. | Pass

* Device Compatibility

| Device | Test | Result  |
--- | --- | ---
Google Pixel 6 Pro | No issues.| Pass
iPhone SE| No issues. | Pass
iPhone 13 | No issues.| Pass

* Greeting message time of day testing

| Time of Day | Result  |
--- | --- 
Morning | Pass 
Afternoon | Pass
Evening | Pass

* W3C HTML validation - PASS
![W3C HMTL Validation](assets/images/list_html_valid.png)

* W3C CSS validation - PASS
![W3C CSS Page Validation](assets/images/list_css_valid.png)

* JShint Javascript validation - PASS
![JShint validation](assets/images/list_jshint_valid.png)


* Lighthouse testing (site tested in Lighthouse repeatedly throughout development)

![Lucid Wireframe Mobile Screen](assets/images/list_lighthouse.png)

### Cloning the Repository
<ul>
<li>Navigate to the GitHub Repository 'christoph1984/achievo-list-2000'</li>
<li>Click 'Code' drop down menu - a green button shown right above the file list.</li>
<li>Copy the URL of the repository using 'HTTPS', 'SSH'or 'Github CLI'.</li>
<li>Open Git Bash.</li>
<li>Change the current working directory to the location where you want the cloned directory.</li>
<li>Type 'git clone', and then paste the URL copied earlier.</li>
<li>Press enter to create local clone. A clone of the repository will now be created.</li>
<li>For more details on how to clone the repository in order to create a copy for own use refer to the site: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository.</li>
</ul>

### Forking
<ul>
<li>Navigate to the GitHub Repository 'christoph1984/achievo-list-2000’</li>
<li>Click 'Fork' located towards top right corner on GitHub page.</li>
<li>Select 'owner' for the forked repository from the dropdown menu under 'owner'.</li>
<li>It will create forked repo under the same name as original by default. But you can type a name in 'Repository name' or add a description in 'Description' box.</li>
<li>Click on 'Create fork'. A forked repo is created.</li>
<li>Forking enables you to implement modifications without impacting the original project. You can propose changes by submitting a pull request. Subsequently, the Project Owner can evaluate the pull request, decide whether to accept the proposed changes, and merge them.</li>
<li>When you have fork to a repository, you don't have access to files locally on your device, for getting access you will need to clone the forked repository.</li>
</ul>

### Deployment
<ul>
<li>Go to GitHub repository.</li>
<li>Click on 'Settings'.</li>
<li>Click on 'Pages'(tab on the left sidebar).</li>
<li>Scroll to 'Build and deployment'/'Source' section.</li>
<li>Find the sub-section 'Branch'.</li>
<li>From the drop-down menu 'none'/'select branch' and choose source 'main' (or 'master').</li>
<li>Click 'Save'</li>
<li>Wait until you can see a link for deployed page within GitHub Page section. This can take a while. Once the page updates you will see a message: Your site is live at https://christoph1984.github.io/achievo-list-2000/</li>
</ul>

## Technologies
* HTML - used to create the main structure of the website.
* CSS - used to style the website.
* Javascript - used to create the interactive functions
* Codeanywhere built-in formatter to format structure for HTML, CSS & JS files in the project.
* Codeanywhere IDE to develop the website.
* GitHub to host the source code and GitHub Pages to deploy and host the live site.
* Git to provide the version control to commit and push code to the repository.
* Google Fonts for typography.
* FontAwesome v5.15.4 for icons.
* Google Chrome Dev Tools for inspecting, debugging pages and testing layouts.
* Pexels - used to source the images for the website.
* Favicon.io to create the website favicon.
* Am I Responsive to create the Mockup image in this README.
* Google Chrome's Lighthouse to test accessibility for desktop and mobile devices.
* W3C HTML Markup Validator to validate the HTML Code.
* W3C Jigsaw CSS Validator to validate the CSS Code.
* JSHINT validator to validate the JS code
* Code Institute's Codeanywhere Template to generate the workspace for the project.

## Credits
* Google Fonts - for fonts to use in website.
* FontAwesome for all the icons used in the website.
* W3Schools.com - used throughout the website for general help.
* Stack Overload - used throughout the website for general help.
* Google
* Lucid - for wireframe design
* The favicon.ico image for the website.
* freeCodeCamp.org for general guidance and examples
* daily-dev-tips.com for initial guidance on the time-based greeting in vanilla JS
* blog.logrocket.com for help with the Local Storage function

## Contact

Reach out to Christoph1984 for queries or feedback on [Github](https://github.com/christoph1984).

Get organized and stay motivated with "The Achievo-List 2000"!
