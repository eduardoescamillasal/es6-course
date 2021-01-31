let isTie = false;
let isCircle = true;
const gameArea = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

document.addEventListener('DOMContentLoaded', () => {
  for (const cub of document.getElementsByClassName('cubicule')) {
    cub.addEventListener('click', cubClick);
  }
});

const isFilled = () => {
  for (const r of gameArea) {
    for (const cub of r) {
      if (cub === 0) { return false; }
    }
  }
  return true;
}

const drawSymbol = (isCircle, cub) => {
  const symb = cub.appendChild(document.createElement('div'));
  const symbList = symb.classList;
  symbList.add('symbol');

  symbList.add(isCircle ? 'circle' : 'cross');
  symb.innerHTML = isCircle ? '〇' : '✗';
  cub.appendChild(symb);
  cub.classList.add('cubicle')
}

const isFinished = () => {
  const won =
  // rows
    gameArea[0][0] && gameArea[0][0] === gameArea[0][1] && gameArea[0][1] === gameArea[0][2] ||
    gameArea[1][0] && gameArea[1][0] === gameArea[1][1] && gameArea[1][1] === gameArea[1][2] ||
    gameArea[2][0] && gameArea[2][0] === gameArea[2][1] && gameArea[2][1] === gameArea[2][2] ||
  // columns
    gameArea[0][0] && gameArea[0][0] === gameArea[1][0] && gameArea[1][0] === gameArea[2][0] ||
    gameArea[0][1] && gameArea[0][1] === gameArea[1][1] && gameArea[1][1] === gameArea[2][1] ||
    gameArea[0][2] && gameArea[0][2] === gameArea[1][2] && gameArea[1][2] === gameArea[2][2] ||
  // diagonals
    gameArea[0][0] && gameArea[0][0] === gameArea[1][1] && gameArea[1][1] === gameArea[2][2] ||
    gameArea[0][2] && gameArea[0][2] === gameArea[1][1] && gameArea[1][1] === gameArea[2][0];

    if (won) {
      return true;
    }
    else if (isFilled()) {
      isTie = true;
      return true;
    }
    return false;
}

const restart = () => {
  isTie = false;
  isCircle = true;
  for (let i = 0; i < gameArea.length; i++) {
    gameArea[i] = [0, 0, 0];
  }
  for (const cub of document.getElementsByClassName('cubicule')) {
    symb = cub.getElementsByClassName('symbol')[0];
    if (symb) {
      symb.remove();
    }
  }
}


const cubClick = (e) => {
  const cub = e.currentTarget;
  const id = e.currentTarget.id;
  const [r,c] = [id[0], id[1]];
  if(gameArea[r][c] !== 0) {
    return;
  }

  gameArea[r][c] = isCircle ? 1 : -1;
  drawSymbol(isCircle, cub);
  isCircle = !isCircle;

  if (isFinished()) {
    let msg;
    if (isTie) {
      msg = "RED_ComEDY ALERT: A ñeñeee noBoDy WoN "
    } else if(isCircle) {
      msg ='X wOn!!!!'
    } else{
      msg = 'OoO wOn! :D'
    }
    setTimeout(() => {
      alert(msg);
      restart()
    },50);
  }
}
