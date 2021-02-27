//vriables
const world=document.querySelector("#world");
const pickaxe=document.querySelector("#pickaxe");
const axe=document.querySelector("#axe");
const shoval=document.querySelector("#shoval");

const rock=document.querySelector("#rock");
const treeLeaves=document.querySelector("#treeLeaves");
const wood=document.querySelector("#wood");
const soil=document.querySelector("#soil");
const grass=document.querySelector("#grass");
const btn=document.querySelector("#backBtn");
const reset=document.querySelector("#reset");
const msg=document.querySelector("#msg");
const world1Btn=document.querySelector("#world1");
const world2Btn=document.querySelector("#world2");
const world3Btn=document.querySelector("#world3");

let countRock=document.querySelector("#countRock");
let countLeaves=document.querySelector("#countLeaves");
let countWood=document.querySelector("#countWood");
let countSoil=document.querySelector("#countSoil");
let countGrass=document.querySelector("#countGrass");
let cube;
//object for the tools, the value is the tool id. 
const tools={
    pickaxe:3,
    axe:[5,4],
    shoval:[1,2]
}
//object for the inventury, the value is the counter 
let inventury={
    soil:0,
    treeLeaves:0,
    wood:0,
    rock:0,
    grass:0
}

// Create all divs of the game board (world) and insert them into the world div;
for(let row=0;row<22; row++){
    for(let column=0;column<=30;column++){  
        world.innerHTML+=`<div id=${row},${column} class="tile" type="0"></div>`;    
    }
}

