// Message dans la console
console.log("Portfolio de Diarimendrika Ariela chargé avec succès !");

// Animation simple au chargement
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(
        ".skill-card, .project"
    );

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition = "0.5s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 100);

    });

});