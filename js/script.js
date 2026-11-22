document.getElementById("year").innerHTML = new Date().getFullYear();
// taken from https://www.codexworld.com/how-to/get-current-year-to-display-dynamic-year-in-copyright-using-javascript/

document.getElementById('back-btn').addEventListener('click', function (e) {
  const isSameOrigin = document.referrer && new URL(document.referrer).origin === window.location.origin;

  if (isSameOrigin && window.history.length > 1) {
    e.preventDefault();
    window.history.back();
  }
  // Otherwise, let the standard <a href="/blog"> navigation happen naturally

  // taken from Gemini
});
