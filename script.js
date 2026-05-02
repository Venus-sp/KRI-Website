document.addEventListener("DOMContentLoaded", function () {

  // MENU TOGGLE
  function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const body = document.body;

    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }

  function closeMenu() {
    const menu = document.getElementById("sideMenu");
    const body = document.body;

    menu.classList.remove("open");
    body.classList.remove("no-scroll");
  }

  window.toggleMenu = toggleMenu;
  window.closeMenu = closeMenu;


  // PROJECT TOGGLE
function toggleInfo(item) {

  const allItems = document.querySelectorAll(".img-item");

  allItems.forEach(el => {
    if (el !== item) {
      el.classList.remove("active");
    }
  });

  item.classList.toggle("active");
}

window.toggleInfo = toggleInfo;


  // SIDE MENU LINKS
  const menuLinks = document.querySelectorAll(".side-menu a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      const href = this.getAttribute("href");

      closeMenu();

      if (href.includes(".html")) {
        window.location.href = href;
        return;
      }

      if (href.startsWith("#")) {
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });


  // ACTIVITY ACCORDION
  function toggleAccordion(card) {
    if (!card) return;

    const allCards = document.querySelectorAll(".activity-card");

    allCards.forEach(c => {
      if (c !== card) {
        c.classList.remove("open");
      }
    });

    card.classList.toggle("open");
  }

  window.toggleAccordion = toggleAccordion;


  // MEMBER FLIP CARD
  function flipCard(card) {
    const allCards = document.querySelectorAll(".card-inner");

    allCards.forEach(c => {
      if (c !== card) {
        c.classList.remove("flipped");
      }
    });

    card.classList.toggle("flipped");
  }

  window.flipCard = flipCard;


  // LOGIN MODAL
  function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
  }

  function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
  }

  window.openLogin = openLogin;
  window.closeLogin = closeLogin;


});