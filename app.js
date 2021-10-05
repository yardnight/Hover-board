const board = document.querySelector('#board')
const SQUARES_NUMBER = 1596
const colors = ['#9b5de5','#f15bb5','#fee440','#00bbf9','#00f5d4','#fff']
for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.setAttribute('onclick', " ")

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.append(square)
}


function setColor(element){
    const color = randomColor()
    element.style.backgroundColor =color
    element.style.opacity = '1'
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px  ${color}`
    element.style.cursor = pointer;
}

function removeColor(element){
    element.style.backgroundColor = 'rgb(216, 216, 216)'
    element.style.boxShadow = `0 0 2px #000`
    element.style.opacity = '0.1'
    element.style.cursor = pointer;
}

function randomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}