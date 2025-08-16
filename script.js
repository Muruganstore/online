const juiceArray = document.querySelectorAll(".juice-wrapper");
const title = document.querySelector("h1");
const description = document.querySelector(".juice-info");
const juiceWheel = document.querySelector(".juice-wheel");
const fruitsWheel = document.querySelector(".fruits-wheel");
const juiceText = document.querySelector(".juice-text");

let currentJuice = juiceArray[0];
let deg = -45;

const juiceData = [
  {
    name: "Smart Phones",
    descriptioN:
    "Smartphones are your all-in-one pocket companions, combining communication, entertainment, and productivity. From stunning displays and powerful processors to advanced cameras and long-lasting batteries, they keep you connected, creative, and in control—anytime, anywhere.",
    backgroundColor:
      "linear-gradient(90deg, rgba(167,162,244,1) 0%, rgba(112,112,143,1) 35%, rgba(166,149,13,1) 100%, rgba(0,212,255,1) 100%)",
  },
  {
    name: "தந்தூரி சிக்கன்",
    descriptioN:
      "Tandoori Chicken is a smoky, flavorful dish made by marinating chicken in spiced yogurt and cooking it in a clay oven (tandoor). With its vibrant color, juicy texture, and aromatic spices, it’s a mouth-watering treat that’s loved worldwide..",
    backgroundColor:
      "linear-gradient(90deg, rgba(9,111,55,1) 0%, rgba(39,196,129,1) 49%, rgba(47,209,232,1) 100%, rgba(0,212,255,1) 100%)",
  },
   {
    name: "Fish",
    descriptioN:
      "Fish is a delicious and nutritious seafood, rich in protein and omega‑3 fatty acids. From crispy fried to spicy curry, it’s a versatile dish loved for its fresh taste and health benefits..",
    backgroundColor:
      "linear-gradient(90deg, rgba(2,19,45,1) 4%, rgba(120,109,181,1) 49%, rgba(230,132,132,1) 100%, rgba(0,212,255,1) 100%)",
  },
  {
    name: "Strawberry Juice",
    descriptioN:
      "Strawberry Juice is a refreshing fresh fruit juice that is full of vitamin C and antioxidants and lot of invigorating flavor. Apart from fresh and ripe strawberries, this recipe also uses lime juice to make it tantalizing.",
    backgroundColor:
      "linear-gradient(90deg, rgba(101,18,18,1) 0%, rgba(186,44,44,1) 49%, rgba(235,134,80,1) 100%, rgba(0,212,255,1) 100%)",
  },
];

juiceArray.forEach((element, index) => {
  element.addEventListener("click", () => {
    document.querySelector("main").style.background =
      juiceData[index].backgroundColor;
    deg = deg - 90;
    juiceWheel.style.transform = `rotate(${deg}deg)`;
    fruitsWheel.style.transform = `rotate(${deg}deg)`;
    title.innerHTML = juiceData[index].name;
    description.innerHTML = juiceData[index].descriptioN;
    currentJuice.classList.remove("activePhoto");
    element.classList.add("activePhoto");
    currentJuice = element;
    juiceText.classList.add("fade-in");
    setTimeout(() => {
      juiceText.classList.remove("fade-in");
    }, 1000);
  });
});