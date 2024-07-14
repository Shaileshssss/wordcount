const textInput = document.getElementById("text-input");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");

// Add an Input event Listener to the text area
textInput.addEventListener("input", () => {
    const text = textInput.value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const characters = text.replace(/\s/g, "");


    // Finally we will update the word and character count in the output
    wordCount.textContent = words.length;
    charCount.textContent = characters.length;
});