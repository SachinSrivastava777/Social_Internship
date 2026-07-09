// ======================
// Navbar Scroll Effect
// ======================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "#111";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.boxShadow = "none";

    }

});


// ======================
// Smooth Scroll
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ======================
// Reveal Animation
// ======================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".feature,.menu-category,.special-card,.review-card,.contact-item"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ======================
// Active Navbar Link
// ======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ======================
// Floating Buttons Hover
// ======================

document.querySelectorAll(".call-btn,.whatsapp-btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.1)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


// ======================
// Footer Year
// ======================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
    `© ${year} Chick N' Roll. All Rights Reserved.`;

}