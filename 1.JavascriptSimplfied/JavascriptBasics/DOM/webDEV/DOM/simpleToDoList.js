const list = document.querySelector('#list')
const form = document.querySelector('#new-item-form')
const input = document.querySelector('#item-input')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const item = document.createElement('div')
  item.classList = 'list-items'
  list.appendChild(item)
  item.innerText = input.value
  item.addEventListener('click', (e) => {
    item.remove()
  })
})

form.classList = 'testing-class-list'
form.classList.remove('testing-class-list')
form.classList = 'testing-class-list'

