document.getElementById('updateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const userInput = document.getElementById('userInput').value;
    const dynamicContent = document.getElementById('dynamicContent');

    if (userInput.trim() !== "") {
        dynamicContent.style.display = 'block';
        dynamicContent.textContent = `Konten yang diperbarui: ${userInput}`;
    } else {
        dynamicContent.style.display = 'none';
    }

    document.getElementById('userInput').value = '';
});
