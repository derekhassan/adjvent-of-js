const pianoKeys = document.querySelectorAll('.piano a');

const playSound = (i) => {
    const sound = new Audio(`./audio/key-${i + 1}.mp3`);
    sound.play();
};

pianoKeys.forEach((pianoKey, i) =>
    pianoKey.addEventListener('click', () => playSound(i))
);
