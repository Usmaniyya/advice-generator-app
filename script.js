async function getAdvice() {
    const req = await fetch('https://api.adviceslip.com/advice');
    const res = await req.json();
    document.getElementById('number').innerText = `${res.slip.id}`;
    document.getElementById('advice').innerHTML = `${res.slip.advice}`;
}

getAdvice()