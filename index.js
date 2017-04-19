'use strict';

(function() {
  let orderCount = 0;

  const pieces = document.querySelectorAll('.piece');

  const generateMultipleArray = () => {
    const array = _.map(pieces, (element) => element.className.replace('piece', '').trim());
    return _.chunk(array, 3);
  }

  const gameIsEnd = () => {
    const array = generateMultipleArray();
    let judgment = false;
    let victoryColor;
    //detectThree
    for ( let i = 0; i < array.length; i++ ) {
      for ( let j = 0; j < array.length; j++ ) {

        //Insert color if color exit
        if (array[i][j]) {
          victoryColor = array[i][j];
        }
        else {
          continue;
        }
        //lengthJudgment
        if ( i === 0 ) {
          if ( array[i+1][j] === victoryColor && array[i+2][j] === victoryColor ) {
            judgment = true;
          }
        }

        //widthJudgment
        if ( j === 0 ) {
          if ( array[i][j+1] === victoryColor && array[i][j+2] === victoryColor ) {
            judgment = true;
          }
        }
        
        //slantingJudgment
        if ( j === 0 ) {
          if ( i === 0 ) {
            if ( array[i+1][j+1] === victoryColor && array[i+2][j+2] === victoryColor ) {
              judgment = true;
            }
          }
          if ( i === 2 ) {
            if ( array[i-1][j+1] === victoryColor && array[i-2][j+2] === victoryColor ) {
              judgment = true;
            }
          }
        }
      }
    }
    console.table(array);
    return judgment;
  }

  const onClick = (event) => {
    const className = event.target.className;
    console.log(className);
    if (orderCount % 2 == 0) {
      if (!/pink/.test(className) && !/black/.test(className)){
        event.target.className += ' black';
        orderCount++;
      }
    }
    else {
      if (!/black/.test(className) && !/pink/.test(className)) {
        event.target.className += ' pink';
        orderCount++;
      }
    }
    if (gameIsEnd()) {
      alert('game is end');
    }
  };
  pieces.forEach((piece) => {
    piece.addEventListener('click', onClick, false);
  });
})();
