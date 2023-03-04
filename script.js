const taskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        const newTaskText = taskInput.value;
        if (newTaskText !== "") {
            const newTask = document.createElement("li");
            newTask.textContent = newTaskText;

            const excluir = document.createElement("i");
            excluir.innerHTML = '<i class="ri-delete-bin-2-fill delete"></i>';
            excluir.setAttribute("id", "delete");

            excluir.addEventListener("click", function () {
                newTask.remove();
            });

            newTask.appendChild(excluir);
            taskList.appendChild(newTask);

            taskInput.value = "";
        }
    }
});

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
        excluir.innerHTML = '<i class="ri-delete-bin-2-fill delete"></i>';
        excluir.setAttribute("id", "delete");

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
    const lista = document.querySelectorAll("#taskList li");
    for (var i = 0; (li = lista[i]); i++) {
        li.remove();
    }
}

function downloadPDF() {
    const icons = document.getElementById("icons")
    const lixeira = document.querySelectorAll("li i");

    if (document.querySelectorAll("#taskList li").length === 0) {
        taskInput.style.borderColor = "red"
        setTimeout(() => {
            taskInput.style.borderColor = "black"
        }, 600);
    } else {
        icons.style.display = "none";
        for (let i = 0; i < lixeira.length; i++) {
            lixeira[i].style.display = "none";
        }

        setTimeout(() => {
            icons.style.display = "flex";
            for (let i = 0; i < lixeira.length; i++) {
                lixeira[i].style.display = "block";
            }
        }, 600);

        html2pdf().from(document.body).save("To-Do List.pdf");
    }
}