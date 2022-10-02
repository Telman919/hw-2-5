
const rootDiv = document.getElementById('root');

const getCharacters = async () => {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const charactersList = await res.json();
        showCharacters(charactersList);
    } catch (error) {

    } 
};

const makeElement = (tagName, className) => {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element
};

const showCharacters = (resposeObj) => {
    
    const { results } = resposeObj;
        for( let i = 0; i < results.length; i++){
        const { name , image , gender} = results[i];
        
        const characterCard = makeElement('div','characterCard');
        const characterName = makeElement('h2','characterName');
        const characterImage = makeElement('img','characterImage');
        const characterGender = makeElement('h3','characterGender')
        characterName.textContent = name;
        characterImage.src = image;
        characterGender.textContent = gender;
        characterCard.appendChild(characterName);
        characterCard.appendChild(characterImage);
        characterCard.appendChild(characterGender);
        rootDiv.appendChild(characterCard);
}}

getCharacters();



