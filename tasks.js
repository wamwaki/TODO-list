const submitButton = document.getElementById('submit');
const taskInput = document.getElementById('task');
submitButton.disabled = true;
taskInput.addEventListener('input', () => {
    submitButton.disabled = taskInput.value.trim() === '';
});
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const newTask = taskInput.value.trim();

    if (newTask !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = newTask;

        document.getElementById('tasks').appendChild(listItem);

        taskInput.value = '';
        submitButton.disabled = true;
    }
});