const app = document.getElementById("app");
app.classList.add(
  "bg-primary-customLightGray",
  "w-full",
  "h-screen",
  "flex",
  "justify-center",
  "items-center"
);

const card = document.createElement("div");
card.id = "card";
card.classList.add(
  "bg-primary-customWhite",
  "desktop:w-1/5",
  "w-4/5",
  "rounded-lg",
  "shadow-lg"
);
app.appendChild(card);

const cardContent = document.createElement("div");
cardContent.id = "card__content";
cardContent.classList.add("flex", "flex-col", "bg-primary-customWhite", "p-4", "rounded-lg");
card.appendChild(cardContent);

const qrCodeImage = document.createElement("img");
qrCodeImage.src = "./src/assets/image-qr-code.png";
qrCodeImage.classList.add("rounded-lg");
cardContent.appendChild(qrCodeImage);

const textContent = document.createElement("div");
textContent.id = "text-content";
textContent.classList.add("space-y-4", "p-4");
cardContent.appendChild(textContent);

const title = document.createElement("p");
title.classList.add("font-bold", "text-custom");
title.textContent = "Improve your front-end skills by building projects";
textContent.appendChild(title);

const paragraph = document.createElement("p");
paragraph.textContent =
  "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";
paragraph.classList.add("text-primary-customGrayishBlue");
textContent.appendChild(paragraph);
