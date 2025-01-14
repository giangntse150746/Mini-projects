// Define a custom cubic easing function
CustomEase.create("cubic", "0.83, 0, 0.17, 1");

// Variable to track whether an animation is currently in progress
let isAnimating = false;

// Function to split the text of elements into spans for each character
function splitTextIntoSpans(selector) {
  let elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    let text = element.innerText;
    let splitText = text
      .split("")
      .map(function(char) {
        return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
      })
      .join("");
    element.innerHTML = splitText;
  });
}

// Function to initialize the cards
function initializeCards() {
  let cards = Array.from(document.querySelectorAll(".card"));
  gsap.to(cards, {
    y: i => -15 + 15 * i + "%",
    z: i => 15 * i,
    duration: 1,
    ease: "cubic",
    stagger: -0.1
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Split text into spans for h1 elements with class 'copy'
  splitTextIntoSpans(".copy h1");
  // Initialize the cards
  initializeCards();

  // Set initial position for span elements within h1
  gsap.set("h1 span", { y: -200 });
  gsap.set(".slider .card:last-child h1 span", { y: 0 });
});

// Event listener for click events
document.addEventListener("click", () => {
  // If an animation is already in progress, return early
  if (isAnimating) return;

  // Set isAnimating to true to indicate animation is starting
  isAnimating = true;
  // Select the slider and its cards
  let slider = document.querySelector(".slider");
  let cards = Array.from(slider.querySelectorAll(".card"));
  let lastCard = cards.pop(); // Remove the last card
  let nextCard = cards[cards.length - 1]; // Get the next card

  // Animate the last card to move downwards and fade out
  gsap.to(lastCard.querySelectorAll("h1 span"), {
    y: 200,
    duration: 0.75,
    ease: "cubic"
  });

  gsap.to(lastCard, {
    y: "+=150%",
    duration: 0.75,
    ease: "cubic",
    onComplete: () => {
      // When animation completes, prepend the last card to the slider
      slider.prepend(lastCard);
      // Reinitialize the cards
      initializeCards();
      // Reset the position of span elements within the last card
      gsap.set(lastCard.querySelectorAll("h1 span"), { y: -200 });

      // Set isAnimating to false after a delay
      setTimeout(() => {
        isAnimating = false;
      }, 1000);
    }
  });

  // Animate the next card to move upwards and fade in
  gsap.to(nextCard.querySelectorAll("h1 span"), {
    y: 0,
    duration: 1,
    ease: "cubic",
    stagger: 0.05
  });
});
