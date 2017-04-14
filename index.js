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
    //三連の判定

    console.table(array);
    return false;
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
      alert('ゲーム終了です');
    }
  };
  pieces.forEach((piece) => {
    piece.addEventListener('click', onClick, false);
  });
})();
