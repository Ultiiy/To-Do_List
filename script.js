const taskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

function addTask() {
    const newTaskText = taskInput.value;

    if (newTaskText === "") {
        taskInput.style.borderColor = "red"
        setTimeout(() => {
            taskInput.style.borderColor = "black"
        }, 600);
    } else {
        const newTask = document.createElement("li");
        newTask.textContent = newTaskText;

        const excluir = document.createElement("i");
        excluir.innerHTML = '<i class="ri-delete-bin-2-fill"></i>';
        excluir.classList.add("delete");

        excluir.addEventListener("click", function () {
            newTask.remove();
        });

        newTask.appendChild(excluir);
        taskList.appendChild(newTask);

        taskInput.value = "";
    }
}

function reset() {
    document.getElementById("newTask").value = "";
    var listElements = document.querySelectorAll("#taskList li");
    for (var i = 0; (li = listElements[i]); i++) {
        li.remove();
    }
}