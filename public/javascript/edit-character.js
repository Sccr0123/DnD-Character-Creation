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

	if (id && name && level && charClass && race && str && dex && con && int && wis && cha) {
		const response = await fetch(`/api/characters/${id}`, {
			method: "PUT",
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
			}),
			headers: { "Content-Type": "application/json" },
		});

		console.log(response);

		if (response.ok) {
			response.json({ message: "Character Saved" });
			window.location.replace("/dashboard");
		} else {
			console.log(response.statusText);
		}
	} else {
		console.log("Please Fill Everything In");
	}
}

async function deleteBtnHandler(event) {
	event.preventDefault();

	var baseUrl = window.location.href;
	var urlArray = baseUrl.split("/");
	const id = urlArray[urlArray.length - 1];

	const response = await fetch("/api/characters/" + id, {
		method: "delete",
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
		response.json({ message: "character deleted" });
		window.location.replace("/dashboard");
	} else {
		console.log(response.statusText);
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
document
	.querySelector("#deleteBtn")
	.addEventListener("click", deleteBtnHandler);
document.querySelector("#resetBtn").addEventListener("click", resetBtnHandler);
