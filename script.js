const phrases = [
    "Ang aking lihim na pag-ibig,",
    "Sa tuwing nakikita kita, ako'y nabibighani,",
    "Gusto kong hawakan ang iyong ganda mula sa'yong  mukha,",
    "At sabihin sa iyo ang aking nadarama.",
    "Sa iyong kagandahan, ako'y humahanga,",
    "Gusto kong sabihin sa iyo na ikaw ang aking nagniningning na tala,",
    "Ikaw ang nais kong makasama sa pang habang buhay,",
    "Kaya naman ang tamang panaho'y aking maaantay."
];

const textElement = document.getElementById('text');
const startButton = document.getElementById('startButton');
let currentPhraseIndex = 0;

function typePhrase(phrase) {
    let index = 0;
    let sentenceElement = document.createElement('div');
    sentenceElement.className = 'sentence';
    textElement.appendChild(sentenceElement);

    const interval = setInterval(() => {
        sentenceElement.textContent += phrase.charAt(index);
        index++;
        if (index >= phrase.length) {
            clearInterval(interval);
            setTimeout(() => {
                sentenceElement.style.animation = 'fadeOut 1s ease-in-out forwards';
                setTimeout(() => {
                    textElement.removeChild(sentenceElement);
                    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                    if (currentPhraseIndex === 0) {
                        startButton.style.display = 'block';
                    } else {
                        typePhrase(phrases[currentPhraseIndex]);
                    }
                }, 1000);
            }, 2000);
        }
    }, 100);
}

function startTyping() {
    startButton.style.display = 'none';
    textElement.style.display = 'block';
    typePhrase(phrases[currentPhraseIndex]);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.transform = 'rotate(' + Math.random() * 160 + 'deg)';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);