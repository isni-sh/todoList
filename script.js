
const addForm = document.querySelector('.additems'),
        list = document.querySelector('.itemlist'),
        html = todo => {
            const showHtml = `
            <li>${todo} <span class="remove">X</span></li>
            `;

            list.innerHTML += showHtml;
        },
        search = document.querySelector('.search input')

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.items.value.trim();

    if(todo.length !== 0){
        html(todo);
        addForm.reset();
    }
});


//delete item
list.addEventListener('click', e => {
    if(e.target.classList.contains('remove')){
        e.target.parentElement.remove();
    }

    
})


//search 
search.addEventListener('keyup', () => {
    
    const term = search.value.trim();
    filterTodos(term);
    
});

const filterTodos = term => {

   Array.from(list.children)
   .filter((todo) =>  !todo.textContent.includes(term))
   .forEach((todo) => todo.classList.add('filter'));

   Array.from(list.children)
   .filter((todo) =>  todo.textContent.includes(term))
   .forEach((todo) => todo.classList.remove('filter'));
}
