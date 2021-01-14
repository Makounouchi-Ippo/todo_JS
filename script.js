//selectore
const input = document.querySelector('.todo-input');
const button = document.querySelector('.todo-button');
const list = document.querySelector('.todo-list');


//Event listeners

button.addEventListener('click',addTodo)
list.addEventListener('click', deleteCheckTodo)

// functionn


function addTodo (event){
    event.preventDefault();
    //create div todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create Li
    const newTodo = document.createElement('li')
    newTodo.innerText = input.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    // Check Mark Button
    const completeButton= document.createElement('button')
    completeButton.innerHTML= '<i class="fas fa-check"><i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton)
    //check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML=('<i class="fas fa-trash"><i>')
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    //APPEND TO LIST
    list.appendChild(todoDiv)
    //clear Todo value
    input.value= '';
}

function deleteCheckTodo (event){
    const item = event.target;
    // console.log(item.classList)
    //deleteTodo
    if(item.classList[0] === 'trash-btn'){
        //animation
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend', ()=>{
            todo.remove()

        })
    }

    //CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }


}