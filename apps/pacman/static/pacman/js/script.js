$(document).ready(function() {
    var world = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2],
        [2,1,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,1,2],
        [2,3,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,3,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,1,2],
        [2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2],
        [2,2,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,2,2],
        [0,0,0,2,1,2,0,0,0,0,0,0,0,2,1,2,0,0,0],
        [0,0,0,2,1,2,0,2,2,0,2,2,0,2,1,2,0,0,0],
        [2,2,2,2,1,2,0,2,5,6,0,2,0,2,1,2,2,2,2],
        [0,0,0,0,1,0,0,2,0,7,0,2,0,0,1,0,0,0,0],
        [2,2,2,2,1,2,0,2,0,0,8,2,0,2,1,2,2,2,2],
        [0,0,0,2,1,2,0,2,2,2,2,2,0,2,1,2,0,0,0],
        [0,0,0,2,1,2,0,0,0,0,0,0,0,2,1,2,0,0,0],
        [2,2,2,2,1,2,0,2,2,2,2,2,0,2,1,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2],
        [2,3,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,3,2],
        [2,1,1,2,1,1,1,0,0,0,0,0,1,1,1,2,1,1,2],
        [2,2,1,2,1,2,1,2,2,2,2,2,1,2,1,2,1,2,2],
        [2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2],
        [2,1,2,2,2,2,2,2,1,2,1,2,2,2,2,2,2,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    ];

    var pacman = {
        x: 9,
        y: 18
    }

    var score = 0;
    var count = 0;
    var total_dots = 154;

    function displayWorld() {
        var output = "";
        
        for (var i = 0; i < world.length; i++) {
            output += "\n<div class='row'>"
            for (var j = 0; j < world[i].length; j++) {
                if (world[i][j] == 8) {
                    output += "\n\t<div id='orange_ghost'></div>"
                }
                if (world[i][j] == 7) {
                    output += "\n\t<div id='red_ghost'></div>"
                }
                else if (world[i][j] == 6) {
                    output += "\n\t<div id='green_ghost'></div>"
                }
                else if (world[i][j] == 5) {
                    output += "\n\t<div id='cyan_ghost'></div>"
                }
                else if (world[i][j] == 4) {
                    output += "\n\t<div id='cherry'></div>"
                }
                else if (world[i][j] == 3) {
                    output += "\n\t<div class='cookie'></div>";
                }
                else if (world[i][j] == 2) {
                    output += "\n\t<div class='brick'></div>";
                }
                else if (world[i][j] == 1) {
                    output += "\n\t<div class='dot'></div>";
                }
                else if (world[i][j] == 0) {
                    output += "\n\t<div class='empty'></div>";
                }
                // output += world[i][j];
            }
            output += "\n</div>"
        }
        // console.log(output)
        $("#world").html(output);
    }

    function displayPacman() {
        $("#pacman").css("top", pacman.y*40+"px")
        $("#pacman").css("left", pacman.x*40+"px")
    }
    function displayScore() {
        $("#score").html(score);
    }
    
    function displayCherry() {
        setTimeout(function() {
            $("#cherry").css("display","inline-block")
            // displayWorld();
        }, Math.floor(Math.random()*10) + 5*1000)
    }

    displayCherry();
    displayWorld();
    displayPacman();
    displayScore();

    $(window).keydown(function(e) { 
        console.log(e.keyCode);
        if (e.keyCode == 37) { // left
            e.preventDefault();
            $("#pacman").css("background-image","url('/static/pacman/img/pacman/pacman-left.gif')")
           if (world[pacman.y][pacman.x-1] != 2 && pacman.x-1 != -1) {
               pacman.x -= 1;
            }
            else if (pacman.x-1 == -1) {
                pacman.x = 18
            }
        }
        else if (e.keyCode == 39) { // right
            e.preventDefault();
            $("#pacman").css("background-image","url('/static/pacman/img/pacman/pacman-right.gif')")
            if (world[pacman.y][pacman.x+1] != 2 && pacman.x+1 != 19) { 
                pacman.x += 1;
            }
            else if (pacman.x+1 == 19) {
                pacman.x = 0
            }
        }
        else if (e.keyCode == 38) { // up
            e.preventDefault();
            $("#pacman").css("background-image","url('/static/pacman/img/pacman/pacman-up.gif')")
            if (world[pacman.y-1][pacman.x] != 2) { 
                pacman.y -= 1;
            }
        }
        else if (e.keyCode == 40) { // down
            e.preventDefault();
            $("#pacman").css("background-image","url('/static/pacman/img/pacman/pacman-down.gif')")
            if (world[pacman.y+1][pacman.x] != 2) {
                pacman.y += 1;
            }
        }
        else if (e.keyCode == 75) { // for testing, kill pacman with "k"
            e.preventDefault();
            $("#pacman").css("background-image","url('/static/pacman/img/pacman/pacman-dying-no-loop.gif')")
        }

        if (world[pacman.y][pacman.x] == 1) { // dots
            score += 10;
            count++;
            world[pacman.y][pacman.x] = 0;
            if (count == total_dots) {
                alert("you win");

            }
            else {
                displayScore();
                displayWorld();
            }
        }
        else if (world[pacman.y][pacman.x] == 3) { // cookie
            world[pacman.y][pacman.x] = 0;
            // TODO: change ghost color and have them killable
            displayScore();
            displayWorld();
        }
        else if (world[pacman.y][pacman.x] == 4) { // cherry
            score += 50
            world[pacman.y][pacman.x] = 0;
            displayScore();
            displayCherry();
            displayWorld();
        }

        displayPacman();
    })

})