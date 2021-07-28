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

    document.onkeydown = function(e){

        if (e.key == "ArrowLeft" ){
            console.log("LEFT");
            player.left = player.left - 10;
            movePlayer();
        }
        else if (e.key == "ArrowRight" ){
            console.log("RIGHT");
            player.left = player.left + 10;
            movePlayer();
        }
    }

    function movePlayer(){
        document.getElementById('player').style.left = player.left + 'px';
    }