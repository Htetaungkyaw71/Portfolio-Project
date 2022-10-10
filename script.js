// To add menu for interactive 

let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('closeMenu')
let upper = document.querySelector('.upper')

openMenu.onclick = ()=>{
    open()
}
closeMenu.onclick = ()=>{
    close()
}

function close(){
    openMenu.style.display = "block";
    overlay.style.display = "none";
    document.body.style.position = "relative";
    upper.classList.remove('blur')  
}

function open(){
    openMenu.style.display = "none";
    overlay.style.display = "block";
    document.body.style.position = "fixed";
    upper.classList.add('blur')  
}

