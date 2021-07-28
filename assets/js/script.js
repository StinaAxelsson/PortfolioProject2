/*const player = document.getElementById('player');



window.addEventListener("keydown", (e) => {
    let left =parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if (e.key == "ArrowLeft" && left > 0){
            player.style.left = left - 10 + "px";
        } 
        else if 
            (e.key == "ArrowRight" && left <=250){
            player.style.left = left + 10 + "px";
        }

    });*/

    const player ={
        top: 350,
        left: 130
    };

    const bullets = [];

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



    function drawPlayer() {
        document.getElementById('player').style.left = player.left + 'px';
        document.getElementById('player').style.top = player.top + 'px';
    }

    function drawBullets() {
        document.getElementById('bullets').innerHTML = ""
        for(let i = 0 ; i < bullets.length ; i++ ) {
            document.getElementById('bullets').innerHTML += `<div class='bullet' style='left:${bullets[i].left}px; top:${bullets[i].top}px'></div>`;
        }
    }
    function moveBullets() {
        for(let i = 0 ; i < bullets.length ; i++ ) {
            bullets[i].top = bullets[i].top - 8
        }
    }