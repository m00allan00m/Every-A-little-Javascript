//select all element
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

//click submit button adds a new element onto list
// disable default behaviour that refreshes the page
      //1.Create a new item
      //2.Add Item to a list
      //3.Clear Input
      //4.Setup event listener to delete


form.addEventListener('submit', e => {
  e.preventDefault
   //1.Create a new item
   const item = document.createElement('div')
   item.innerText = input.nodeValue
   item.classList

   
      list.appendChild(item)

 const inputValue = input.value
  
})
