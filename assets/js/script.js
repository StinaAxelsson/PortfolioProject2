


    const player ={
        top: 350,
        left: 130
    };

    const bullets = [];
    const comets = [
    ];

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
    function drawComets() {
        let comet = document.getElementsByClassName("comet");

        for(let i = 0 ; i < comet.length ; i++ ) {
            document.getElementById('comets').innerHTML += `<div class='comet' style='left:${comets[i].left}px; top:${comets[i].top}px'></div>`;
        }
    }
    function moveComets() {
        for(let i = 0 ; i < comets.length ; i++ ) {
            comets[i].top = comets[i].top + 1;
        }
    }

    function gameLoop(){
        setTimeout(gameLoop, 1000)
        moveBullets();
        drawBullets();
        moveComets();
        drawComets();
    }
    gameLoop()