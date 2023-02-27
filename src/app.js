const button = document.querySelector('.input-container button');
const list = document.querySelector('.todo-list');
const input = document.querySelector('.input-container input');
   
button.addEventListener('click', () => {
   const li = document.createElement('li');
   li.className = 'todo-list-item';
   li.innerHTML = input.value;
   const deleteBtn = document.createElement('button');
   const txt = document.createTextNode("\u00D7");
   deleteBtn.appendChild(txt);
   li.appendChild(deleteBtn);     
   list.appendChild(li)   
   input.value = '';

   deleteBtn.addEventListener('click', () => {
      list.removeChild(li)
   })
})