//Fill the game board at first with sky and soil
function fill(){
for(let i=0;i<22;i++){
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
}

// draw trees, rocks, clouds, sun
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

const rockMatrix2=[
    [0,0,0,3,],
    [0,0,3,3,],
    [0,3,3,3,],
    [3,3,3,3,]   
]

const rockMatrix3=[
    [0,0,0,3,0,0,0],
    [0,0,3,3,3,0,0],
    [0,3,3,3,3,3,0],
    [3,3,3,3,3,3,3]   
]

const rockMatrix4=[
    [3,0,0,0,],
    [3,3,0,0,],
    [3,3,3,0,],
    [3,3,3,3,]   
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

const woodMatrix3=[
    [4,4],
    [4,4],
    [4,4]
    
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

const sunMatrix2=[
    [7,7,7,7,7],
    [0,7,7,7,0],
    [0,0,7,0,0]
   
]

fill();//first fill
world1(); //defult world

//functions
/*function draw receives the matrix that needs to be insert into the board gamem, the appropriate row and column in the 
board game, typeNum is the type of the element and type is the type of class
that will be added to that div for the image. */ 
//type: sky=0, grass=1, soil=2, rock=3, wood=4, treeLeaves=5,cloud=6,sun=7;
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

// function that erase the elements of the previous world before drawing the new world
function clearWorld(){
    for(let i=0;i<22;i++){
        for(let j=0;j<=30;j++){
            cube=document.getElementById(`${i},${j}`);
            if(cube.classList.contains('sun')){
                cube.classList.remove('sun');
                cube.setAttribute('type',0);
            }
            if(cube.classList.contains('treeLeaves')){
                cube.classList.remove('treeLeaves');
                cube.setAttribute('type',0);
            }
            if(cube.classList.contains('wood')){
                cube.classList.remove('wood');
                cube.setAttribute('type',0);
            }
            if(cube.classList.contains('rock')){
                cube.classList.remove('rock');
                cube.setAttribute('type',0);
            }
            if(cube.classList.contains('cloud')){
                cube.classList.remove('cloud');
                cube.setAttribute('type',0);
            } 

            if(i<14){ 
                if(cube.classList.contains('grass')){
                    cube.classList.remove('grass');
                    cube.setAttribute('type',0);
                } 
                if(cube.classList.contains('soil')){
                    cube.classList.remove('soil');
                    cube.setAttribute('type',0);
                }  
            }
            
            if(i==14){
                cube.classList.add('grass');
                cube.setAttribute('type',1);
            }

            if(i>14){
                cube.classList.add('soil');
                cube.setAttribute('type',2);
            }
        }
    }
}

// function that reset the inventury
function clearInventury(){
    inventury.soil=0;
    inventury.grass=0;
    inventury.rock=0;
    inventury.treeLeaves=0;
    inventury.wood=0;
    countRock.innerText=inventury.rock;
    countSoil.innerText=inventury.soil;
    countWood.innerText=inventury.wood;
    countGrass.innerText=inventury.grass;
    countLeaves.innerText=inventury.treeLeaves;
    grass.classList.remove('grass');
    soil.classList.remove('soil');
    rock.classList.remove('rock');
    treeLeaves.classList.remove('treeLeaves');
    wood.classList.remove('wood');
}

// function world1 draw the elements in the board game matrix (call function draw)
function world1(){
    draw(treeMatrix,5,21,5,'treeLeaves');
    draw(woodMatrix,10,24,4,'wood')
    draw(rockMatrix,11,17,3,'rock');
    draw(treeMatrix2,5,2,5,'treeLeaves');
    draw(woodMatrix2,10,4,4,'wood');
    draw(rockMatrix,11,6,3,'rock');
    draw(treeMatrix2,5,12,5,'treeLeaves');
    draw(woodMatrix2,10,14,4,'wood');
    draw(cloudMatrix,1,10,6,'cloud');
    draw(cloudMatrix,1,17,6,'cloud');
    draw(sunMatrix,0,0,7,'sun');
}

// function world2 draw the elements in the board game matrix (call function draw)
function world2(){
    draw(treeMatrix,5,7,5,'treeLeaves');
    draw(woodMatrix,10,10,4,'wood')
    draw(rockMatrix,11,17,3,'rock');
    draw(treeMatrix2,5,2,5,'treeLeaves');
    draw(woodMatrix2,10,4,4,'wood');
    draw(cloudMatrix,1,10,6,'cloud');
    draw(cloudMatrix,4,25,6,'cloud');
    draw(rockMatrix2,10,27,3,'rock');
}

// function world3 draw the elements in the board game matrix (call function draw)
function world3(){
    draw(treeMatrix,6,7,5,'treeLeaves');
    draw(woodMatrix3,11,10,4,'wood')
    draw(rockMatrix3,10,17,3,'rock');
    draw(cloudMatrix,1,10,6,'cloud');
    draw(cloudMatrix,2,2,6,'cloud');
    draw(cloudMatrix,4,25,6,'cloud');
    draw(rockMatrix2,10,27,3,'rock');
    draw(rockMatrix4,10,0,3,'rock');
    draw(sunMatrix2,0,16,7,'sun');


    
}

//Event on the window
//Tools Event Listeners
//pickaxe
pickaxe.addEventListener('click',()=>{
        window.onclick = e => {
        let type=e.target.getAttribute("type");
        console.log(type);
        let id=e.target.getAttribute("id");
        if(type==tools.pickaxe){
            document.getElementById(`${id}`).classList.remove(`rock`);
            document.getElementById(`${id}`).setAttribute('type',0);
            rock.classList.add(`rock`);
            inventury.rock=inventury.rock+1;
            countRock.innerText=inventury.rock;
        }
        else{
            pickaxe.style.backgroundColor='red';
        }
}})

//axe
axe.addEventListener('click',()=>{
        window.onclick = e => {
        let type=e.target.getAttribute("type");
        console.log(type);
        let id=e.target.getAttribute("id");
        if(type==tools.axe[0]){
            document.getElementById(`${id}`).classList.remove(`treeLeaves`);
            document.getElementById(`${id}`).setAttribute('type',0);
            treeLeaves.classList.add('treeLeaves');
            inventury.treeLeaves=inventury.treeLeaves+1;
            countLeaves.innerText=inventury.treeLeaves;
        }
        else if(type==tools.axe[1]){
            document.getElementById(`${id}`).classList.remove(`wood`);
            document.getElementById(`${id}`).setAttribute('type',0);
            wood.classList.add('wood');
            inventury.wood=inventury.wood+1;
            countWood.innerText=inventury.wood;
        }
        else{
            axe.style.backgroundColor='red';
        }
}})

//shoval
shoval.addEventListener('click',()=>{
        window.onclick = e => {
        let type=e.target.getAttribute("type");
        let id=e.target.getAttribute("id");
        let location=document.getElementById(`${id}`).getAttribute("id");
        let xy=location.split(',');
        
        if(type==tools.shoval[0]){ //grass
            document.getElementById(`${id}`).classList.remove(`grass`);
            document.getElementById(`${id}`).setAttribute('type',0);
            grass.classList.add('grass');
            inventury.grass=inventury.grass+1;
            countGrass.innerText=inventury.grass;
            msg.style.display = "none";
        }
        else if(type==tools.shoval[1]){ //soil
            let upDiv=document.getElementById(`${xy[0]-1},${xy[1]}`);
            if(upDiv.getAttribute("type")==0){
            document.getElementById(`${id}`).classList.remove(`soil`);
            document.getElementById(`${id}`).setAttribute('type',0);
            soil.classList.add('soil');
            inventury.soil=inventury.soil+1;
            countSoil.innerText=inventury.soil;
            msg.style.display = "none";
        }
            else{
                msg.style.display = "block";
            }
        }
        else{
            shoval.style.backgroundColor='red';
         }
}})

// grass EventListener, type=1
grass.addEventListener('click',()=>{
    window.onclick = e => {
    let type=e.target.getAttribute("type");
    let id=e.target.getAttribute("id");
    let div=document.getElementById(`${id}`);
    if(inventury.grass>0){
        if(type==0){
            div.classList.add(`grass`);
            div.setAttribute('type',1);
            inventury.grass=inventury.grass-1;
            countGrass.innerText=inventury.grass;
        }
        if(inventury.grass==0){
            grass.classList.remove('grass');
        }
    }
}})

// soil EventListener, type=2
soil.addEventListener('click',()=>{
    window.onclick = e => {
    let type=e.target.getAttribute("type");
    let id=e.target.getAttribute("id");
    let div=document.getElementById(`${id}`);
    if(inventury.soil>0){
        if(type==0){
            div.classList.add(`soil`);
            div.setAttribute('type',2);
            inventury.soil=inventury.soil-1;
            countSoil.innerText=inventury.soil;
        }
        if(inventury.soil==0){
            soil.classList.remove('soil');
        }
    }
}})
// rock EventListener, type=3
rock.addEventListener('click',()=>{
        window.onclick = e => {
        let type=e.target.getAttribute("type");
        let id=e.target.getAttribute("id");
        let div=document.getElementById(`${id}`);
        if(inventury.rock>0){
            if(type==0){
                div.classList.add(`rock`);
                div.setAttribute('type',3);
                inventury.rock=inventury.rock-1;
                countRock.innerText=inventury.rock;
            }
            if(inventury.rock==0){
                rock.classList.remove('rock');
            }
        }
}})

// wood EventListener, type=4
wood.addEventListener('click',()=>{
    window.onclick = e => {
    let type=e.target.getAttribute("type");
    let id=e.target.getAttribute("id");
    let div=document.getElementById(`${id}`);
    if(inventury.wood>0){
        if(type==0){
            div.classList.add(`wood`);
            div.setAttribute('type',4);
            inventury.wood=inventury.wood-1;
            countWood.innerText=inventury.wood;
        }
        if(inventury.wood==0){
            wood.classList.remove('wood');
        }
    }
}})

// treeLeaves EventListener, type=5
treeLeaves.addEventListener('click',()=>{
    window.onclick = e => {
    let type=e.target.getAttribute("type");
    let id=e.target.getAttribute("id");
    let div=document.getElementById(`${id}`);
    if(inventury.treeLeaves>0){
        if(type==0){
            div.classList.add(`treeLeaves`);
            div.setAttribute('type',5);
            inventury.treeLeaves=inventury.treeLeaves-1;
            countLeaves.innerText=inventury.treeLeaves;
        }
        if(inventury.treeLeaves==0){
            treeLeaves.classList.remove('treeLeaves');
        }
    }
}})


//buttons EventListeners
btn.addEventListener('click', () => {
    window.location.href = "index.html";
})

reset.addEventListener('click',()=>{
    window.location.reload();
  })

document.addEventListener('click',()=>{
    msg.style.display = "none";
    pickaxe.style.backgroundColor='initial';
    axe.style.backgroundColor='initial';
    shoval.style.backgroundColor='initial';

})

world1Btn.addEventListener('click',()=>{
    clearWorld();
    clearInventury();
    world1();
})

world2Btn.addEventListener('click',()=>{
    clearWorld();
    clearInventury();
    world2();
})

world3Btn.addEventListener('click',()=>{
    clearWorld();
    clearInventury();
    world3();
})
