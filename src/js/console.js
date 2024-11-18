// Animation script for typing
const consoleOutput = document.getElementById("console-output");
const lines = [
  "KittyLinux2Win@emulator:~$ git clone https://github.com/KittyLinux2Win/main.git",
  "Cloning into 'main'...",
  "remote: Enumerating objects: 50, done.",
  "remote: Counting objects: 100% (50/50), done.",
  "remote: Compressing objects: 100% (35/35), done.",
  "remote: Total 50 (delta 15), reused 30 (delta 10), pack-reused 0",
  "Receiving objects: 100% (50/50), 5.00 MiB | 2.50 MiB/s, done.",
  "Resolving deltas: 100% (15/15), done.",
  "KittyLinux2Win@emulator:~$ "
];
let currentLine = 0;
let charIndex = 0;

function typeLine() {
  if (currentLine < lines.length) {
    const line = lines[currentLine];
    if (charIndex < line.length) {
      consoleOutput.textContent += line[charIndex];
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      consoleOutput.textContent += "\n";
      currentLine++;
      charIndex = 0;
      setTimeout(typeLine, 200);
    }
  }
}

typeLine();
