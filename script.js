const { body } = document;

function changeBackground(n) {
    // Store previous background
    let previousBackground;
    if (body.className) {
        previousBackground = body.className;
    }

    // reset all classes before applying a new style
    body.className = '';

    // if style is already applied, then body style is empty (after resetting it)
    return (previousBackground === `background-${n}` ? false : body.classList.add(`background-${n}`));
}