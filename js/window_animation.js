
function see_the_animation() {
    var window_flap = document.getElementsByClassName("window_flap")
    var monster = document.getElementById("monster")
    var monster_head_eyes = document.getElementsByClassName("monster_head_eyes")

    for (let i = 0; i < window_flap.length; i++) {
        window_flap[i].style.width="20%";
    }
    setTimeout(function()  {
        monster.style.display="unset"
    }, 900);

    setTimeout(function()  {
        monster.style.opacity="1"
    }, 1000);

    setTimeout(function() {
        for (let i = 0; i < monster_head_eyes.length; i++) {
            monster_head_eyes[i].style.height="0";
        }
        setTimeout(function() {
            for (let i = 0; i < monster_head_eyes.length; i++) {
                monster_head_eyes[i].style.height="";
            }
        }, 600);
    }, 1300);
    setTimeout(function() {
        for (let i = 0; i < monster_head_eyes.length; i++) {
            monster_head_eyes[i].style.height="0";
        }
        setTimeout(function() {
            for (let i = 0; i < monster_head_eyes.length; i++) {
                monster_head_eyes[i].style.height="";
            }
        }, 600);
    }, 2300);
    setTimeout(function()  {
        monster.style.opacity="0"
    }, 4500);

    setTimeout(function()  {
        monster.style.display="none"
    }, 5500);

    setTimeout(function() {
        for (let i = 0; i < window_flap.length; i++) {
            window_flap[i].style.width="";
        }
    }, 6000);
}
