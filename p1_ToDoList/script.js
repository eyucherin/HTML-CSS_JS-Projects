const userInput = document.querySelector('#user_input');
const addInputForm = document.querySelector("form");
const tasksList = document.querySelector('#tasks');

//even listener for adding a task
addInputForm.addEventListener("submit", (event) => {
    //use prevent Default to stop the page from re-rendering
    event.preventDefault();
    // if the input is not empty
    if (userInput.value !== "") {
        //read the user input
        const taskStr = userInput.value;
        // creating the new element to add to the list
        const newTask = document.createElement('li');
        newTask.className = "newItem"
        newTask.innerHTML = taskStr
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = `Done`;
        newTask.appendChild(deleteBtn)
        //Adding event listener to delete button
        deleteBtn.addEventListener('click', () => {
            tasksList.removeChild(newTask);
        });

        tasksList.appendChild(newTask);
        userInput.value = "";
    }
});
