function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  }).start();
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let poemElement = document.querySelector("#poem");

  if (!instructionsInput.value.trim()) {
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">❗ Please enter a topic for the poem.</div>`;
    return;
  }

  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4-line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning.";

  let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about <strong>${instructionsInput.value}</strong>...</div>`;

  axios
    .get(apiURL)
    .then(displayPoem)
    .catch((error) => {
      console.error("Error fetching poem:", error);
      poemElement.innerHTML = `<div class="generating">❌ Error generating poem. Please try again later.</div>`;
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
if (poemFormElement) {
  poemFormElement.addEventListener("submit", generatePoem);
}
