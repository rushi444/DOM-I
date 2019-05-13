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

const topNav = document.querySelectorAll('a'); 
for(let i = 0; i < topNav.length; i++) {
  topNav[i].textContent = siteContent['nav'][`nav-item-${i + 1}`]
}; 

const ctaH1 = document.querySelector('h1'); 
ctaH1.textContent = siteContent['cta']['h1']; 

const ctaButton = document.querySelector('button'); 
ctaButton.textContent = siteContent['cta']['button']; 

const ctaImg = document.getElementById('cta-img'); 
ctaImg.src = siteContent['cta']['img-src']; 

const mainContentHeaders = document.querySelectorAll('.main-content h4'); 
const mainContentPara = document.querySelectorAll('.main-content p'); 

mainContentHeaders[0].textContent = siteContent['main-content']['features-h4']; 
mainContentPara[0].textContent = siteContent['main-content']['features-content']; 

mainContentHeaders[1].textContent = siteContent['main-content']['about-h4']; 
mainContentPara[1].textContent = siteContent['main-content']['about-content'];

const midImg = document.getElementById('middle-img'); 
midImg.src = siteContent['main-content']['middle-img-src']; 

mainContentHeaders[2].textContent = siteContent['main-content']['services-h4']; 
mainContentPara[2].textContent = siteContent['main-content']['services-content'];

mainContentHeaders[3].textContent = siteContent['main-content']['product-h4']; 
mainContentPara[3].textContent = siteContent['main-content']['product-content'];

mainContentHeaders[4].textContent = siteContent['main-content']['vision-h4']; 
mainContentPara[4].textContent = siteContent['main-content']['vision-content'];

const contactHeaders = document.querySelector('.contact h4'); 
const contactPara = document.querySelectorAll('.contact p'); 

contactHeaders.textContent = siteContent['contact']['contact-h4']; 
contactPara[0].textContent = siteContent['contact']['address']; 
contactPara[1].textContent = siteContent['contact']['phone']; 
contactPara[2].textContent = siteContent['contact']['email']; 

const footerP = document.querySelector('footer p'); 
footerP.textContent = siteContent['footer']['copyright']; 



