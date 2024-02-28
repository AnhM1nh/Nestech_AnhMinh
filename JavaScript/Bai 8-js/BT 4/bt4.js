function play_game() {

    showGame();
}

let value_game = 1;

function showGame() {
    let table_game = '';
    let reset_game = "<button onclick=" + "reset_game()" + "> Reset Game </button>";

    document.getElementById("hidden-tic-tac-toe").style.display = 'none';
    document.getElementById("container").style.border = 'none';
    for (i = 1; i <= 4; i++) {
        table_game += "<div class = " + "row" + ">";
        for (j = 1; j <= 4; j++) {
            table_game += "<button class=" + "btn id = " + value_game + " onclick = " + "play(this) " + "></button>";
            value_game++;
        }
        table_game += "</div>";
    }
    document.getElementById("table-game").innerHTML = table_game;
    document.getElementById("reset-game").innerHTML = reset_game;

    play();
}


let turn = true;
let clickedCount = 0;
let maximun_click = 0;
let winnerX;

function play(btn) {
    btn.innerHTML = turn ? "X" : "O";
    btn.classList.add(turn ? "xbtn" : "obtn");
    maximun_click++;
    btn.setAttribute("disabled", "disabled");
    turn = !turn;

    winner_game();
}



let value_winner_game = [
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7],
    [6, 7, 8],
    [9, 10, 11],
    [10, 11, 12],
    [13, 14, 15],
    [14, 15, 16],
    [1, 5, 9],
    [5, 9, 13],
    [2, 6, 10],
    [6, 10, 14],
    [3, 7, 11],
    [7, 11, 15],
    [4, 8, 12],
    [8, 12, 16],
    [1, 6, 11],
    [6, 11, 16],
    [5, 10, 15],
    [2, 7, 12],
    [3, 6, 9],
    [4, 7, 10],
    [7, 10, 13],
    [8, 11, 14]
];

function winner_game() {
    for (let i = 0; i < value_winner_game.length; i++) {
        let cell1 = document.getElementById(value_winner_game[i][0]).innerHTML;
        let cell2 = document.getElementById(value_winner_game[i][1]).innerHTML;
        let cell3 = document.getElementById(value_winner_game[i][2]).innerHTML;


        if (cell1 !== "" && cell1 === cell2 && cell2 === cell3) {
            alert(cell1 + " là người chiến thắng");
            reset_game();
            return;
        } else if (maximun_click == 16) {
            alert("Kết quả hoà");
            reset_game();
            return;

        }
    }

    function reset_game() {
        for (let i = 1; i <= 16; i++) {
            let btn = document.getElementById(i);
            btn.innerHTML = "";
            btn.removeAttribute("disabled");
            btn.classList.remove("xbtn", "obtn");
        }
        maximun_click = 0;
        play();
    }
}