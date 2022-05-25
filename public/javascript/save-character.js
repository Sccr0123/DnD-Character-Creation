async function saveBtnHandler(event) {
	event.preventDefault();

	const name = document.querySelector("#characterName").value.trim();
	const charClass = document.querySelector("#characterClass").value.trim();
	const race = document.querySelector("#characterRace").value.trim();
	const str = document.querySelector("#characterSTR").value.trim();
	const dex = document.querySelector("#characterDEX").value.trim();
	const con = document.querySelector("#characterCON").value.trim();
	const int = document.querySelector("#characterINT").value.trim();
	const wis = document.querySelector("#characterWIS").value.trim();
	const cha = document.querySelector("#characterCHA").value.trim();

	if (name && charClass && race && str && dex && con && int && wis && cha) {
		const res = await fetch("/api/characters", {
			method: "post",
			body: JSON.stringify({
				name,
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

		if (res.ok) {
			res.json({ message: "character saved" });
			window.location.replace("/dashboard");
		} else {
			console.log(response.statusText);
		}
	}
}

async function deleteBtnHandler(event) {
	event.preventDefault();

	var baseUrl = window.location.href;
	var urlArray = baseUrl.split("/");
	const id = urlArray[urlArray.length - 1];

	console.log(id);

	const res = await fetch("/api/characters/" + id, {
		method: "delete",
		headers: { "Content-Type": "application/json" },
	});

	if (res.ok) {
		res.json({ message: "character deleted" });
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
