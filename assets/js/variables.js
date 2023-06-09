// NAZWA SPÓŁKI
const companyNodeList = document.querySelectorAll(".company-name");
companyNodeList.forEach((item) => {
  item.innerText =
    "APP AND ROLL sp z o.o, Marszałkowska 58, 00-545 Warszawa, Polska , NIP 7010348607";
});

//EMAIL
const emailNodeList = document.querySelectorAll(".company-email");
emailNodeList.forEach((item) => {
  item.innerText = "contactsk@appandroll.com";
});

// DOMENA
const domainNodeList = document.querySelectorAll(".domain-name");
domainNodeList.forEach((item) => {
  item.innerText = "search-best-offers24.com";
});

//CENA
const priceNodeList = document.querySelectorAll(".product-price");
priceNodeList.forEach((item) => {
  item.innerText = "89";
});
