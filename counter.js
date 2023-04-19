const count = document.getElementById('count');

update();

function update(){
    fetch('https://api.countapi.xyz/update/dupecounter.com/duped/?amount=1')
        .then(res => res.json())
        .then(res => {
            count.innerHTML = res.value;
        });
}
