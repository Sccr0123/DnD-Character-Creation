async function saveBtnHandler(event) {
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
        const response = await fetch('/api/characters', {
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
            res.json({ message: 'character saved' });
            document.location.replace('/dashboard');
        } else {
            console.log(response.statusText);
        }
    }
}

function deleteBtnHandler(event) {
    event.preventDefault();

    console.log('button clicked');

    var baseUrl = window.location.href;
    var urlArray = baseUrl.split('/');
    const id = urlArray[urlArray.length - 1];
    
    console.log(id); 

    const response = fetch('/api/characters/' + id, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        res.json({ message: 'character deleted' });
        document.replace('/dashboard');
    } else {
        console.log(response.statusText);
    }
}

document.querySelector('#saveBtn').addEventListener('click', saveBtnHandler);
document.querySelector('#deleteBtn').addEventListener('click', deleteBtnHandler);