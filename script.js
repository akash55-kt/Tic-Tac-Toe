let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector(".reset-button");
reset_button.innerText = "Restart Game";

let main = document.querySelector("main");
let winMsgBox = document.querySelector(".winner");
let winMsg = document.querySelector("#winner_msg");
let nxt_btn = document.querySelector("#button");

nxt_btn.addEventListener("click", () => {
    winMsgBox.style.display = "none";
    main.style.display = "block";
})

let turn0 = true;//playerX, playe0

winMsgBox.style.display = "none";

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

let count = 0;

boxes.forEach((box) => {
    box.addEventListener ("click", () => {
        count += 1;
        if(turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        let winner = checkWinner();

        if(count === 9 && !winner) {
            matchDraw();
        }
    });
});

const checkWinner = () => {
    for (let patterns of winPatterns) {
        let po1Val = boxes[patterns[0]].innerText;
        let po2Val = boxes[patterns[1]].innerText;
        let po3Val = boxes[patterns[2]].innerText;

       if(po1Val != "" && po2Val != "" && po3Val != ""){
        if(po1Val === po2Val && po2Val === po3Val){
            winMsg.innerText = `${po1Val} is the winner`;
            winMsgBox.style.display = "flex";
            main.style.display = "none";
            count = 0;
            boxes.forEach ((box) => {
                box.innerText = str;
                box.disabled = false;
            });
        }
       } 
    } 
}

let str = ""
reset_button.addEventListener("click", () => {
    boxes.forEach ((box) => {
        box.innerText = str;
        box.disabled = false;
        count = 0;
    });
});

const matchDraw = () => {
    winMsgBox.style.display = "flex";
    winMsg.innerText = `The Match is Draw`;
    main.style.display = "none";
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
}