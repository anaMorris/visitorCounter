const count = document.getElementById('count');

counter();

function counter(){
    let visitors;

    if(!localStorage.getItem('visitors')) localStorage.setItem('visitors', 1);

    visitors = +localStorage.getItem('visitors');
    const visitorCount = visitors + 1;

    localStorage.setItem('visitors', visitorCount);
    count.innerText = localStorage.getItem('visitors');
}