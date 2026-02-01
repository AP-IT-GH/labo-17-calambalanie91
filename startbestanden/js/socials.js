const socialPlatforms = ["youtube", "instagram", "facebook", "twitter"];
const socialLinks = [
  "https://www.youtube.com",
  "https://www.instagram.com/",
  "https://www.facebook.com/",
  "https://twitter.com/",
];
const socials = [
  {
    name: "youtube",
    link: "youtube.com",
    image: "iconyoutube.png",
  },
  {
    name: "instagram",
    link: "instagram.com",
    image: "iconinstagram.png",
  },
];
let socialsUlElement = document.querySelector("ul");
for (let index = 0; index < socials.length; index++) {
  const social = social[index];
  let newLiElement = document.createElement("li");
  newLiElement.innerHTML = `<a href=$"{social.link}"><img src=>`;
  socialsUlElement.appendChild(newLiElement);
}
