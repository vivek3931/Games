let box = document.querySelectorAll(".box");
let reset = document.querySelector(".restart");
let msg = document.querySelector(".text");
let msgcontainer = document.querySelector(".winnercontainer")

let turnO = true;
let count = 0;

let winningPattern = [
  [0, 1, 2],
  [1, 4, 7],
  [0, 4, 8],
  [0, 3, 6],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function winning() {
  for (let winner of winningPattern) {

    win1 = box[winner[0]].innerText,
      win2 = box[winner[1]].innerText,
      win3 = box[winner[2]].innerText
    if (win1 != "" && win2 != "" && win3 != "") {
      if (win1 == win2 && win2 == win3) {
        showWinner(win1);
        return true;

      }
    }
  }
}

box.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    if (turnO === true) {
      boxes.innerText = "O";
      turnO = false;
    } else {
      boxes.innerText = "X";
      turnO = true;
    }
    boxes.disabled = true;
    count++;
    let isWinner = winning();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

reset.addEventListener("click", () => {
  box.forEach((boxes) => {
    boxes.innerText = "";
    boxes.disabled = false;
    msgcontainer.classList.add("hide");
  });
});

const disableboxes = () => {
  for (let boxes of box) {
    boxes.disabled = true;

  }

}

const showWinner = (winner) => {
  msg.innerText = `Congratulation, the Winner is ${winner}`;
  msgcontainer.classList.remove('hide');
  disableboxes();

}
const gameDraw = () => {
  msg.innerText = "Game was draw";
  msgcontainer.classList.remove('hide');
  disableboxes();

}

