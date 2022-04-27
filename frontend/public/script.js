console.table(movies.cards);

const mainSectionComponent = (data) => {
    return `
        <section class="cards">
            ${data}
        </section>`
};

const movieDetailsComponent = (title, year, synops, id) => {
    return `
        <div class="cards-inner flipCardY" data-id=${id}>
            <div class="cards-front" data-id=${id}>
                <h2 data-id=${id}>${title}</h2>
            </div>
            <div class="cards-back" data-id=${id}>
                <h3 data-id=${id}>${year}</h3>
                <h4 data-id=${id}>${synops}</h4>
            </div>
        </div>`
};

const initialize = () => {
    const rootID = document.querySelector('#root');
    const movieCards = movies.cards;

    movieCards.forEach((element, index) => {
        rootID.insertAdjacentHTML('beforeend', mainSectionComponent(movieDetailsComponent(element.title, element.sub, element.text, index + 1)));
    });

    const cardsAll = [...document.querySelectorAll('.cards-inner')];
    console.log(cardsAll);

    const clickForBorder = event => {
        const target = event.target;
        const dataId = target.getAttribute('data-id');
        const targetData = document.querySelector(`[data-id="${dataId}"]`);
        console.log(targetData, dataId);
        cardsAll.map((card) => card === targetData ? card.classList.toggle('flipCardY') : card.classList.add('flipCardY'));
    };

    cardsAll.map(element => element.addEventListener('click', clickForBorder));
};

window.addEventListener('load', initialize);

// cardsAll.map((card, index) => index % 2 === 0 && card === targetData ? card.classList.toggle('flipCardY') && card.classList.remove('flipCardX') : index % 2 !== 0 && card === targetData ? card.classList.toggle('flipCardX') && card.classList.remove('flipCardY') : card.classList.add('flipCardY') && card.classList.add('flipCardX'));