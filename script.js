const text = [
  "Если Вы считаете, что компетентность стоит дорого, ",
  "то попробуйте некомпетентность — она обойдётся ",
  "Вам гораздо дороже.",
  "<br>",
  "<br>",
  "Йохан Стаель фон Хольстайн.",
];

let line = 0; //начальная линия текста
let count = 0; //счетчик позиции букв
let result = ""; //получаемый текст

function typeLine() {
  let interval = setTimeout(() => {
    result += text[line][count];
    document.querySelector(".typing").innerHTML = result + "|";
    count++;
    if (count >= text[line].length) {
      count = 0;
      line++;
      if (line == text.length) {
        clearTimeout(interval);
        document.querySelector(".typing").innerHTML = result;
        return true;
      }
    }
    typeLine();
  }, 100);
}
typeLine();

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});
Array.from(document.querySelectorAll(".menu-link")).forEach((item) => {
  item.onclick = () => {
    document.querySelector(".container").classList.remove("change");
  };
});
