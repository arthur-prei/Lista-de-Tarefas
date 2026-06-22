// entrada do usuário
const task = document.getElementById("task");
const taskPriority = document.querySelector("select");

// botões
const addTaskButton = document.getElementById("add-task");

// listas
const taskList = document.getElementById("list");
const completedTaskList = document.getElementById("completed-list");

// contadores
let completedCounter = 0;
let canceledCounter = 0;
let toDoCounter = 0;

const toDoSpan = document.getElementById("to-do");
const completedSpan = document.getElementById("completed-tasks"); 
const canceledSpan = document.getElementById("canceled-tasks"); 


// função para pegar o dia e hora
function getDateTime() {
    const now = new Date();
    const dayNow = String(now.getDate()).padStart(2, "0") + "/" + String(now.getMonth() + 1).padStart(2, "0") + "/" + String(now.getFullYear()).padStart(2, "0")
    const timeNow = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");

    return {dayNow, timeNow};
}

// função para adicionar uma nova tarefa
function addTask() {
    const li = document.createElement("li");

    if (task.value !== "") {
        let priorityColor = "";
        let priorityBorderColor = "";
        
        if (taskPriority.value === "✦✦✦") {
            li.classList.add("order-1");
            priorityColor = "text-red-400";
            priorityBorderColor = "border-red-400";
        } else if (taskPriority.value ==="✦✦") {
            li.classList.add("order-2");
            priorityColor = "text-yellow-400";
            priorityBorderColor = "border-yellow-400";
        } else {
            li.classList.add("order-3");
            priorityColor = "text-blue-300";
            priorityBorderColor = "border-blue-300";
        }
        
        li.classList.add("flex", "justify-between", "items-center", "border-b-3", priorityBorderColor, "bg-yellow-100", "rounded-md", "p-2");

        // adicionar +1 às tarefas pendentes
        toDoCounter++;
        toDoSpan.textContent = toDoCounter;

        // item novo adicionado
        li.innerHTML = `<div class="flex flex-col">
                            <p class="title text-2xl">${task.value}</p>
                            <p class="${priorityColor} text-xl">${taskPriority.value}</p>
                        </div>
                        <div>
                            <button class="complete-task text-xl text-emerald-700 bg-emerald-200 p-2 rounded hover:bg-emerald-300 cursor-pointer">concluir</button>
                            <button class="cancel-task text-xl text-red-700 bg-red-200 p-2 rounded hover:bg-red-300 cursor-pointer">cancelar</button>
                        </div>
        `;

        taskList.appendChild(li);
        task.setAttribute("placeholder", "adicione uma tarefa aqui");
        task.value = "";

        // como os botões não existiam até o momento em que a tarefa é criada,
        // o EventListener deve ser adicionado após a criação da tarefa
        const cancelTaskButton = li.querySelector(".cancel-task");
        cancelTaskButton.addEventListener("click", cancelTask);

        const completeTaskButton = li.querySelector(".complete-task");
        completeTaskButton.addEventListener("click", completeTask);
    } else {
        task.setAttribute("placeholder", "preencha este campo!");
    }

    // "Clica" automaticamente no input para permitir digitar uma nova tarefa
    // sem precisar usar o mouse
    task.focus();
}


// função para remover uma tarefa
function cancelTask() {
    toDoCounter--;
    toDoSpan.textContent = toDoCounter;

    canceledCounter++;
    canceledSpan.textContent = canceledCounter;

    const {dayNow, timeNow} = getDateTime();

    // sobe até o "li" da tarefa, busca pela classe "title" e pega o texto da classe
    const taskTitle = this.closest("li").querySelector(".title").textContent;

    const li = document.createElement("li");

    // item removido e adicionado ao log como cancelada
    li.classList.add("flex", "justify-between", "items-center", "border-b-2", "border-red-300", "bg-yellow-950", "rounded-md", "p-2");
    li.innerHTML = `<div class="flex flex-col">
                           <p class="text-xl">${taskTitle}</p>
                           <p class="task-priority text-yellow-200 text-xl">status: <span class="text-red-300">cancelada</span></p>
                       </div>
                       <div class="text-end">
                           <p>cancelada em: <span class="text-xl text-yellow-100">${dayNow}</span></p>
                           <p>às: <span class="text-xl text-yellow-100">${timeNow}</span></p>
                       </div>`;
    completedTaskList.insertBefore(li, completedTaskList.firstChild);
    taskList.removeChild(this.closest("li"));
}

// função para concluir uma tarefa
function completeTask() {
    toDoCounter--;
    toDoSpan.textContent = toDoCounter;

    completedCounter++;
    completedSpan.textContent = completedCounter;

    const {dayNow, timeNow} = getDateTime();

    const taskTitle = this.closest("li").querySelector(".title").textContent;

    const li = document.createElement("li");

    // item removido e adicionado ao log como concluída
    li.classList.add("flex", "justify-between", "items-center", "border-b-2", "border-emerald-300", "bg-yellow-950", "rounded-md", "p-2");
    li.innerHTML = `<div class="flex flex-col">
                           <p class="text-xl">${taskTitle}</p>
                           <p class="task-priority text-yellow-200 text-xl">status: <span class="text-emerald-300">concluída</span></p>
                       </div>
                       <div class="text-end">
                           <p>concluída em: <span class="text-xl text-yellow-100">${dayNow}</span></p>
                           <p>às: <span class="text-xl text-yellow-100">${timeNow}</span></p>
                       </div>`;
    completedTaskList.insertBefore(li, completedTaskList.firstChild);
    taskList.removeChild(this.closest("li"));
}

addTaskButton.addEventListener("click", addTask);

task.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});