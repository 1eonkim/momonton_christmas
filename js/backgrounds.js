let chosenImage = String(Math.floor(Math.random() * 20)) + ".jpg";

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
