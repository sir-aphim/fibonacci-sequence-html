const fibonacci = function(fiboNum) {
    if (fiboNum < 0) return "OOPS";
    if (fiboNum === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;
    let current = 1;

    for (let i = 2; current < fiboNum; i++) {
        current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    if (fiboNum === current) {
        alert(`O algarismo ${fiboNum} faz parte da sequência.`);
    } else if (isNaN(fiboNum)) {
        alert("Insira um número.")
    } else {
        alert(`O algarismo ${fiboNum} não faz parte da sequência.`);
    }
};

while (true) {
    let fiboAsk = prompt("Insira um número e descubra se ele pertence ou não à Fibonacci, ou digite 'exit' para sair.");

    if (fiboAsk.toLowerCase() === 'exit') {
        break; // Exit the loop if the user wants to exit
    }

    let fiboNum = parseInt(fiboAsk);

    fibonacci(fiboNum);
}
