let tasks = [
    { id: 1, name: "Complete project report", priority: "high" },
    { id: 2, name: "Prepare presentation slides", priority: "medium" },
    { id: 3, name: "Reply to emails", priority: "low" }
];

const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const filterPriority = document.getElementById('filterPriority');

// Function to display tasks
function displayTasks(tasksToShow) {
    taskList.innerHTML = '';
    tasksToShow.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <h3>${task.name}</h3>
            <p><strong>Priority:</strong> ${task.priority}</p>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskElement);
    });
}

// Function to filter tasks by priority
filterPriority.addEventListener('change', function() {
    const selectedPriority = filterPriority.value;
    if (selectedPriority === 'all') {
        displayTasks(tasks);
    } else {
        const filteredTasks = tasks.filter(task => task.priority === selectedPriority);
        displayTasks(filteredTasks);
    }
});

// Function to add a new task
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('taskName').value;
    const taskPriority = document.getElementById('taskPriority').value;
    
    const newTask = {
        id: tasks.length + 1,
        name: taskName,
        priority: taskPriority
    };

    tasks.push(newTask);
    displayTasks(tasks);

    // Reset form fields
    taskForm.reset();
});

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks(tasks);
}

// Initial display of tasks
displayTasks(tasks);