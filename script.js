//restart game button
let restart = document.querySelector('#button')
//grabs all the squares
let table = document.querySelectorAll('td')
//clear the squares
restart.addEventListener('click', function(){
    for (let i = 0; i < table.length; i++) { 
        table[i].textContent = ''
        table[i].style.backgroundColor = ''
    }
})
//check the square marker

 function clear() {
    if (this.textContent === '') {
        this.textContent = 'X'
        this.style.color = '#000'
        this.style.backgroundColor = '#fff'
        this.style.borderRadius = '10px'
        

    } else if(this.textContent === 'X'){
        this.textContent = 'O'
        this.style.color = 'green'
    }else{
        this.textContent = ''
        this.style.backgroundColor = ''
    }
}

for(let i = 0; i < table.length; i++){
    table[i].addEventListener('click', clear)
}




//for loop to add event listeners to all the squares.

