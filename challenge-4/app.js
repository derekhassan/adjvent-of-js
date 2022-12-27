const keyboardKeys = document.querySelectorAll('.key');

const randomlyPickNewKey = () => {
    const selectedKey =
        keyboardKeys[Math.floor(Math.random() * keyboardKeys.length)];
    selectedKey.classList.add('jiggle');
    return selectedKey;
};

let currentKey = randomlyPickNewKey();

// Using keydown since keypress didn't work for Shift/Tab
document.addEventListener('keydown', (e) => {
    if (
        e.key.toLowerCase() ===
        currentKey.getAttribute('data-key').toLowerCase()
    ) {
        currentKey.classList.remove('jiggle');
        currentKey = randomlyPickNewKey();
    }
});
