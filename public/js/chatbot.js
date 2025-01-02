<<<<<<< HEAD
// script.js

=======
>>>>>>> 4580008 (change chatbot)
const chatHistory = document.getElementById("chat-history");
const userInput = document.getElementById("user-message");
const openChatButton = document.getElementById("openChatButton");
const closeChatButton = document.getElementById("closeChatButton");
const chatbotModal = document.getElementById("chatbotModal");

const botResponses = {
  "math": "Math is the study of numbers, shapes, and patterns. Need help with Algebra, Geometry, or Calculus?",
  "science": "Science is the study of the natural world through observation and experiments. Ask about Biology, Physics, or Chemistry.",
  "history": "History explores past events, cultures, and civilizations. Need help with ancient, medieval, or modern history?",
  "algebra": "Algebra involves solving equations using symbols and letters. Do you need help solving linear equations?",
  "biology": "Biology is the study of life and living organisms. Ask about cells, genetics, or ecosystems.",
  "physics": "Physics is the study of matter, energy, and forces. Need help with motion, energy, or waves?",
  "chemistry": "Chemistry studies substances and how they interact. Do you want to learn about the periodic table or chemical reactions?"
>>>>>>> 4580008 (change chatbot)
};

function appendMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.innerText = text;
  chatHistory.appendChild(messageDiv);
<<<<<<< HEAD
  chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to bottom
=======
  chatHistory.scrollTop = chatHistory.scrollHeight;
>>>>>>> 4580008 (change chatbot)
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
<<<<<<< HEAD
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
=======
  if (message.includes("math")) {
    appendMessage(botResponses.math, "bot");
  } else if (message.includes("science")) {
    appendMessage(botResponses.science, "bot");
  } else if (message.includes("history")) {
    appendMessage(botResponses.history, "bot");
  } else if (message.includes("algebra")) {
    appendMessage(botResponses.algebra, "bot");
  } else if (message.includes("biology")) {
    appendMessage(botResponses.biology, "bot");
  } else if (message.includes("physics")) {
    appendMessage(botResponses.physics, "bot");
  } else if (message.includes("chemistry")) {
    appendMessage(botResponses.chemistry, "bot");
  } else {
    appendMessage(
      "Sorry, I don't have information on that topic. Please ask about Math, Science, or History.",
      "bot"
    );
  }
}

// Initial bot greeting
appendMessage("Hi! I'm EduBot, your study assistant. Ask me about Math, Science, or History!", "bot");

// Show the chatbot modal when the "Ask EduBot" button is clicked
>>>>>>> 4580008 (change chatbot)
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
<<<<<<< HEAD
});
=======
});
>>>>>>> 4580008 (change chatbot)
