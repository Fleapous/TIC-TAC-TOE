const playGround = () => {
    let board = document.querySelectorAll('.arenaPiece');

    const setupBoard = () => {
        board.forEach(function (piece){
             piece.style.background = 'red';
        });
    };
    const boardUpdate = (boxId) => {

    };

    return {setupBoard};
};

const player = (shape) => {
    let score = 0;
    const getScore = () => score;
    const getShape = () => shape;
};

let plygrnd = playGround();
plygrnd.setupBoard();