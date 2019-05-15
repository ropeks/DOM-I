const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// images
let codeImg = document.getElementById("cta-img");
codeImg.setAttribute('src', siteContent["cta"]["img-src"])

let midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

// nav
let nav = document.querySelectorAll("nav a");
nav[0].textContent = siteContent.nav["nav-item-1"]
nav[1].textContent = siteContent.nav["nav-item-2"]
nav[2].textContent = siteContent.nav["nav-item-3"]
nav[3].textContent = siteContent.nav["nav-item-4"]
nav[4].textContent = siteContent.nav["nav-item-5"]
nav[5].textContent = siteContent.nav["nav-item-6"]

// head
let h1 = document.querySelector("h1");
h1.textContent = siteContent.cta["h1"]

let button = document.querySelector("button");
button.textContent = siteContent.cta["button"]

// main, bottom and footer
let h4 = document.querySelectorAll("h4");
h4[0].textContent = siteContent["main-content"]["features-h4"]
h4[1].textContent = siteContent["main-content"]["about-h4"]
h4[2].textContent = siteContent["main-content"]["services-h4"]
h4[3].textContent = siteContent["main-content"]["product-h4"]
h4[4].textContent = siteContent["main-content"]["vision-h4"]
h4[5].textContent = siteContent["contact"]["contact-h4"]

let p = document.querySelectorAll("p");
p[0].textContent = siteContent["main-content"]["features-content"]
p[1].textContent = siteContent["main-content"]["about-content"]
p[2].textContent = siteContent["main-content"]["services-content"]
p[3].textContent = siteContent["main-content"]["product-content"]
p[4].textContent = siteContent["main-content"]["vision-content"]
p[5].textContent = siteContent["contact"].address
p[6].textContent = siteContent["contact"].phone
p[7].textContent = siteContent["contact"].email
p[8].textContent = siteContent["footer"].copyright

// task 3
nav[0].style.color = `green`;
nav[1].style.color = `green`;
nav[2].style.color = `green`;
nav[3].style.color = `green`;
nav[4].style.color = `green`;
nav[5].style.color = `green`;

let item1 = document.createElement("a");
item1.textContent = "Item1";
item1.id = "item1";

let item2 = document.createElement("a");
item2.textContent = "Item2";
item2.id = "item2";

document.querySelector("header nav").prepend(item1);
document.querySelector("header nav").append(item2);