const heading1 = document.createElement("h1")
const body = document.querySelector("body")
const subjectHeading = document.querySelector("h1")
const subjects = document.querySelector(".subjects")
const favSubject = document.querySelector(".fav")

body.appendChild(heading1)
heading1.innerHTML = "Subjects I love"
heading1.appendChild(subjects)

const sub1 = subjects.firstElementChild
sub1.innerHTML = "first subject : Arts"

const sub3 = subjects.lastElementChild
sub3.innerHTML = "third subject : Basketball"
const parentNode = sub3.parentNode
const sub2 = sub3.previousElementSibling
sub2.innerHTML = "lets change the favorite subject"

sub1.remove()
sub2.remove()
sub3.remove()
