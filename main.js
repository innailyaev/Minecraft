//vriables
const world=document.querySelector("#world");
const pickaxe=document.querySelector("#pickaxe");
const axe=document.querySelector("#axe");
const shoval=document.querySelector("#shoval");
const rock=document.querySelector("#rock");
let count=document.querySelector("#count");
let cube;
//object for the tools, the value is the tool id. 
const tools={
    pickaxe:3,
    axe:5,
    shoval:2
}
//object for the inventoey, the value is the counter 
let inventoey={
    soil:0,
    tree:0,
    rock:0
}

// Create all divs of the game board (world) and insert them into the world div;
for(let row=0;row<23; row++){
    for(let column=0;column<=30;column++){  
        world.innerHTML+=`<div id=${row},${column} class="tile" type="0"></div>`;    
    }
}

//Fill the game board at first with sky and soil
for(let i=0;i<23;i++){
    for(let j=0;j<=30;j++){
        if(i===14){
        cube=document.getElementById(`${i},${j}`);
        cube.classList.add('grass');
        cube.setAttribute('type',1);
        }

        else if(i>14){
        cube=document.getElementById(`${i},${j}`);
        cube.classList.add('soil');
        cube.setAttribute('type',2);
        }
        else{
            cube=document.getElementById(`${i},${j}`);
            cube.classList.add('sky');
        }
    }
}

//functions
/*function draw receives the matrix that needs to be insert into the board gamem, the appropriate row and column in the 
board game, typeNum is the type of the element and type is the type of class
that will be added to that div for the image. */ 
//type: sky=0, grass=1, soil=2, rock=3, wood=4, treeLeavs=5,cloud=6;
function draw(matrix,row,column,typeNum,type){

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===typeNum){
                cube=document.getElementById(`${row+i},${column+j}`);
                cube.classList.add(type);
                cube.setAttribute('type',typeNum);

                }
            }
        }
    }


// draw trees, rocks, clouds,
const treeMatrix=[
    [0,0,0,5,5,0,0,0,],
    [0,0,5,5,5,5,0,0,],
    [0,5,5,5,5,5,5,0,],
    [0,5,5,5,5,5,5,0,],
    [0,0,5,5,5,5,0,0,]
]

const woodMatrix=[
    [4,4],
    [4,4],
    [4,4],
    [4,4]
]

const rockMatrix=[
    [0,0,3,0,0,],
    [0,3,3,3,0,],
    [3,3,3,3,3,]   
]

const treeMatrix2=[
    [0,0,5,0,0],
    [0,5,5,5,0],
    [5,5,5,5,5],
    [5,5,5,5,5],
    [0,5,5,5,0]
]

const woodMatrix2=[
    [4],
    [4],
    [4],
    [4]
]

const cloudMatrix=[
    [0,6,6,0],
    [6,6,6,6]
]

const sunMatrix=[
    [7,7,7,7],
    [7,7,7,0],
    [7,7,0,0],
    [7,0,0,0]
]

// set to function the matrix
draw(treeMatrix,5,21,5,'treeLeavs');
draw(woodMatrix,10,24,4,'wood')
draw(rockMatrix,11,17,3,'rock');
draw(treeMatrix2,5,2,5,'treeLeavs');
draw(woodMatrix2,10,4,4,'wood');
draw(rockMatrix,11,6,3,'rock');
draw(treeMatrix2,5,12,5,'treeLeavs');
draw(woodMatrix2,10,14,4,'wood');
draw(cloudMatrix,1,10,6,'cloud');
draw(cloudMatrix,1,17,6,'cloud');
draw(sunMatrix,0,0,7,'sun');







console.log(document.getElementById(`${15},${1}`).getAttribute("type"));



//Event on the window


//
pickaxe.addEventListener('click',()=>{
        window.onclick = e => {
        let type=e.target.getAttribute("type");
        let id=e.target.getAttribute("id");
        if(type==tools.pickaxe){
            let tile=document.getElementById(`${id}`).classList.remove(`rock`);
            rock.classList.add('rock');
            inventoey.rock=inventoey.rock+1;
            count.innerText=inventoey.rock;


        }
        // console.log(e.target.tagName);  // to get the element tag name alone
    } 
})



















/*for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 22; j++) {
        let matrixItem = squareGame.get(`${i},${j}`);
        if (matrixCubeElement[i][j] === 3) {
            matrixItem.cubeDiv.classList.remove(`ground`);
            matrixItem.cubeDiv.classList.add(`sky`);
        }
        if (matrixCubeElement[i][j] === 2) {
            matrixItem.cubeDiv.classList.remove(`ground`);
            matrixItem.cubeDiv.classList.add(`ground`);
        }
*/





