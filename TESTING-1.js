createContainer();
createEraser();

let currentColor;
let isPainting = false;
//=======================================================
//Create Container

function createContainer() {
    const container = document.createElement('div');

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.height = '700px';
    container.style.width = '700px';
    container.style.backgroundColor = 'gray';
    container.style.border = '10px solid gray';
    container.style.bottom = '100px';
    container.className = 'container';

    document.body.appendChild(container);
    createGrid(container);
};
//===========================================================
//Create Grid

function createGrid(container) {
    for(let i = 0; i < 960; i++) {
        const grid = document.createElement('div');

        grid.style.height = '2.8%';
        grid.style.width = '3%';
        grid.style.border = '1px solid gray';
        grid.style.backgroundColor = 'tan';
        grid.style.margin = 'auto';
        grid.style.cursor = 'crosshair';
        grid.className = 'grid';

        container.appendChild(grid);
    }
};

//================================================
//Create Color Board

    const colorBoard = document.createElement('div');

    colorBoard.style.display = 'flex';
    colorBoard.style.flexWrap = 'wrap';
    colorBoard.style.height = '200px';
    colorBoard.style.width = '135px';
    colorBoard.style.backgroundColor = 'tan';
    colorBoard.style.border = '10px groove gray';
    colorBoard.classList.add('colorBoard');

    document.body.appendChild(colorBoard);

//=============================================================
//Create Colors

const colorsList = ['blue', 'green', 'gray', 
    'crimson', 'black', 'brown',
    'orange', 'teal', 'purple', 
    'yellow', 'indigo', 'cyan',
    'white', 'pink', 'lime'];
  
    colorsList.forEach((color) => {
    let button = document.createElement('button');
    button.style.backgroundColor = color;
    button.style.height = '40px';
    button.style.width = '45px';
    button.classList.add('colorButtons')
    
    
    button.addEventListener('click', (e) => {
    currentColor = e.target.style.backgroundColor;
    colorPicker.style.backgroundColor = e.target.style.backgroundColor;
    })
   
    colorBoard.appendChild(button);
})


//========================================================
// Create Boxes and add event listeners

const grid = document.querySelectorAll('.grid');
grid.forEach((box) => {
    box.addEventListener('click', (e) => {
       box.style.backgroundColor = currentColor;
    })
    box.addEventListener('mousedown', () => {
        isPainting = true;
    })
    box.addEventListener('mouseup', () => {
        isPainting = false;
    })
    box.addEventListener('mouseenter', () => {
        if(isPainting) {
            box.style.backgroundColor = currentColor;
        }
    })
}
)


//======================================================
//Create Eraser Button
function createEraser() {
    const eraserButton = document.createElement('eraser');

    eraserButton.style.height = '40px';
    eraserButton.style.width = '100px';
    eraserButton.style.border = '3px groove pink';
    eraserButton.textContent = 'ERASER';
    eraserButton.className = 'eraser';

    eraserButton.addEventListener('click', () => {
       currentColor = 'tan';
    })

    document.body.appendChild(eraserButton);
}

//==================================================
//Clear Button

const clearButton = document.querySelector('.clearButton');

clearButton.addEventListener('click', () => {
    const gridBoxes = document.querySelectorAll('.grid');
    
    gridBoxes.forEach((cell) => {        
        cell.style.backgroundColor = 'tan'; 
    });
});
//=====================================
// Create Color Picker

const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.className = 'colorPicker'

    colorPicker.addEventListener('input', () => {
       currentColor = colorPicker.value;
       colorPicker.style.background = currentColor;
       
    })
    document.body.appendChild(colorPicker)

console.log(colorPicker);
