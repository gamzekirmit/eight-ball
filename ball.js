
        let userName = prompt("What is your name");
        const welcomeText = userName ? `Hello, ${userName}!`: `Hello!`;
        const welcomeElement = document.getElementById("text");
        welcomeElement.style.background="#ffffff";
        welcomeElement.innerText = `${welcomeText} What is my future?`;
       

        const el = document.querySelectorAll(".text");
        el.innerText="fdhkfdf";
        console.log(el);

    
    function askEightBall() {
    const randomNumber = Math.floor(Math.random() * 8);
    let eightBall = ""

    if (randomNumber === 0) {
        eightBall = 'It is certain';
    } else if (randomNumber === 1) {
        eightBall = 'It is decidedly so';
    } else if (randomNumber === 2) {
        eightBall = 'Reply hazy try again';
    } else if (randomNumber === 3) {
        eightBall = 'Cannot predict now';
    } else if (randomNumber === 4) {
        eightBall = 'Do not count on it';
    } else if (randomNumber === 5) {
        eightBall = 'My sources say no';
    } else if (randomNumber === 6) {
        eightBall = 'Outlook not so good';
    } else if (randomNumber === 7) {
        eightBall = 'Signs point to yes';
    } else {
        eightBall = 'undefined';
    } 
    const resultElement = document.getElementById("result");
    resultElement.innerText = `${randomNumber} - ${eightBall}`;
}
