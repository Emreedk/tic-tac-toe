const blocks = document.querySelectorAll(".block")

const playerText = document.getElementById("player")
const errorText = document.getElementById("error")

let player = "X"
let gameOver = false;
let winner;

function startGame() {
    playerText.textContent = `${player}'s Turn!!!`

    blocks.forEach(block => block.addEventListener("click", () => chooseArea(block)))  
   
}

function chooseArea(block) {
    if(block.textContent === ""){
         block.textContent = player;
         turnPlayer();
    }
    else{
        //errorText.textContent = "Hey, it's already marked.. Choose another block!!"
        block.style.border = "3px solid red"
        alert("Hey, it's already marked.. Choose another block!!")
        setTimeout(() => {
            block.style.border ="1px solid black"
        }, 1500);
        
    }
    checkWin();
    checkTie();

    if(gameOver){
        playerText.textContent = `Game is over, ${winner} Won !!!`
        blocks.forEach(block => block.style.pointerEvents = 'none')
    }
    

    
    
}

function turnPlayer() {
    if (player === "X") {
        player = "O";
        playerText.textContent = `${player}'s Turn!!!`
        
    }
    else if (player === "O") {
        player = "X";
        playerText.textContent = `${player}'s Turn!!!`
    }
}

function checkWin(){
    checkRows()
    checkColumns()
    checkDiagonals()


}

function checkTie(){

    const values = [];
    blocks.forEach(blocks => values.push (blocks.textContent));
    if(!values.includes("") && gameOver === false){
        playerText.textContent = "Tie !!!";
        blocks.forEach(blocks => block.style.pointerEvents = 'none');
    }

}

function checkRows(){

    let row1= blocks[0].textContent == blocks[1].textContent 
    && blocks[0].textContent == blocks[2].textContent 
    && blocks[0].textContent !== "";
    
    let row2= blocks[3].textContent == blocks[4].textContent 
    && blocks[3].textContent == blocks[5].textContent 
    && blocks[3].textContent !== "";

    let row3= blocks[6].textContent == blocks[7].textContent 
    && blocks[6].textContent == blocks[8].textContent 
    && blocks[6].textContent !== "";

    if(row1 || row2 || row3){
        gameOver = true;
    }

    if(row1) return winner = blocks[0].textContent;
    if(row2) return winner = blocks[3].textContent;
    if(row3) return winner = blocks[6].textContent;

}


function checkColumns(){
    let Column1= blocks[0].textContent == blocks[3].textContent 
    && blocks[0].textContent == blocks[6].textContent
    && blocks[0].textContent !== "";

    let Column2= blocks[1].textContent == blocks[4].textContent 
    && blocks[1].textContent == blocks[7].textContent
    && blocks[1].textContent !== "";

    let Column3= blocks[2].textContent == blocks[5].textContent 
    && blocks[2].textContent == blocks[8].textContent
    && blocks[2].textContent !== "";

    if(Column1 || Column2 || Column3){
        gameOver = true;
    }

    if(Column1) return winner = blocks[0].textContent;
    if(Column2) return winner = blocks[4].textContent;
    if(Column3) return winner = blocks[8].textContent;

}

function checkDiagonals(){
    let Diagonal1= blocks[0].textContent == blocks[4].textContent 
    && blocks[0].textContent == blocks[8].textContent
    && blocks[0].textContent !== "";

    let Diagonal2= blocks[2].textContent == blocks[4].textContent 
    && blocks[2].textContent == blocks[6].textContent
    && blocks[2].textContent !== "";

    if(Diagonal1 || Diagonal2){
        gameOver = true;
    }

    if(Diagonal1) return winner = blocks[0].textContent;
    if(Diagonal2) return winner = blocks[2].textContent;
    
}



startGame()