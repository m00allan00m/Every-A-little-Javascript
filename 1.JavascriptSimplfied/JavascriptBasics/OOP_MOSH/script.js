const menuClick = (currentElement) => {
  const menuItems = document.getElementsByClassName('menu-item')

  for (let index = 0; index < menuItems.length; index++) {
    menuItems[index].classList.remove('active')
    
  }
  event.target.classList.add('active')
}