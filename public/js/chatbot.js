// script.js

const chatHistory = document.getElementById("chat-history");
const userInput = document.getElementById("user-message");
const openChatButton = document.getElementById("openChatButton");
const closeChatButton = document.getElementById("closeChatButton");
const chatbotModal = document.getElementById("chatbotModal");

const botResponses = {
  "weather": "Weather phenomena include things like thunderstorms, hurricanes, tornadoes, and blizzards. These are caused by changes in temperature, pressure, and moisture in the atmosphere.",
  "earthquake": "Earthquakes occur due to the movement of tectonic plates beneath the Earth's surface. When plates shift suddenly, they release energy, which causes the ground to shake.",
  "volcanic eruption": "A volcanic eruption happens when magma from beneath the Earth's crust escapes to the surface, often causing lava flows, ash clouds, and pyroclastic flows.",
  "tsunami": "Tsunamis are large ocean waves caused by underwater earthquakes, volcanic eruptions, or landslides. They can travel great distances across oceans, causing destruction when they reach coastal areas.",
  "eclipse": "An eclipse happens when one celestial body, such as the Moon, passes in front of another celestial body, like the Sun, causing a shadow to be cast. This can be a solar or lunar eclipse.",
  "meteor shower": "Meteor showers occur when Earth passes through the debris left by a comet. As the debris enters the Earth's atmosphere, it burns up, creating bright streaks of light known as meteors.",
  "tornado": "Tornadoes are violent windstorms that are characterized by a rotating column of air that extends from a thunderstorm to the ground. They can cause significant damage due to high winds."
};

function appendMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.innerText = text;
  chatHistory.appendChild(messageDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to bottom
}

function sendMessage() {
  const userMessage = userInput.value.trim().toLowerCase();
  if (userMessage) {
    appendMessage(userMessage, "user");
    processUserMessage(userMessage);
    userInput.value = ""; // Clear input field
  }
}

function processUserMessage(message) {
  if (message.includes("weather")) {
    appendMessage(botResponses.weather, "bot");
  } else if (message.includes("earthquake")) {
    appendMessage(botResponses.earthquake, "bot");
  } else if (message.includes("volcano") || message.includes("volcanic")) {
    appendMessage(botResponses.volcanic_eruption, "bot");
  } else if (message.includes("tsunami")) {
    appendMessage(botResponses.tsunami, "bot");
  } else if (message.includes("eclipse")) {
    appendMessage(botResponses.eclipse, "bot");
  } else if (message.includes("meteor")) {
    appendMessage(botResponses.meteor_shower, "bot");
  } else if (message.includes("tornado")) {
    appendMessage(botResponses.tornado, "bot");
  } else {
    appendMessage("Sorry, I don't have information on that phenomenon. Please ask about weather, earthquakes, volcanoes, tsunamis, eclipses, meteor showers, or tornadoes.", "bot");
  }
}

// Start the conversation
appendMessage("Hello! Ask me about natural phenomena like weather, earthquakes, volcanoes, tsunamis, eclipses, meteor showers, and tornadoes.", "bot");

// Show the chatbot modal when the "Chat with Bot" button is clicked
openChatButton.addEventListener("click", function() {
  chatbotModal.style.display = "flex"; // Show the modal
});

// Close the chatbot modal when the "Close" button is clicked
closeChatButton.addEventListener("click", function() {
  chatbotModal.style.display = "none"; // Hide the modal
});

// Add event listener to trigger sendMessage on Enter key press
userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});