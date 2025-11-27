const text = "먹방 리스트";
let index = 0;
let speed = 300;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();