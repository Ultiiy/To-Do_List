const taskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");
let linhaAtravessada = false;

taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        if (taskInput.value !== "") {
            const newTask = document.createElement("li");
            const task = document.createElement("p");
            task.textContent = taskInput.value;

            const dellTask = document.createElement("i");
            dellTask.classList.add("ri-delete-bin-2-fill");

            dellTask.addEventListener("click", function () {
                newTask.remove();
            });

            newTask.addEventListener("click", function () {
                linhaAtravessada = !linhaAtravessada;
                if (linhaAtravessada) {
                    task.style.textDecoration = 'line-through';
                } else {
                    task.style.textDecoration = 'none';
                }
            })

            taskList.appendChild(newTask);
            newTask.appendChild(task);
            newTask.appendChild(dellTask);
            taskInput.value = "";
        }
    }
});

function addTask() {
    if (taskInput.value === "") {
        taskInput.style.borderColor = "red"
        setTimeout(() => {
            taskInput.style.borderColor = "black"
        }, 600);
    } else {
        const newTask = document.createElement("li");
        const task = document.createElement("p");
        task.textContent = taskInput.value;

        const dellTask = document.createElement("i");
        dellTask.classList.add("ri-delete-bin-2-fill");

        dellTask.addEventListener("click", function () {
            newTask.remove();
        });

        newTask.addEventListener("click", function () {
            linhaAtravessada = !linhaAtravessada;
            if (linhaAtravessada) {
                task.style.textDecoration = 'line-through';
            } else {
                task.style.textDecoration = 'none';
            }
        })

        taskList.appendChild(newTask);
        newTask.appendChild(task);
        newTask.appendChild(dellTask);
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
        }, 1);

        html2pdf().from(document.body).save("To-Do List.pdf");
    }
}