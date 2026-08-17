/* =====================================================
   JAVASCRIPT
   PORTAFOLIO DE JOSÉ NEHEMÍAS GUAMINGA LEMA
   ===================================================== */


/* =====================================================
   MENÚ RESPONSIVE
   ===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* =====================================================
   CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
   ===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =====================================================
   ANIMACIÓN DE ELEMENTOS AL HACER SCROLL
   ===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   BARRAS DE HABILIDADES
   ===================================================== */

const progressBars =
    document.querySelectorAll(".progress-bar");


const skillsSection =
    document.getElementById("habilidades");


const skillsObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    progressBars.forEach(bar => {

                        const width =
                            bar.getAttribute("data-width");

                        bar.style.width = width;

                    });

                    skillsObserver.disconnect();

                }

            });

        },

        {
            threshold: 0.3
        }

    );


skillsObserver.observe(skillsSection);


/* =====================================================
   AÑO AUTOMÁTICO DEL FOOTER
   ===================================================== */

const yearElement =
    document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();


/* =====================================================
   EFECTO PARALLAX SUAVE EN LA TARJETA PRINCIPAL
   ===================================================== */

const heroCard =
    document.querySelector(".hero-card");


document.addEventListener("mousemove", event => {

    if (window.innerWidth < 900) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 80;

    const y =
        (window.innerHeight / 2 - event.clientY) / 80;

    heroCard.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =====================================================
   CAMBIAR APARIENCIA DEL HEADER AL HACER SCROLL
   ===================================================== */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================================
   ANIMACIÓN DEL CONTADOR DE EXPERIENCIA
   ===================================================== */

const cardData =
    document.querySelectorAll(".card-data strong");


function animateNumber(element, target, duration) {

    let start = 0;

    const increment =
        target / (duration / 20);

    const timer =
        setInterval(() => {

            start += increment;

            if (start >= target) {

                element.textContent =
                    target + "+";

                clearInterval(timer);

            } else {

                element.textContent =
                    Math.floor(start) + "+";

            }

        }, 20);

}


/* =====================================================
   INICIAR CONTADOR CUANDO APARECE LA TARJETA
   ===================================================== */

let counterStarted = false;


const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting &&
                    !counterStarted
                ) {

                    counterStarted = true;

                    if (cardData[0]) {

                        animateNumber(
                            cardData[0],
                            10,
                            1000
                        );

                    }

                }

            });

        },

        {
            threshold: 0.5
        }

    );


counterObserver.observe(heroCard);


/* =====================================================
   EFECTO DE ESCRITURA EN LA PROFESIÓN
   ===================================================== */

const profession =
    document.querySelector(".hero h2");

const professionText =
    "Policía Nacional del Ecuador";


let textIndex = 0;

profession.textContent = "";


function typeProfession() {

    if (textIndex < professionText.length) {

        profession.textContent +=
            professionText.charAt(textIndex);

        textIndex++;

        setTimeout(
            typeProfession,
            55
        );

    }

}


setTimeout(
    typeProfession,
    800
);


/* =====================================================
   DETECTAR SECCIÓN ACTIVA EN EL MENÚ
   ===================================================== */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   MENSAJE EN CONSOLA
   ===================================================== */

console.log(
    "Portafolio profesional de José Nehemías Guaminga Lema - 2036"
);

console.log(
    "Honor • Disciplina • Servicio"
);