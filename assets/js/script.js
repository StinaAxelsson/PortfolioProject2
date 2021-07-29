

 //Variables
const player ={
    top: 350,
    left: 130
};

const bullets = [];
const gameArea = document.getElementById('gameArea');

/**
 * Keyboard functions. When press arrow left and right the player will move, 
 * and press space to fire bullets
 * */  
document.onkeydown = function(e){

    if (e.keyCode === 37 ){
        console.log("LEFT");
        player.left = player.left - 10;
            
    }
    if (e.keyCode === 39 ){
        console.log("RIGHT");
         player.left = player.left + 10;
           
    }
    if (e.keyCode === 32){
        console.log("SPACE");
        bullets.push({
            left: player.left +20,
            top: player.top -20
        });
        drawBullets()
    }
        drawPlayer();
    }


/**
 * Place the player on the gameArea
 */
function drawPlayer() {
    document.getElementById('player').style.left = player.left + 'px';
    document.getElementById('player').style.top = player.top + 'px';
}
/**
 * Make the bullets and place them with the player
 */
function drawBullets() {
    document.getElementById('bullets').innerHTML = ""
    for(let i = 0 ; i < bullets.length ; i++ ) {
        document.getElementById('bullets').innerHTML += `<div class='bullet' style='left:${bullets[i].left}px; top:${bullets[i].top}px'></div>`;
    }
}
/**
 * make the bullet follow the players movement in the gameArea
 */
function moveBullets() {
    for(let i = 0 ; i < bullets.length ; i++ ) {
         bullets[i].top = bullets[i].top - 20
    }
}

/**
 * Make new comets and place them in random places on top of the gameArea
 */
function drawComets(){ 
setInterval(() => {
    let comets = document.createElement("div");
    comets.classList.add("comet");
    let cometleft = parseInt(
        window.getComputedStyle(comets).getPropertyValue("left")
        );
        comets.style.left = Math.floor(Math.random() * 250) + "px";

        gameArea.appendChild(comets);
}, 1000); {
        
    }
}
/**
 * Make the comets move from the top of the gameArea 
 * and when touches the bottom an alert stop the game 
 * and say gameover.
 */
function moveComets() { 
setInterval(() => {

     comet = document.getElementsByClassName('comet');

    if (comet != undefined){
        for (let i=0; i < comet.length; i++){
            let comets = comet[i];
            let comettop = parseInt(
                window.getComputedStyle(comets).getPropertyValue("top")
              );
              if (comettop >= 350) {
                alert("Game Over");
                clearInterval(moveComets);
                window.location.reload();
              }

              comets.style.top = comettop + 25 + "px";
        }
    }
    
}, 450); {

}
}

function collisionDetection() {

}

function gameLoop(){

    setTimeout(gameLoop, 1000)
    moveBullets();
    drawBullets();
    moveComets();
    drawComets();
    collisionDetection();
}

gameLoop()