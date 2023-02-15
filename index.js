const btn1 = document.getElementById(1);
const btn2 = document.getElementById(2);
const body = document.querySelector('body');

function addTodoList(date) {
  if (document.body.contains(document.querySelector('.todoPart'))) {
    const todoPartSection = document.querySelectorAll('.todoPart');
    todoPartSection.forEach(elem => {elem.style.display = 'none';});
    if (document.body.contains(document.getElementById(`${date}todoPart`))) {
      const selectedDateTodo = document.getElementById(`${date}todoPart`);
      selectedDateTodo.style.display = 'block';
      return;
    }
  }
  const todoPart = document.createElement('section');
  todoPart.id = `${date}todoPart`;
  todoPart.classList.add('todoPart');
  body.appendChild(todoPart);
  
  const todoTitle = document.createElement('h1');
  todoTitle.innerHTML = 'TO-DO';
  todoPart.appendChild(todoTitle);

  const todoCreatePart = document.createElement('div');
  todoCreatePart.id = 'todoCreatePart';
  todoPart.appendChild(todoCreatePart);

  const todoCreateBtn = document.createElement('button');
  todoCreateBtn.id = 'todoCreateBtn';
  todoCreateBtn.innerHTML = '할 일 추가';
  todoCreatePart.appendChild(todoCreateBtn);

  const todoInput = document.createElement('input');
  todoInput.id = `${date}todoInput`;
  const submitBtn = document.createElement('input');

  const todoLists = document.createElement('ul');
  todoLists.id = 'todoLists';
  todoPart.appendChild(todoLists);
  
  function createInput() {
    todoCreatePart.appendChild(todoInput);
    todoInput.placeholder = '내용을 입력하세요.';
    todoCreatePart.appendChild(submitBtn);
    submitBtn.type = 'submit';
    submitBtn.value = '추가';
    todoCreateBtn.removeEventListener('click', createInput);
    todoCreatePart.removeChild(todoCreateBtn);
  }
  todoCreateBtn.addEventListener('click', createInput);
  
  function submitTodo() {
    if (todoInput.value === '') return;
    const deleteBtn = document.createElement('button');
    const todo = document.createElement('li');
    todoLists.appendChild(todo);
    todo.innerHTML = todoInput.value;
    todo.id = `${date}todo`;

    todo.appendChild(deleteBtn);
    deleteBtn.innerHTML = 'X';
    deleteBtn.addEventListener('click', () => {todoLists.removeChild(todo);});

    todoCreatePart.removeChild(todoInput);
    todoCreatePart.removeChild(submitBtn);
    todoCreatePart.appendChild(todoCreateBtn);
    todoCreateBtn.addEventListener('click', createInput);
    todoInput.value = '';
  }
  submitBtn.addEventListener('click', submitTodo);
}

btn1.addEventListener('click', () => addTodoList(1));
btn2.addEventListener('click', () => addTodoList(2));