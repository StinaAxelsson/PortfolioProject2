const player = document.getElementById('player');



window.addEventListener("keydown", (e) => {
    let left =parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if (e.key == "ArrowLeft" && left > 0){
            player.style.left = left - 10 + "px";
        } 
        else if 
            (e.key == "ArrowRight" && left <=250){
            player.style.left = left + 10 + "px";
        }

    });