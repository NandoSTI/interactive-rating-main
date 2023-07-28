const cardRatingNumberDom = document.querySelectorAll('.card__rating-number');
const firstCard = document.querySelector('.first--card');
const secondCard = document.querySelector('.second--card');
const resultValue = document.querySelector('.card__result-value')

let activeRatingNumber;

function selectNumber(number){
    const selectedratingNumberDom = cardRatingNumberDom[number - 1];
    selectedratingNumberDom.classList.add('active');

    if(activeRatingNumber) {
        const activeRatingDom = cardRatingNumberDom[activeRatingNumber - 1]
        activeRatingDom.classList.remove('active');
    }

    activeRatingNumber = number
}

function submit(){

    if(!activeRatingNumber) return;

    firstCard.classList.add('hide');
    secondCard.classList.remove('hide');

    resultValue.textContent = activeRatingNumber;
}