const rightCard = document.querySelectorAll(".right-card");
const main_Img = document.querySelector(".Main_img");
const bottom_Img = document.querySelector(".bottom-img");

const icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  const links = document.querySelector("ul");
  $(links).slideToggle(2000);
});

const cardArray = [
  " ./Images/pngwing.com.png",
  " ./Images/pngwing.com (1).png",
  " ./Images/pngwing.com (2).png",
  " ./Images/pngwing.com (3).png",
];
const smallArray = [
  "./Images/pngwing.com (4).png ",
  "./Images/pngwing.com (5).png ",
  " ./Images/pngwing.com (6).png",
  "./Images/pngwing.com (7).png ",
];
function moveObject() {
  rightCard.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (index < cardArray.length) {
        main_Img.src = cardArray[index];
        main_Img.classList.add("rotate");
        setTimeout(() => {
          main_Img.classList.remove("rotate");
        }, 2500);
      }
      if (index < smallArray.length) {
        bottom_Img.src = smallArray[index];
       
      }
    });
  });
}
moveObject();

function handleResize() {
  const heroTitle = document.querySelector(".hero-container h1");

  if (window.innerWidth <= 989) {
    heroTitle.classList.remove("animate__backInDown");
  } else {
    heroTitle.classList.add("animate__backInDown");
  }
}

window.addEventListener("load", handleResize);

window.addEventListener("resize", handleResize);
