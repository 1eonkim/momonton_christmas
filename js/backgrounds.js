let chosenImage = String(Math.floor(Math.random() * 21)) + ".jpg";

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
