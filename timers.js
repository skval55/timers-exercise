// my solutions

// countdown
function countdown(time) {
  let timer = 1;
  for (let i = time; i >= 0; i--) {
    function printI() {
      if (i === 0) {
        console.log("DONE!");
      } else {
        console.log(i);
      }
    }
    setTimeout(printI, timer * 1000);
    timer++;
  }
}

// randomGame
function randomGame() {
  let tries = 1;
  let id = setInterval(getNum, 1000);
  function getNum() {
    let num = Math.random();
    if (num * 100 > 75) {
      console.log(`${num} is greater than 0.75`);
      console.log(`it took you ${tries} tries`);
      clearInterval(id);
    } else {
      tries++;
      console.log(`${num} is less than 0.75`);
    }
  }
}

// springboard solutions
// function countDown1(time){
//     let timer = setInterval(function(){
//       time--;
//       if(time <= 0){
//         clearInterval(timer);
//         console.log('DONE!');
//       }
//       else {
//         console.log(time);
//       }

//     },1000)
//   }

// function randomGame1(){
//     let num;
//     let times = 0;
//     let timer = setInterval(function(){
//       num = Math.random();
//       times++
//       if(num > .75) {
//         clearInterval(timer);
//         console.log("It took " + times + " try/tries.");
//       }
//     },1000)
//   }
