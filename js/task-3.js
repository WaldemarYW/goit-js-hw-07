const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    const trimmedName = nameInput.value.trim();
    nameOutput.textContent = trimmedName || 'Anonymous';
});