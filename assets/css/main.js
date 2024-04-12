// NAV
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

// accordion
const accordionHeader= document.querySelector(".accordion__header");
const accordion= document.querySelector(".accordion");
accordionHeader.addEventListener("click", (e) => {
  accordion.classList.toggle("accordion__expanded");
});


// TABS
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});
