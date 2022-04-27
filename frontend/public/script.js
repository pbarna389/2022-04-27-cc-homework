console.table(movies.cards);

const mainSectionComponent = (data, id = `movie-0`) => {
    return `
        <section data-id=${id}>
            ${data}
        </section>`
};

const movieDetailsComponent = (title, year, synops) => {
    return `
        <div class="cards">
            <h2>${title}</h2>
            <h3>${year}</h3>
            <h4>${synops}</h4>
        </div>`
};

const initialize = () => {
    const rootID = document.querySelector('#root');
    const movieCards = movies.cards;

    movieCards.forEach((element, index) => {
        rootID.insertAdjacentHTML('beforeend', mainSectionComponent(movieDetailsComponent(element.title, element.sub, element.text), `movie-0${index + 1}`));
    });
};

window.addEventListener('load', initialize);