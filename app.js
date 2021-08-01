// variable declaration

var old = document.querySelector('.old'),
    btn1 = document.querySelector('.visite'),
    level = document.querySelector('#level'),
    mot = document.querySelector('.mot'),
    last = document.querySelector('#last'),
    back2 = document.querySelector('.back2'),
    back3 = document.querySelector('.back3')


// function content

    const hideTag = () => {
        old.style.display="none";
        btn1.style.display="none";
        level.style.display="flex";
        back2.style.display="flex"
    } 
    
    const showfirst = () => {
        old.style.display="block";
        btn1.style.display="block";
        level.style.display="none";
        back2.style.display="none"
    } 

    const hideTag2 = () => {
        level.style.display="none";
        last.style.display="flex";
        back2.style.display="none"
        back3.style.display="flex"
    } 

    const showsecond = () => {
        level.style.display="flex";
        last.style.display="none";
        back2.style.display="flex"
        back3.style.display="none"
    } 

// Event Listener
    btn1.addEventListener('click',hideTag)
    mot.addEventListener('click',hideTag2)
    back2.addEventListener('click',showfirst)
    back3.addEventListener('click',showsecond)
