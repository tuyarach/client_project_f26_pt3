document.getElementById("year").innerHTML = new Date().getFullYear();
// taken from https://www.codexworld.com/how-to/get-current-year-to-display-dynamic-year-in-copyright-using-javascript/

function goBack() {
    let backButton = document.getElementById('back-btn');

    backButton.addEventListener('click', (event) => {

        // Check if there is a previous page in the current session history
        if (window.history.length > 1) {
        event.preventDefault();
        window.history.back();
        }
        // If history length is 1
        // it naturally navigates to the original href
        // taken from Gemini

    });
}
