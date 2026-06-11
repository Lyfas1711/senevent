window.addEventListener("load", () => {
  const input = document.getElementById("input");
  const output = document.getElementById("output");

  input.addEventListener("input", () => {
    output.textContent = input.value;
  });

  output.textContent = input.value; // Initialisation
});

function formatText(command) {
  document.execCommand(command, false, null);
}

function changeFontSize(direction) {
  const output = document.getElementById("output");
  let size = window.getComputedStyle(output, null).getPropertyValue('font-size');
  let currentSize = parseFloat(size);
  if (direction === '+') {
    output.style.fontSize = (currentSize + 2) + "px";
  } else {
    output.style.fontSize = (currentSize - 2) + "px";
  }
}

function changeTextColor(color) {
  document.getElementById("output").style.color = color;
}

function changeBgColor(color) {
  document.getElementById("output").style.backgroundColor = color;
}
