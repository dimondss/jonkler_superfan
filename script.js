function mancall() {
  document.getElementById("where").play();
  document.getElementById("man").classList.add("gone");
}
// Define the three different functions you want to happen
function function1() {
  document.getElementById("over").classList.remove("gone");
  document.getElementById("scare").play();
  document.getElementById("reset").classList.remove("gone");
}

function function2() {
  document.getElementById("win").classList.remove("gone");
  document.getElementById("catch").play();
  document.getElementById("reset").classList.remove("gone");
}

function function3() {
  document.getElementById("over2").classList.remove("gone");
  document.getElementById("scare2").play();
  document.getElementById("reset").classList.remove("gone");
}
function restart() {
  location.reload("reset");
}
window.onload = function () {
  // Get all the images (Hspot1, Hspot2, Hspot3)
  const images = [
    document.getElementById("Hspot1"),
    document.getElementById("Hspot2"),
    document.getElementById("Hspot3"),
  ];

  // Create an array of the functions to assign
  const functions = [function1, function2, function3];

  // Shuffle the functions array to randomize the assignment
  for (let i = functions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index
    [functions[i], functions[j]] = [functions[j], functions[i]]; // Swap elements
  }

  // Assign each image a random function from the shuffled array
  images.forEach((image, index) => {
    image.onclick = functions[index];
  });
};
