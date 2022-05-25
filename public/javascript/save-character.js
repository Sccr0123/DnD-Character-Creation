//const session = require("express-session");

async function saveBtnHandler(event) {
	event.preventDefault();

	const id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];
	const name = document.querySelector("#characterName").value.trim();
	const level = document.querySelector("#characterLevel").value.trim();
	const charClass = document.querySelector("#characterClass").value.trim();
	const race = document.querySelector("#characterRace").value.trim();
	const str = document.querySelector("#characterSTR").value.trim();
	const dex = document.querySelector("#characterDEX").value.trim();
	const con = document.querySelector("#characterCON").value.trim();
	const int = document.querySelector("#characterINT").value.trim();
	const wis = document.querySelector("#characterWIS").value.trim();
	const cha = document.querySelector("#characterCHA").value.trim();

	alert(race);

	if (name && charClass && level && str && dex && con && int && wis && cha) {
		const response = await fetch(`/api/characters/`, {
			method: "POST",
			body: JSON.stringify({
				name,
				level,
				charClass,
				race,
				str,
				dex,
				con,
				int,
				wis,
				cha,
				id,
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			response.json({ message: "character saved" });
			window.location.replace("/dashboard");
		} else {
			console.log(response.statusText);
		}
	} else {
		console.log("Please Fill Everything In");
	}
}

function resetBtnHandler(event) {
	event.preventDefault();

	document.getElementById("characterName").value = "";
	document.getElementById("characterLevel").value = "";
	document.getElementById("characterClass").value = "";
	document.getElementById("characterRace").value = "";
	document.getElementById("characterSTR").value = "";
	document.getElementById("characterDEX").value = "";
	document.getElementById("characterCON").value = "";
	document.getElementById("characterINT").value = "";
	document.getElementById("characterWIS").value = "";
	document.getElementById("characterCHA").value = "";
}

document.querySelector("#saveBtn").addEventListener("click", saveBtnHandler);
document.querySelector("#resetBtn").addEventListener("click", resetBtnHandler);
