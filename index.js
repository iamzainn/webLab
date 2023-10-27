const input = document.querySelector('#input')
const list = document.querySelector('#todos');
const foam = document.querySelector('#form')
let count = 0
foam.addEventListener('submit',(e)=>{
e.preventDefault();
  if(input.value){
    count++;
    let div = document.createElement('div');
    const input1 = document.createElement('input')
    input1.setAttribute('type',"checkbox")
    input1.addEventListener('click',(e)=>{
    (e.target.nextElementSibling.classList.toggle('completed'))
    })
    div.classList.add(`div-${count}`)
    div.classList.add('box')
    let li = document.createElement('li')
    li.innerText =input.value
    div.appendChild(input1)
    div.append(li);
    const button = document.createElement('button')
    button.innerText = 'Edit';
    button.addEventListener('click',(e)=>{
       const editInput = document.createElement('input')
       const save = document.createElement('save')
       e.target.previousElementSibling.style.display = 'none';
       save.innerText = 'save';
       save.addEventListener('click',()=>{
        e.target.previousElementSibling.innerText = editInput.value;
        editInput.style.display = 'none'
        e.target.previousElementSibling.style.display = 'inline-block';
        save.style.display = 'none'
    })
       editInput.value = e.target.previousElementSibling.innerText;
       e.target.parentElement.append(editInput);
       e.target.parentElement.append(save)

    })
    button.classList.add('edit')
    const del = document.createElement('button');
    del.innerText = 'Delete'
    del.addEventListener('click',(e)=>{
      e.target.parentElement.remove()
    })
    div.append(button)
    div.append(del)
    list.append(div)
    input.value = "";
     

  }
})



