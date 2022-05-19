function saveBtnHandler(event) {
    event.preventDefault();

    console.log('button clicked')

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
        const response = fetch('/api/characters', {
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
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#saveBtn').addEventListener('click', saveBtnHandler);