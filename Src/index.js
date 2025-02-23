function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 50,
    cursor: "",
  }).start();
}

let poemFormElement = document.querySelector("#poem-generator-form");
if (poemFormElement) {
  poemFormElement.addEventListener("submit", generatePoem);
}
