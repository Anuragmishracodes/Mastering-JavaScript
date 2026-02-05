let main = document.querySelector("#main");
let button = document.querySelector("#changeButton");
let heading = document.querySelector("h1");

let colors = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone"
];
let index = 0;

let shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

let shadeIndex = 0;

window.addEventListener("keydown", function shader(e) {
    if (e.key === "ArrowDown") {
        shadeIndex = (shadeIndex + 1) % shades.length;
        render();
        saveState();
    } else if (e.key === "ArrowUp") {
        shadeIndex = (shadeIndex - 1 + shades.length) % shades.length;
        render();
        saveState();
    }
})

function render() {
    main.classList.forEach(cls => {
        if (cls.startsWith("bg-")) {
            main.classList.remove(cls);
        }
    });

    const bgClass = `bg-${colors[index]}-${shades[shadeIndex]}`;
    main.classList.add(bgClass);
    heading.textContent = `${colors[index]}-${shades[shadeIndex]}`;
    if (shadeIndex > 6) {
        main.classList.add("text-white");
    } else {
        main.classList.remove("text-white");
    }
    main.textContent = shades[shadeIndex];
}

button.addEventListener("click", function change() {
    index = (index + 1) % colors.length;
    render();
    saveState();
});

function saveState() {
    localStorage.setItem("colorIndex", index);
    localStorage.setItem("shadeIndex", shadeIndex);
};

function loadState() {
    const savedColor = localStorage.getItem("colorIndex");
    const savedShade = localStorage.getItem("shadeIndex");

    if (savedColor !== null) {
        index = Number(savedColor);
    }

    if (savedShade !== null) {
        shadeIndex = Number(savedShade);
    }
};
loadState();
render();
