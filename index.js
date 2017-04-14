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
    //�O�A�̔���
    
    console.table(array);
    return false;
  }

  const onClick = (event) => {
    const className = event.target.className;
    console.log(className);
    if (orderCount % 2 == 0) {
      if (!/pink/.test(className)){
        if (!/black/.test(className)) {
          event.target.className += ' black';
          orderCount++;
        }
      }
    } else {
      if (!/black/.test(className)) {
        if (!/pink/.test(className)) {
          event.target.className += ' pink';
          orderCount++;
        }
      }
    }
    if (gameIsEnd()) {
      alert('�Q�[���I���ł�');
    }
  };
  pieces.forEach((piece) => {
    piece.addEventListener('click', onClick, false);
  });
})();
