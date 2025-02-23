function displayPoem(response) {
  console.log("Poem generated");

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

  let apiKey = "00741afbd401t8o80be94aee44806b3e"; // Ensure this is valid
  let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4-line poem in basic HTML. Make sure to follow the user instructions.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  console.log("Generating poem...");
  console.log("Prompt:", prompt);
  console.log("Context:", context);

  axios
    .get(apiURL)
    .then(displayPoem)
    .catch((error) => {
      console.error("Error fetching poem:", error);
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
if (poemFormElement) {
  poemFormElement.addEventListener("submit", generatePoem);
}
