const rollSTRBtn = document.querySelector("#rollSTR");
const rollDEXBtn = document.querySelector("#rollDEX");
const rollCONBtn = document.querySelector("#rollCON");
const rollINTBtn = document.querySelector("#rollINT");
const rollWISBtn = document.querySelector("#rollWIS");
const rollCHABtn = document.querySelector("#rollCHA");

const str = document.querySelector("#characterSTR").value.trim();
const dex = document.querySelector("#characterDEX").value.trim();
const con = document.querySelector("#characterCON").value.trim();
const int = document.querySelector("#characterINT").value.trim();
const wis = document.querySelector("#characterWIS").value.trim();
const cha = document.querySelector("#characterCHA").value.trim();

async function rollBtnHandler(event) {
  event.preventDefault();

  const response = await fetch("/api/dice-roller.js")
    .then((response) => {
      console.log(response);
      return response
    })

  switch (event.target) {
    case rollSTRBtn:
      document.getElementById("characterSTR").value = roll;
      break
    case rollDEXBtn:
      document.getElementById("characterDEX").value = roll;
      break
    case rollCONBtn:
      document.getElementById("characterCON").value = roll;
      break
    case rollINTBtn:
      document.getElementById("characterINT").value = roll;
      break
    case rollWISBtn:
      document.getElementById("characterWIS").value = roll;
      break
    case rollCHABtn:
      document.getElementById("characterCHA").value = roll;
      break
  }
}

rollSTRBtn.addEventListener('click', rollBtnHandler);
rollDEXBtn.addEventListener('click', rollBtnHandler);
rollCONBtn.addEventListener('click', rollBtnHandler);
rollINTBtn.addEventListener('click', rollBtnHandler);
rollWISBtn.addEventListener('click', rollBtnHandler);
rollCHABtn.addEventListener('click', rollBtnHandler);
