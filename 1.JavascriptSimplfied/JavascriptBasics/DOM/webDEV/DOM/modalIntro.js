//target open modal
//target close modal

const openModalButton = document.querySelector('#open-modal-btn')
const closeModalButton = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')
const modal = document.querySelector('#modal')


console.log(modal)
console.log(overlay)
console.log(openModalButton)
console.log(closeModalButton)

openModalButton.addEventListener('click', open)
closeModalButton.addEventListener('click', close)
overlay.addEventListener('click', close)


function close() {
  modal.classList.remove('close')
  overlay.classList.remove('close')
}

function open() {
  modal.classList.add('open')
  overlay.classList.add('open')
}
