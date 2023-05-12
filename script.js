const newList = document.getElementById("newList");
const add = document.querySelector(".addNew button");
const container = document.querySelector(".container");

add.addEventListener("click", () => {
    if (newList.value.length > 0) {
      container.innerHTML += `<div class="list">
            <input type="checkbox" class="check"/>
            <input class="content" value="${newList.value}" disabled/>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>`;

          newList.value = "";
    } else {
      alert("Input cannot be empty!");
    }
});

document.addEventListener('click', (e)=>{
  if(e.target.classList == 'delete'){
    e.target.parentElement.remove()
  }
})

document.addEventListener('click', (e)=>{
  if(e.target.classList == 'edit'){
    e.target.previousElementSibling.removeAttribute('disabled')
    e.target.previousElementSibling.focus()
    e.target.innerHTML = 'Save'
    e.target.setAttribute('class','save')
  }else if(e.target.classList == 'save'){
    e.target.previousElementSibling.setAttribute('disabled', 'disabled')
    e.target.previousElementSibling.setAttribute('value', e.target.previousElementSibling.value)
    e.target.innerHTML = 'Edit'
    e.target.setAttribute('class','edit')
  }
})

document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('check')){
    if(e.target.checked){
      e.target.nextElementSibling.style.textDecoration = 'line-through'
    }else if (!e.target.checked){
      e.target.nextElementSibling.style.textDecoration = 'none'
    }
  }
})







