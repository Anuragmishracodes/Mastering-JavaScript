let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#header").style.top = "0";
  } else {
    document.querySelector("#header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
const scroller = document.querySelector("#logoWrapper");
let lastScrollTop = 0;
let pos = 0;

window.addEventListener("scroll", () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    pos -= 2;
  } else {
    pos += 2;
  }

  scroller.style.transform = `translateX(${pos}px)`;

  if (pos < -scroller.scrollWidth / 2) {
    pos = 0;
  }
  if (pos > 0) {
    pos = -scroller.scrollWidth / 2;
  }

  lastScrollTop = st <= 0 ? 0 : st;
});

let activeAccordion = null;

function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  const accords = document.getElementById(`question-${index}`);


  document.querySelectorAll('[id^="content-"]').forEach((el) => {
    el.style.maxHeight = null;
  });
  document.querySelectorAll('[id^="icon-"]').forEach((el) => {
    el.style.transform = "rotate(0deg)";
    el.style.stroke = "#ffffff";
  });
  document.querySelectorAll('[id^="question-"]').forEach((el) => {
    el.style.color = "#f4f4f4";
  });

  if (activeAccordion !== index) {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.style.transform = "rotate(45deg)";
    icon.style.stroke = "#e0fd0a";
    accords.style.color = "#e0fd0a";

    activeAccordion = index;
  } else {
    activeAccordion = null;
  }
}
