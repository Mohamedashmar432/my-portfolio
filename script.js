$(document).ready(function () {
    const phrases = ["Web Developer", "Back-end Developer"];
    let currentPhraseIndex = 0;
    let currentCharacterIndex = 0;
    const typingSpeed = 100; // Typing speed in ms
    const pauseBetweenPhrases = 2000; // Pause time before starting delete
    const $roleElement = $("#role");
    const $roleElement2 =$("#mobile-role");

    function typePhrase() {
        const currentPhrase = phrases[currentPhraseIndex];
        $roleElement.text(currentPhrase.slice(0, currentCharacterIndex++));
        $roleElement2.text(currentPhrase.slice(0, currentCharacterIndex++));

        if (currentCharacterIndex <= currentPhrase.length) {
            setTimeout(typePhrase, typingSpeed);
        } else {
            setTimeout(() => {
                deletePhrase();
            }, pauseBetweenPhrases);
        }
    }

    function deletePhrase() {
        const currentPhrase = phrases[currentPhraseIndex];
        $roleElement.text(currentPhrase.slice(0, currentCharacterIndex--));
        $roleElement2.text(currentPhrase.slice(0, currentCharacterIndex--));

        if (currentCharacterIndex >= 0) {
            setTimeout(deletePhrase, typingSpeed);
        } else {
            // Move to the next phrase and start typing immediately
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            currentCharacterIndex = 0;
            typePhrase();
        }
    }

    // Start the typing effect
    typePhrase();
});

$(document).ready(function () {
    $('.left-col').on('wheel', function (event) {
        // Prevent default scroll behavior on the left column
        event.preventDefault();
        // Scroll the right column instead
        $('.right-col').scrollTop($('.right-col').scrollTop() + event.originalEvent.deltaY);
    });
});

