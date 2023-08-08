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
  }, 50);
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

const activiti = function () {
  var galleryItems = document.querySelectorAll(".item");
  for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].classList.toggle(
      "active",
      galleryItems[i].scrollTop > 0 || document.documentElement.scrollTop > 0
    );
  }
};

const moving = function () {
  var galleryItems = document.querySelectorAll(".cart");
  for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].classList.toggle(
      "move",
      galleryItems[i].scrollTop > 0 || document.documentElement.scrollTop > 0
    );
  }
};
window.onscroll = function () {
  moving();
  activiti();
};
// Slider

let slider = tns({
  container: ".my-slider",
  slideBy: 1,
  speed: 600,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayButtonOutput: false,
  nav: false,
  controls: false,
  // controlsContainer: "#controls",
  // prevButton: ".previous",
  // nextButton: ".next",
  responsive: {
    1440: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});

// Slider End
