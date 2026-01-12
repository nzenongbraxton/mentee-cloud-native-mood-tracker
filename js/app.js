/**
 * MindEase PTSD Cloud Application Logic
 */

// Login functionality
function login(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic validation (mock)
  if (email && password) {
    window.location.href = "dashboard.html";
  } else {
    alert("Please fill in all fields.");
  }
}

// Anonymous login functionality
function anonymousLogin() {
  window.location.href = "chat.html";
}

// Mood response functionality (Dashboard)
function moodResponse(mood) {
  let messageBox = document.getElementById("moodMessage");
  let message = "";

  if (mood === "sad") {
    message = "I'm really sorry you're feeling sad. You're not alone. Do you want to talk about what's been hurting you?";
  } else if (mood === "stressed") {
    message = "It sounds like things feel overwhelming right now. Let's take a deep breath together. You're doing your best.";
  } else if (mood === "anxious") {
    message = "Anxiety can feel really scary. Try grounding yourself - look around and name 3 things you can see right now.";
  } else {
    message = "I'm here for you. Do you want to tell me what's on your mind?";
  }

  messageBox.innerText = message;
  messageBox.style.display = "block";
}
