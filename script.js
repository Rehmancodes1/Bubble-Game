var timer = 30;
var score = 0;
var newHit;
const getNewHit = () => {
    newHit = Math.floor(Math.random() * 10);
    document.querySelector('#hit').textContent = newHit;
}

const runTimer = () => {
    let timeInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        } else {
            clearInterval(timeInterval)
            document.querySelector('.game-boxes').innerHTML =
                `<div class="result">
             <div>you score is <span>${score}</span></div>
             <button>ok</button>
             </div> ` ;

             document.querySelector('button').addEventListener('click', () => {
                timer = 30;
                score = 0;
                document.querySelector('#score').textContent = score;
                document.querySelector('#timerval').textContent = timer;
                runTimer();
                makeBubble();
                getNewHit();
                checkScore();
            });
        }
    }, 1000);


}

const increaseScore = () => {
    score += 10
    document.querySelector('#score').textContent = score
}

const makeBubble = () => {
    var boxnumber = "";

    for (let i = 1; i <= 168; i++) {

        let rn = Math.floor(Math.random() * 10)

        boxnumber += ` <div class="box">${rn}</div>`
    }
    document.querySelector('.game-boxes').innerHTML = boxnumber
}

const checkScore = () => {
    document.querySelector('.game-boxes').addEventListener('click', (e) => {
        let clickedBox = Number(e.target.textContent)
        //    console.log(clickedBox)
        if (newHit === clickedBox) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    })
}
runTimer();
makeBubble();
getNewHit();
checkScore();

