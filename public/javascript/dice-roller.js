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

const return_mod = (score) => {
	switch (score) {
		case 0:
			return "DEAD";
		case 1:
			return "-5";
		case 2:
		case 3:
			return "-4";
		case 4:
		case 5:
			return "-3";
		case 6:
		case 7:
			return "-2";
		case 8:
		case 9:
			return "-1";
		case 10:
		case 11:
			return "0";
		case 12:
		case 13:
			return "+1";
		case 14:
		case 15:
			return "+2";
		case 16:
		case 17:
			return "+3";
		case 18:
		case 19:
			return "+4";
		case 20:
		case 21:
			return "+5";
	}
};

async function rollBtnHandler(event) {
	event.preventDefault();

	var roll = Math.floor(Math.random() * (18 - 3) + 3);

	switch (event.target) {
		case rollSTRBtn:
			document.getElementById("characterSTR").value = roll;
			document.getElementById("strMod").innerText = return_mod(roll);
			break;
		case rollDEXBtn:
			document.getElementById("characterDEX").value = roll;
			document.getElementById("dexMod").innerText = return_mod(roll);
			break;
		case rollCONBtn:
			document.getElementById("characterCON").value = roll;
			document.getElementById("conMod").innerText = return_mod(roll);
			break;
		case rollINTBtn:
			document.getElementById("characterINT").value = roll;
			document.getElementById("intMod").innerText = return_mod(roll);
			break;
		case rollWISBtn:
			document.getElementById("characterWIS").value = roll;
			document.getElementById("wisMod").innerText = return_mod(roll);
			break;
		case rollCHABtn:
			document.getElementById("characterCHA").value = roll;
			document.getElementById("chaMod").innerText = return_mod(roll);
			break;
	}
}

rollSTRBtn.addEventListener("click", rollBtnHandler);
rollDEXBtn.addEventListener("click", rollBtnHandler);
rollCONBtn.addEventListener("click", rollBtnHandler);
rollINTBtn.addEventListener("click", rollBtnHandler);
rollWISBtn.addEventListener("click", rollBtnHandler);
rollCHABtn.addEventListener("click", rollBtnHandler);
