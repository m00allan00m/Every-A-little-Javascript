//Q 1: Target grandparent and change color
//Q 2: Target parent and change color
//Q 3: Target child > Change TEXT > Michael Jordan > Scottie Pippen > Dennis Rodman
//Q 4: Target last parent > change font size
//Q 5: Target child first using ElementSibling > Change TEXT > Kobe Bryant
//Q 6: Target child last using ElementSibling >  Change TEXT > Derrick Rose
//Q 7: Target grandparent using child 3 using closest
//Completed

const grandparent = document.querySelector('#grandparent')
grandparent.style.color = 'red'

const parent1 = grandparent.children[0]
parent1.style.color = 'red'
const parent2 = grandparent.children[1]
parent2.style.color = 'green'

const child2 = parent1.children[1]
const child1 = child2.previousElementSibling
const child3 = child2.nextElementSibling

child1.style.color = 'purple'
child2.style.color = 'blue'
child3.style.color = 'yellow'
