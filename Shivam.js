let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn = true;
const winpattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
const resetGame=()=>{
    turn=true;
    enableBoxes();
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return; // stop double clicks

    if(turn){
        box.innerText = "O";
        turn = false;
    }else{
        box.innerText = "X";
        turn = true;
    }

    checkWinner();
  });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disable=true;
    }
    const enableBoxes=()=>{
        for(let box of boxes){
            box.disable=false;
            box.innerText;
        }

}
 const showWinner=()=>{
    msg.innerText=`congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");

}

const checkWinner = () => {
  for (let pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner is:", pos1val);
        showWinner();
      }
    }
  }
}
}
