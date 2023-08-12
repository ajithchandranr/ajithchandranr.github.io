/**
* Template Name: iPortfolio
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
    "use strict";
    /**
    * Easy selector helper function
    */
    const select = (el, all = false) => {
    el = el.trim();
    if (all) {
    return [...document.querySelectorAll(el)];
    } else {
    return document.querySelector(el);
    }
    };
    /**
    * Easy event listener function
    */
    const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
    if (all) {
    selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
    selectEl.addEventListener(type, listener);
    }
    }
    };
    /**
    * Easy on scroll event listener
    */
    const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
    };
    // JavaScript code to handle the form submission via AJAX
    document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const submitButton = document.getElementById("submit-button");
    const loadingMessage = document.querySelector(".loading");
    const errorMessage = document.querySelector(".error-message");
    const successMessage = document.querySelector(".sent-message");
    form.addEventListener("submit", function (event) {
    event.preventDefault();
    loadingMessage.style.display = "block";
    errorMessage.style.display = "none";
    successMessage.style.display = "none";
    const formData = new FormData(form);
    fetch("https://formspree.io/f/xaygeezj", {
    method: "POST",
    body: formData,
    headers: {
    Accept: "application/json",
    },
    })
    .then((response) => response.json())
    .then((data) => {
    loadingMessage.style.display = "none";
    if (data.ok) {
    // Form submission was successful
    successMessage.style.display = "block";
    form.reset(); // Reset the form after successful submission
    } else {
    // Form submission had an error
    errorMessage.style.display = "block";
    }
    })
    .catch(() => {
    loadingMessage.style.display = "none";
    errorMessage.style.display = "block";
    });
    });
    });
    // Get the zoom overlay element
    const zoomOverlay = document.createElement('div');
    zoomOverlay.classList.add('zoom-overlay');
    // Add the zoom overlay to the body
    document.body.appendChild(zoomOverlay);
    // Get all elements with the 'zoom-icon' class
    const zoomIcons = document.querySelectorAll('.zoom-icon');
    // Add click event listener to each zoom icon
    zoomIcons.forEach(zoomIcon => {
    zoomIcon.addEventListener('click', () => {
    const imageSrc = zoomIcon.dataset.image;
    // Create a new image element
    const zoomedImage = document.createElement('img');
    zoomedImage.src = imageSrc;
    // Add the zoomed image to the zoom overlay
    zoomOverlay.innerHTML = '';
    zoomOverlay.appendChild(zoomedImage);
    // Activate the zoom overlay
    zoomOverlay.classList.add('active');
    });
    });
    // Close the zoom overlay when clicked
    zoomOverlay.addEventListener('click', () => {
    zoomOverlay.classList.remove('active');
    });
    // Remove the zoom overlay when scrolling
    window.addEventListener('scroll', () => {
    zoomOverlay.classList.remove('active');
    });
    document.addEventListener("DOMContentLoaded", function(event) {
    var counterElement = document.getElementById("counter");
    var certificateCounterElement = document.getElementById("certificate-counter");
    var counterValueLeft = 1;
    var counterValueRight = 1;
    var maxCounterValueLeft = 2; // Maximum counter value for the left side
    var maxCounterValueRight = 5; // Maximum counter value for the right side
    var counterIntervalLeft;
    var counterIntervalRight;
    function startAnimation() {
    counterIntervalLeft = setInterval(function() {
    if (counterValueLeft <= maxCounterValueLeft) {
    counterElement.textContent = counterValueLeft + "+";
    }
    counterValueLeft++;
    if (counterValueLeft > maxCounterValueLeft) {
    clearInterval(counterIntervalLeft);
    }
    }, 500); // Animation speed for the left side
    counterIntervalRight = setInterval(function() {
    if (counterValueRight <= maxCounterValueRight) {
    certificateCounterElement.textContent = counterValueRight + "+";
    }
    counterValueRight++;
    if (counterValueRight > maxCounterValueRight) {
    clearInterval(counterIntervalRight);
    }
    }, 250); // Animation speed for the right side
    counterElement.style.transition = "all 0.5s ease-in-out"; // Transition for the left side animation
    certificateCounterElement.style.transition = "all 0.5s ease-in-out"; // Transition for the right side animation
    }
    function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }
    // Function to check if elements are in viewport on page load
    function checkElementsOnLoad() {
    if (
    isElementInViewport(counterElement) ||
    isElementInViewport(certificateCounterElement)
    ) {
    startAnimation();
    }
    }
    // Event listener for scroll event
    window.addEventListener("scroll", function() {
    if (
    isElementInViewport(counterElement) ||
    isElementInViewport(certificateCounterElement)
    ) {
    startAnimation();
    // Remove the event listener once the animation starts
    window.removeEventListener("scroll", arguments.callee);
    }
    });
    // Check elements on page load
    checkElementsOnLoad();
    });
    /**
    * Navbar links active state on scroll
    */
    let navbarlinks = select("#navbar .scrollto", true);
    const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = select(navbarlink.hash);
    if (!section) return;
    if (
    position >= section.offsetTop &&
    position <= section.offsetTop + section.offsetHeight
    ) {
    navbarlink.classList.add("active");
    } else {
    navbarlink.classList.remove("active");
    }
    });
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);
    /**
    * Scrolls to an element with header offset
    */
    const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
    top: elementPos,
    behavior: "smooth",
    });
    };
    /**
    * Back to top button
    */
    let backtotop = select(".back-to-top");
    if (backtotop) {
    const toggleBacktotop = () => {
    if (window.scrollY > 100) {
    backtotop.classList.add("active");
    } else {
    backtotop.classList.remove("active");
    }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
    }
    /**
    * Mobile nav toggle
    */
    on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
    });
    // JavaScript code
    // Create a variable for the social-links-2 element
    var socialLinks2 = document.createElement("div");
    socialLinks2.className = "social-links-2";
    // Create anchor elements for GitHub, LinkedIn, and Twitter
    var githubLink = document.createElement("a");
    githubLink.href = "#";
    githubLink.className = "github";
    var githubIcon = document.createElement("i");
    githubIcon.className = "bx bxl-github";
    githubLink.appendChild(githubIcon);
    socialLinks2.appendChild(githubLink);
    var linkedinLink = document.createElement("a");
    linkedinLink.href = "#";
    linkedinLink.className = "linkedin";
    var linkedinIcon = document.createElement("i");
    linkedinIcon.className = "bx bxl-linkedin";
    linkedinLink.appendChild(linkedinIcon);
    socialLinks2.appendChild(linkedinLink);
    var twitterLink = document.createElement("a");
    twitterLink.href = "#";
    twitterLink.className = "twitter";
    var twitterIcon = document.createElement("i");
    twitterIcon.className = "bx bxl-twitter";
    twitterLink.appendChild(twitterIcon);
    socialLinks2.appendChild(twitterLink);
    /**
    * Scrool with ofset on links with a class name .scrollto
    */
    on(
    "click",
    ".scrollto",
    function (e) {
    if (select(this.hash)) {
    e.preventDefault();
    let body = select("body");
    if (body.classList.contains("mobile-nav-active")) {
    body.classList.remove("mobile-nav-active");
    let navbarToggle = select(".mobile-nav-toggle");
    navbarToggle.classList.toggle("bi-list");
    navbarToggle.classList.toggle("bi-x");
    }
    scrollto(this.hash);
    }
    },
    true
    );
    /**
    * Scroll with ofset on page load with hash links in the url
    */
    window.addEventListener("load", () => {
    if (window.location.hash) {
    if (select(window.location.hash)) {
    scrollto(window.location.hash);
    }
    }
    });
    /**
    * Hero type effect
    */
    const typed = select(".typed");
    if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    });
    }
    /**
    * Skills animation
    */
    let skilsContent = select(".skills-content");
    if (skilsContent) {
    new Waypoint({
    element: skilsContent,
    offset: "80%",
    handler: function (direction) {
    let progress = select(".progress .progress-bar", true);
    progress.forEach((el) => {
    el.style.width = el.getAttribute("aria-valuenow") + "%";
    });
    },
    });
    }
    /**
    * Porfolio isotope and filter
    */
    window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
    itemSelector: ".portfolio-item",
    });
    let portfolioFilters = select("#portfolio-flters li", true);
    on(
    "click",
    "#portfolio-flters li",
    function (e) {
    e.preventDefault();
    portfolioFilters.forEach(function (el) {
    el.classList.remove("filter-active");
    });
    this.classList.add("filter-active");
    portfolioIsotope.arrange({
    filter: this.getAttribute("data-filter"),
    });
    portfolioIsotope.on("arrangeComplete", function () {
    AOS.refresh();
    });
    },
    true
    );
    }
    });
    /**
    * Initiate portfolio lightbox
    */
    const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
    });
    /**
    * Portfolio details slider
    */
    new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    },
    });
    /**
    * blog slider
    */
    new Swiper(".blog-slider", {
    speed: 600,
    loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
    el: ".swiper-pagination-custom",
    type: "bullets",
    clickable: true,
    },
    breakpoints: {
    320: {
    slidesPerView: 1,
    spaceBetween: 20,
    },
    1200: {
    slidesPerView: 3,
    spaceBetween: 20,
    },
    },
    });
    /**
    * Animation on scroll
    */
    window.addEventListener("load", () => {
    AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    });
    });
    /**
    * Initiate Pure Counter
    */
    new PureCounter();
    })();